# User Profile Card Generator

A modern React application that fetches a list of user profiles from an API and displays them as reusable, styled cards.

## Features

- Fetches a list of 5 random users from a public API.
- Displays the user data (name, email, and profile picture) in a clean, card-like format.
- Handles different UI states, including loading and error messages.
- Uses a reusable component (`UserProfileCard`) to display each user.

## Technologies Used

- **Vite:** A modern and fast build tool for React.
- **React (`useState`, `useEffect`):** For managing the component's state and side effects.
- **`async/await`:** For handling asynchronous data fetching.
- **`fetch` API:** To make network requests to the user data API.
- **Component-Based Architecture:** The project is structured with a parent `App` component and a reusable child component.
- **Conditional Rendering:** The UI dynamically changes based on `isLoading` and `error` states.
- **`.map()` Method:** The project iterates over an array of user data to render a list of components.

## API

This project uses the [Random User Generator API](https://randomuser.me/) to get the user profile data.

## How to Run Locally

1.  Clone the repository:
    `git clone https://github.com/YOUR_USERNAME/vite-user-profile-cards.git`
2.  Navigate to the project directory:
    `cd vite-user-profile-cards`
3.  Install the dependencies:
    `npm install`
4.  Start the development server:
    `npm run dev`

The application will be available at `http://localhost:5173`.
