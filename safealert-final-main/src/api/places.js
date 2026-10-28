import { haversineDistanceKm } from '../utils/geo'

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search'

export async function fetchNearbyFacilities(lat, lon) {
  try {
    // Reverse geocode the selected coordinates to get the area name.
    const reverseResponse = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    )

    if (!reverseResponse.ok) {
      throw new Error('Unable to identify the selected location.')
    }

    const locationData = await reverseResponse.json()

    const areaName =
      locationData.address?.city ||
      locationData.address?.town ||
      locationData.address?.village ||
      locationData.address?.municipality ||
      locationData.display_name?.split(',')[0]

    if (!areaName) {
      throw new Error('Unable to identify the selected area.')
    }

    // Search OpenStreetMap for hospitals and clinics in the area.
    const searchQueries = [
      `hospital near ${areaName}`,
      `clinic near ${areaName}`,
      `shelter near ${areaName}`,
    ]

    const results = []

    for (const searchQuery of searchQueries) {
      const url =
        `${NOMINATIM_URL}?` +
        `q=${encodeURIComponent(searchQuery)}` +
        `&format=json` +
        `&limit=5` +
        `&addressdetails=1`

      const response = await fetch(url)

      if (!response.ok) {
        continue
      }

      const data = await response.json()

      for (const item of data) {
        const facility = mapNominatimResult(
          item,
          lat,
          lon,
          searchQuery
        )

        if (facility) {
          const alreadyExists = results.some(
            (existing) =>
              existing.name === facility.name &&
              Math.abs(existing.lat - facility.lat) < 0.0001 &&
              Math.abs(existing.lon - facility.lon) < 0.0001
          )

          if (!alreadyExists) {
            results.push(facility)
          }
        }
      }
    }

    return results
      .sort((a, b) => a.distanceKm - b.distanceKm)
      .slice(0, 10)
  } catch (error) {
    console.error(
      'Nearby facility lookup failed:',
      error
    )

    throw new Error(
      'Nearby facilities are temporarily unavailable. Please try again.'
    )
  }
}

function mapNominatimResult(
  item,
  originLat,
  originLon,
  searchQuery
) {
  const facilityLat = Number(item.lat)
  const facilityLon = Number(item.lon)

  if (
    !Number.isFinite(facilityLat) ||
    !Number.isFinite(facilityLon)
  ) {
    return null
  }

  const lowerQuery = searchQuery.toLowerCase()

  let facilityType = 'hospital'

  if (lowerQuery.includes('shelter')) {
    facilityType = 'shelter'
  }

  const address = [
    item.address?.road,
    item.address?.suburb,
    item.address?.city ||
      item.address?.town ||
      item.address?.village,
  ]
    .filter(Boolean)
    .join(', ')

  return {
    id: `osm-${item.osm_type}-${item.osm_id}`,

    facilityType,

    name:
      item.name ||
      item.display_name?.split(',')[0] ||
      (facilityType === 'hospital'
        ? 'Hospital / Clinic'
        : 'Emergency Shelter'),

    lat: facilityLat,
    lon: facilityLon,

    distanceKm: haversineDistanceKm(
      originLat,
      originLon,
      facilityLat,
      facilityLon
    ),

    address: address || null,
  }
}