const PHOTON_URL = 'https://photon.komoot.io/api/'

let controller = null

export async function geocodeSearch(query) {
  const trimmed = query.trim()

  if (!trimmed || trimmed.length < 2) {
    return []
  }

  // Cancel the previous request if the user is typing again
  if (controller) {
    controller.abort()
  }

  controller = new AbortController()

  const params = new URLSearchParams({
    q: trimmed,
    limit: '8',
    lang: 'en',
  })

  try {
    const res = await fetch(`${PHOTON_URL}?${params.toString()}`, {
      signal: controller.signal,
    })

    if (!res.ok) {
      throw new Error(`Location search failed: ${res.status}`)
    }

    const data = await res.json()

    return (data.features || [])
      .map((feature) => {
        const coordinates = feature.geometry?.coordinates
        const properties = feature.properties || {}

        if (!coordinates || coordinates.length < 2) {
          return null
        }

        const [lon, lat] = coordinates

        const parts = [
          properties.name,
          properties.locality,
          properties.district,
          properties.city,
          properties.state,
          properties.country,
        ].filter(Boolean)

        // Remove duplicate consecutive/repeated names
        const uniqueParts = [...new Set(parts)]

        return {
          label: uniqueParts.join(', '),
          lat: Number(lat),
          lon: Number(lon),
        }
      })
      .filter(
        (location) =>
          location &&
          Number.isFinite(location.lat) &&
          Number.isFinite(location.lon)
      )
  } catch (error) {
    if (error.name === 'AbortError') {
      return []
    }

    throw error
  }
}