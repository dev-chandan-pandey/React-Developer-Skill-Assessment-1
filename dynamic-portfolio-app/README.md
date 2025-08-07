# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



Dynamic Portfolio Generator 🚀
This is a React-based application that allows users to create and showcase their professional portfolios dynamically. Users can select from predefined templates, fill out a comprehensive multi-section form with their details, and instantly generate a shareable portfolio page. The application also features a listing page where all created profiles can be viewed and filtered.



📋 Features
Template Selection: Choose from two distinct design templates before creating a portfolio.

Comprehensive Multi-Section Form: A user-friendly form divided into sections:

Hero Section (Name, Title, Image)

About Me (Bio, Contact Info, Socials)

Skills

Services

Portfolio Projects

Testimonials

Blog

Profile Card Listing: After submission, a new profile card is added to a central list, displaying key information like name, role, bio, and skills.

Dynamic Portfolio Generation: Clicking "View Portfolio" on a card navigates to a unique, dynamically generated page (/portfolio/:id) that renders the user's data using their chosen template.

API Integration: All portfolio data is persisted via a backend API.

POST: Submits and saves new portfolio data.

GET: Fetches all portfolios for the listing page and individual portfolios for the detail page.

Edit Profile: Functionality to update and modify existing portfolio information.

Dynamic Filtering: Filter professional profiles on the listing page by skills or job title/role.

🛠️ Tech Stack & Libraries
Frontend: React.js

Routing: React Router (react-router-dom)

HTTP Client: Axios for making API requests.

State Management: React Context API + useReducer for global state.

Styling: CSS Modules / Styled-Components.

Mock Backend: JSON Server (for demonstration purposes).

⚙️ Setup and Installation
Follow these steps to run the project locally on your machine.

1. Clone the Repository


`git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
`


2. Install Dependencies
Install the necessary npm packages for both the client (React app) and the mock server.

   npm install`
           `


3. Configure Environment Variables
Create a .env file in the root of the project and add the API URL.

`REACT_APP_API_URL=http://localhost:3001`


4. Start the Mock API Server
The project uses json-server to simulate a backend. The database file db.json is included.

`npm run server`


This will start the mock API server on `http://localhost:3001`.


5. Start the React Application
In a new terminal window, run the following command:

`npm start`

The application will open in your default browser at `http://localhost:3000`.


🗂️ Folder Structure
The project follows a standard React application structure to keep the codebase organized and maintainable.


```
/public
/src
|-- /api             # API call functions (e.g., using Axios)
|-- /assets          # Images, fonts, and other static assets
|-- /components      # Reusable UI components (Button, Card, Input, Footer, etc.)
|-- /context         # React Context for global state management
|-- /hooks           # Custom hooks (e.g., useFetch)
|-- /pages           # Top-level page components
|   |-- FormPage.js
|   |-- ProfessionalsListPage.js
|   |-- PortfolioPage.js
|   |-- ...
|-- /templates       # Portfolio template components
|   |-- Template1.js
|   |-- Template2.js
|-- App.js           # Main app component with routing logic
|-- index.css        # Global styles
|-- index.js         # Application entry point
db.json              # Mock database for json-server
package.json
README.md
```

🌐 API Endpoints
The application interacts with a mock REST API with the following endpoints:

Method	Endpoint	Description

```
GET	/professionals	Fetches a list of all professional profiles.
GET	/professionals/:id	Fetches a single professional by its ID.
POST	/professionals	Creates a new professional profile.
PUT	/professionals/:id	Updates an existing professional profile.
DELETE	/professionals/:id	Deletes a professional profile.

