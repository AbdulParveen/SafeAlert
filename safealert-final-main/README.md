# 🚨 SafeAlert – Real-Time Natural Disaster & Emergency Awareness Platform

SafeAlert is a web-based emergency awareness platform designed to help users monitor natural disasters, explore affected areas, find nearby emergency facilities, and identify safe road routes to nearby help.

The platform combines real-time/publicly available disaster data, interactive maps, nearby emergency-facility discovery, and road-route calculation into a single interface.

---

## 🌍 Problem Statement

During natural disasters and emergencies, people need quick access to reliable information about:

* Current disaster events
* Locations affected by disasters
* Nearby hospitals and clinics
* Emergency shelters
* Safe road routes to nearby help
* Distance and estimated travel time

Information is often scattered across different platforms, making it difficult to quickly understand the situation and find assistance.

**SafeAlert brings these capabilities together in one platform.**

---

## ✨ Key Features

### 🌎 Disaster Monitoring

* Displays earthquake information from the USGS.
* Displays natural event information using NASA EONET.
* Displays available flood-related data.
* Automatically refreshes disaster information periodically.
* Shows disaster events on an interactive map.

### 🔎 Search & Filtering

Users can filter disaster information by:

* Search keyword
* Disaster/event type
* Severity
* Time range

### 🗺️ Interactive Map

* Interactive Leaflet map.
* Disaster markers.
* Selected-location marker.
* Nearby hospital and shelter markers.
* Road route visualization.

### 🏥 Nearby Emergency Help

Users can search for a location and discover nearby:

* Hospitals
* Clinics
* Emergency shelters

The application calculates the approximate distance from the selected location.

### 🚗 Road Route Assistance

After selecting an emergency facility:

1. The user selects a hospital or shelter.
2. SafeAlert calculates a road route.
3. The route is displayed on the map.
4. Distance is shown.
5. Estimated travel time is shown.

This provides a Google-Maps-like route experience inside the application.

### 🔄 Automatic Updates

Disaster information is periodically refreshed so that users can see updated event information without manually reloading the application.

---

## 🧰 Technology Stack

### Frontend

* React
* Vite
* JavaScript
* Tailwind CSS
* Leaflet
* React Leaflet

### APIs & Data Sources

* USGS Earthquake API
* NASA EONET
* OpenStreetMap
* Overpass API / OpenStreetMap-based facility data
* Nominatim
* OSRM (Open Source Routing Machine)

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Node.js
* npm

---

## 🤖 AI Tools Used

AI tools were used as **development assistants** for understanding concepts, debugging, improving code structure, and developing the user interface.

### ChatGPT

**Purpose:**

* Understanding project requirements and functionality
* Planning application architecture
* Explaining React and JavaScript concepts
* Debugging errors
* Identifying issues in API integration
* Improving component structure
* Designing disaster monitoring and emergency-help workflows
* Assisting with Leaflet map and routing implementation
* Reviewing code and suggesting improvements
* Creating and refining project documentation

### Claude

**Purpose:**

* UI/UX design exploration
* Generating design ideas and layout suggestions
* Exploring alternative approaches for the application interface
* Reviewing frontend implementation ideas

### AI-Assisted Development Approach

AI tools were used as **assistive development tools**, while the final application was integrated, tested, modified, and verified by the development team.

The team evaluated AI-generated suggestions and adapted them according to the project's requirements, functionality, and stability.

---

## 🏗️ Application Architecture

```text
                         ┌─────────────────────┐
                         │      SafeAlert      │
                         │      React App      │
                         └──────────┬──────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
       Disaster Data          Location Search       Emergency Help
              │                     │                     │
       ┌──────┼──────┐              │             ┌───────┴────────┐
       ▼      ▼      ▼              ▼             ▼                ▼
     USGS   NASA   Flood       OpenStreetMap   Hospitals       Shelters
              │                     │
              └──────────┬──────────┘
                         ▼
                  Interactive Map
                    (Leaflet)
                         │
                         ▼
                  Route Calculation
                       (OSRM)
                         │
                         ▼
                 Distance + ETA
```

---

## 📊 Data Sources

### USGS

USGS earthquake data is used to display earthquake events and related information.

### NASA EONET

NASA's Earth Observatory Natural Event Tracker (EONET) is used as a source for natural-event information.

### OpenStreetMap

OpenStreetMap data is used to identify mapped emergency facilities such as hospitals, clinics, and shelters.

### Overpass / Nominatim

OpenStreetMap services are used to search and retrieve location-related facility information.

### OSRM

OSRM is used to calculate road-based routes between the user's selected location and an emergency facility.

---

## 🔐 Data & Safety Note

SafeAlert aggregates publicly available disaster and geographic information from external data sources.

The information displayed by the application should be treated as **awareness and decision-support information**, not as a replacement for official emergency instructions or local authorities.

In an actual emergency, users should follow instructions from relevant government and emergency-response authorities.

---

## 📁 Project Structure

```text
SafeAlert/
│
├── src/
│   ├── api/
│   │   ├── eonet.js
│   │   ├── flood.js
│   │   ├── places.js
│   │   ├── routing.js
│   │   └── usgs.js
│   │
│   ├── components/
│   │   ├── EventDetailsModal.jsx
│   │   ├── EventList.jsx
│   │   ├── Header.jsx
│   │   ├── LocationSearch.jsx
│   │   ├── MapView.jsx
│   │   ├── NearbyHelpList.jsx
│   │   └── SearchFilterBar.jsx
│   │
│   ├── utils/
│   │   ├── geo.js
│   │   └── normalizeEvents.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Open the project

```bash
cd SafeAlert
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the localhost URL displayed in the terminal, usually:

```text
http://localhost:5173/
```

---

## 🧪 Example Workflow

### Disaster Monitoring

```text
Open SafeAlert
      ↓
View disaster events
      ↓
Search / filter events
      ↓
Select an event
      ↓
View event details
```

### Emergency Help & Navigation

```text
Open Nearby Help
      ↓
Search for a location
      ↓
View nearby hospitals / shelters
      ↓
Select a facility
      ↓
Calculate road route
      ↓
View route on map
      ↓
View distance + estimated time
```

---

## 🎯 Future Improvements

Possible future enhancements include:

* Official government emergency-alert integration
* Live weather information
* Real-time traffic information
* Turn-by-turn navigation
* Emergency contact functionality
* Push notifications
* User location tracking
* Offline emergency information
* Mobile application
* Multi-language support
* More disaster data sources
* Advanced risk-zone visualization
* Integration with local emergency services

---

## 👥 Team

**Team Name:** `<YOUR TEAM NAME>`

**Project:** SafeAlert – Real-Time Natural Disaster & Emergency Awareness Platform

---

## 📌 Disclaimer

SafeAlert is developed as an emergency-awareness and technology project.

The application uses publicly available data and third-party services. Data availability, accuracy, coverage, and update frequency may vary depending on the external service providers.

Users should always rely on official emergency authorities and government agencies for critical emergency instructions.

---

## ⭐ Conclusion

SafeAlert aims to make emergency information easier to understand and act upon by combining **real-time disaster awareness, interactive maps, nearby emergency facilities, and road-route assistance** into a single platform.

> **Know the danger. Find help. Choose a route. Stay safe.**
