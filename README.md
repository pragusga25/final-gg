**Project TKP - Tokopedia Play (Clone)**

<img src="https://www.tkp3.tech/logo-color.png" alt="tkp" width="300"/>

TKP (Tokopedia Play) is a web application that allows users to promote products using videos and engage with other users through comments. The application is built using modern web technologies and provides a seamless experience for both content creators and viewers.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Bonus Features](#bonus-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Pages](#pages)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)

## Features

1. **Multi-page Navigation**:

   - Home Page: Displays a list of videos with thumbnails from YouTube.
   - Video Detail Page: Allows users to view video details, related products, and comments.
   - User Profile Page: Enables users to view and edit their profiles or view profiles of other users.

2. **Video List and Detail**:

   - Users can view a list of videos with thumbnails on the home page.
   - Clicking on a video opens the video detail page with related products and comments.

3. **Comments**:

   - Users can leave comments on videos.
   - Comment form requires only username and comment input.
   - Submitted comments appear in the list of comments after successful submission.

4. **Authentication and Profile**:

   - Users can register, log in, and log out.
   - User profiles include profile images and bios.
   - Users can edit their profiles and view profiles of other users.

5. **Live Commenting with WebSocket**:

   - Users can create comments in two modes: guest and logged-in.
   - Logged-in users can delete their comments.
   - WebSocket enables real-time updating of comments.

6. **Live Tracking Online Status**:

   - Users can see if other users are online or offline.

7. **Fuzzy Search for Videos**:
   - Users can search for videos with typo tolerance.

## Bonus Features

- **Live Commenting with WebSocket**:

  - Users can create comments in two modes: guest and logged-in.
  - Logged-in users can delete their comments.

- **Authentication and Profile**:

  - Users can register, log in, and log out.
  - User profiles include profile images, bio, and username.
  - Users can edit their profiles and view profiles of other users.
  - Users can edit their profile picture by uploading the image.

- **Live Tracking Online Status**:

  - Users can see if other users are online or offline.

- **Fuzzy Search for Videos**:
  - Users can search for videos with typo tolerance.

## Tech Stack

The TKP (Tokopedia Play) project utilizes a modern and comprehensive tech stack to deliver a seamless and feature-rich user experience:

1. **React.js**: A powerful JavaScript library for building user interfaces. React.js provides a component-based architecture that allows for the creation of reusable UI elements, enhancing code organization and maintainability.

2. **Vite**: A next-generation build tool that offers fast development and build times. With native ES module support, Vite significantly reduces the overhead of building and bundling, resulting in a quicker development workflow.

3. **TypeScript**: A statically typed superset of JavaScript. TypeScript adds static type checking to your codebase, helping catch errors early and improving overall code quality and developer productivity.

4. **React Router**: A widely-used library for managing routing in React applications. React Router enables the creation of multiple pages, ensuring smooth navigation between components while maintaining a single-page application feel.

5. **React Query**: A data-fetching library that simplifies managing and synchronizing server data in React applications. By providing a powerful caching system and declarative data fetching, React Query enhances performance and reduces redundant API requests.

6. **Axios**: A versatile HTTP client used to make API requests. Axios simplifies data fetching from the server, making it easier to retrieve videos, products, user data, and other information necessary for the application's features.

7. **Tailwind CSS**: A utility-first CSS framework that promotes efficient styling. Tailwind CSS offers a collection of pre-designed utility classes that enable rapid and consistent UI development without sacrificing customization.

8. **Socket.io**: A real-time communication library based on WebSockets. Socket.io enables the implementation of features like live commenting and online user tracking, enhancing interactivity and user engagement.

9. **Daisy UI**: An extension to Tailwind CSS that provides ready-made components for building user interfaces. Daisy UI accelerates the development process by offering customizable components designed to seamlessly integrate with Tailwind's utility classes.

Each component of this tech stack contributes to the overall quality, performance, and functionality of the TKP project. By leveraging these technologies, the application delivers a rich user experience, efficient data management, and real-time interactions.

## Getting Started

Before running the TKP (Tokopedia Play) frontend application locally, ensure that the corresponding backend application is up and running. Before running the TKP (Tokopedia Play) frontend application locally, ensure that the corresponding backend application is up and running.

### Installation

1. Clone the repository: `git clone https://github.com/pragusga25/final-gg.git`
2. Navigate to the project folder: `cd final-gg`
3. Install dependencies: `yarn`

### Environment Variables

1. Create a `.env` file in the project root.
2. Copy the content from `.env.example` and provide appropriate values for your environment.

## Usage

To start the development server, run:

```
yarn dev
```

Open your web browser and visit `http://localhost:5173` to access the application.

## Pages

- `/`: Home page displaying a list of videos with thumbnails.
- `/watch/:id`: Video detail page showing video details, related products, and comments.
- `/:username`: User profile page for viewing and editing user profiles.

## Folder Structure

- `public`: Public assets and index.html
- `src`
  - `api`: API-related functions
  - `components`: Reusable UI components
  - `constants`: Application constants
  - `contexts`: React contexts
  - `hooks`: Custom React hooks
  - `models`: Data models and types
  - `pages`: Application pages
  - `types`: Custom TypeScript types
  - `utils`: Utility functions
- `App.tsx`: Main application component
- `index.css`: Global styles
- `main.tsx`: Entry point for the application

## Deployment

The project has been deployed and can be accessed at [https://www.tkp3.tech](https://www.tkp3.tech).
