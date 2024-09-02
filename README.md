# TravelTrucks - Web Application for Camper Rentals

## General Information

This project is the front-end part of the web application for the company
"TravelTrucks", which specializes in camper rentals. The web application
includes several pages, including:

- Home Page
- Catalog Page
- Detailed Description Page for a specific camper with reviews and a booking
  form.

## Project Objective

To create an intuitive and functional platform for users looking to rent
campers.

## Project Requirements

### Framework and Libraries

- **React + Vite**: for building a component-based interface.
- **Redux Toolkit**: for state management.
- **React Router**: for routing.
- **Axios**: for handling HTTP requests.

### Main Pages

- **Home Page**: contains a banner with the main call to action.
- **Catalog**: displays all available campers with filtering options.
- **Specific Camper Page**: contains a detailed description, photo gallery,
  reviews, and booking form.

### Routing

- `/`: Home Page
- `/catalog`: Catalog Page
- `/catalog/:id`: Specific Camper Page

### Application State

Utilizes Redux for state management, including the list of vehicles, filter
state, and the favorites list.

### Functional Requirements

- Navigation to the catalog page from the home page.
- Filtering of vehicles.
- Favorites selection persists on page refresh.
- Navigation to detailed page from the catalog.
- Loading additional cards on the catalog page.
- Displaying reviews on the specific camper page.
- Booking form with notification for successful booking.

### Design

Layout for desktop version according to the
[Figma](<https://www.figma.com/design/CKZFWA5GndLlVMwKcQjum3/Campers-(Copy)?node-id=0-1&t=rUpBYaciLRKP9XJ6-1>)
mockup.

### Development

Adheres to the DRY (Don't Repeat Yourself) principle; the code is clean and
readable.

## How to Run the Project

### Prerequisites

Before running the project, ensure that you have the following installed on your
computer:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm or yarn

### Cloning the Repository

First, clone the repository to your local machine.

```bash
git clone https://github.com/InnaIvBoiko/TravelTrucks.git
cd traveltrucks
```

### Installing Dependencies

Install the necessary packages using npm or yarn.

```bash
npm install
# or
yarn install
```

### Running the Project

Start the local development server.

```bash
npm run dev
# or
yarn dev
```

### Opening the Browser

Open [localhost:5173](http://localhost:5173) in your browser to view the
project.

## Deployed Project

The project is deployed on [Vercel](https://travel-trucks-liart.vercel.app/).
