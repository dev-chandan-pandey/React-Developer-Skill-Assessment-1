
Mini Property Listing Dashboard
This project is a React-based web application built as a skill assessment for a React Developer position. It provides a user-friendly interface to view, filter, add, and inspect property listings fetched from a mock API.

✨ Features
Dynamic Property Display: Fetches and displays a list of properties from a mock API endpoint.

Card-Based UI: Each property is shown in a clean, modern card layout.

Filtering: Users can filter properties by their type (e.g., Plot, Shed, Retail Store).

Search with Highlighting: A search bar allows users to find properties by name or location, with the matched text highlighted in the results.

Add New Properties: A dedicated form allows users to add new properties to the list. The list updates dynamically upon submission.

Detailed View Pane: Clicking on a property displays its full details, including an image and description, in a dedicated pane on the right side of the screen.

Responsive Design: The layout is designed to be functional and visually appealing across different screen sizes.

🛠️ Tech Stack
Frontend: React.js (using Vite for the development environment)

State Management: React Hooks (useState, useEffect, useMemo)

API Client: Axios

Mock Backend: json-server

Styling: Plain CSS with a modern, clean design.

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js (v14 or newer)

npm (usually comes with Node.js)

Installation & Setup
Clone the repository
`
git clone https://your-repository-url.git
cd property-dashboard
`
Install frontend dependencies
`
npm install
`
Set up and run the mock API

First, install json-server globally if you haven't already:
`
npm install -g json-server
`
In the project's root directory, run the following command to start the mock server using the db.json file.
`
json-server --watch db.json --port 3001
`
The API server will now be running at` http://localhost:3001.`

Run the React development server

In a new terminal window (while the API server is still running), start the React application:
`
npm run dev

`
The application will be available at` http://localhost:5173 `(or another port if 5173 is busy).

📁 Project Structure
The project is organized into a clear component-based structure to promote reusability and maintainability.

`
/
├── public/
├── src/
│   ├── components/
│   │   ├── AddPropertyForm.jsx   # Form for adding new properties
│   │   ├── FilterBar.jsx         # Dropdown for filtering by type
│   │   ├── PropertyCard.jsx      # Individual property card component
│   │   ├── PropertyList.jsx      # Grid container for all property cards
│   │   └── ViewDetailsPane.jsx   # Pane to show full details of a property
│   │
│   ├── services/
│   │   └── api.js                # Handles all API calls (GET, POST)
│   │
│   ├── App.css                   # Main stylesheet for the application
│   ├── App.jsx                   # Main application component, manages state
│   └── main.jsx                  # Entry point of the React application
│
├── .gitignore
├── db.json                       # Mock database for json-server
├── index.html
├── package.json
└── README.md
`
📝 API Endpoints
The application relies on a mock API provided by` json-server.`

`
GET /properties
`
Description: Fetches an array of all property objects.

Response: `200 OK`

`
[
  {
    "id": 1,
    "type": "Plot",
    "name": "Pune Greenfield",
    "location": "Pune",
    "price": 250000,
    "description": "A large plot of land...",
    "imageUrl": "..."
  }
]
`

`POST /properties`

Description: Adds a new property to the database.

Request Body: A JSON object representing the new property.

Response: 201 Created with the newly created property object.

📸 Screenshots

![explore screenshot dir]('React-Developer-Skill-Assessment-1\property-dashboard\src\screenshots\image.png')
