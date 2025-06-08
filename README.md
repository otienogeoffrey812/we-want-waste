# Skip Selection Page

## Overview

This project presents a redesigned, responsive **Skip Selection** page, built with **React** and **Bootstrap**, as part of a multi-step booking flow interface.

## Approach

- **Component-Based Structure**: The UI is broken into multiple components for modularity and reusability.
- **Responsive Grid Layout**: Skips are displayed using a flexible grid system that adapts to screen sizes, ensuring optimal usability on mobile and desktop.
- **Progress Bar with Overflow Handling**: The progress bar reflects the current step with icons and dynamic styling, while handling horizontal overflow gracefully on smaller screens.
- **State Persistence**: Selected skip data is stored in `localStorage` to preserve user choices across sessions or page reloads.
- **Animated Footer Bar**: When a skip is selected, a footer bar smoothly animates into view, showing selection details and navigation buttons.

## UX Principles

- **Clarity**: Clean visuals and clear pricing make choices easy to understand.

- **Simplicity**: Only essential information is shown to avoid clutter.

- **Visual Feedback**: Skip selection is clearly highlighted with visual cues.

- **User Control**: Users can freely switch skip sizes and navigate back or forward.

- **Contextual Warnings**: Skips that are not suitable for heavy waste or not allowed on the road display clear warning badges.

- **Preventing Errors**: Skips with critical restrictions are disabled from selection, preventing user mistakes and improving decision accuracy.

## Folder Structure

Each folder is structured to keep responsibilities clear and scalable:

- api/ – Handles external data fetching and server communication.

- hooks/ – Contains logic encapsulated as custom React hooks.

- components/ – Small, reusable UI building blocks.

- pages/ – Full page-level views routed via React Router or otherwise rendered directly.

## Technologies Used

- React
- React Bootstrap
- Bootstrap Icons
- CSS (custom animations and layout tweaks)

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/otienogeoffrey812/we-want-waste
   ```
2. Navigate to the project directory:
   ```bash
   cd we-want-waste
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the application:
   ```bash
   npm start
   ```
2. Open your web browser and go to:
   ```
   http://localhost:3000
   ```