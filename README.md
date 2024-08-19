# React Form Submission

This project is a simple React-based form submission application that allows users to fill out and submit a form with various input types. The form includes fields for entering names, email, contact information, gender selection, file upload, URL input, dropdown selection, and a textarea for additional information.

## Project Structure

- **`index.html`**: The HTML file that serves as the entry point for the React application. It contains a root div where the React components are rendered.
- **`index.js`**: The main JavaScript file that initializes the React application. It uses the new React 18 `createRoot` API to render the `App` component.
- **`app.js`**: The primary React component that includes the form and manages its state using React hooks (`useState`).
- **`App.css`**: The CSS file that styles the application, ensuring a clean and modern look.

## Features

- **Responsive Form**: The form includes various input types such as text, email, number, radio buttons, file upload, URL input, dropdown selection, and a textarea.
- **State Management**: React `useState` hooks are used to manage the state of each form input.
- **Form Submission**: The form data is logged to the console on submission for demonstration purposes.
- **Form Reset**: A reset button is provided to clear all input fields and reset the form to its initial state.

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ChandanaPrabhakar/react-form-submission.git
