# Protein CRUD App

## Description

The **Protein CRUD App** is a fully responsive web application for managing protein powder information. It allows users to perform **CRUD operations** (Create, Read, Update, Delete) on protein powders stored in a **Firebase database**. The app is built with **Vite-React** and utilizes **React Router** for smooth navigation across its five pages.

---

## Features

### Pages Overview:

1. **AddProtein**

   - Allows users to add a new protein powder.
   - Inputs for `imageUrl`, `name`, and `price`.

2. **Home**

   - Features a header with a wallpaper and a "Shop Protein Powders" button for easy navigation.

3. **Proteins Page**

   - Displays a list of all protein powders available in the Firebase collection `protein_powders`.

4. **Protein Page**

   - Displays details of a selected protein powder.
   - Includes:
     - **Delete Button**: Removes the protein powder from the list.
     - **Update Button**: Updates details such as `imageUrl`, `name`, and `price`.

5. **RootLayout**
   - Serves as the main layout of the app.
   - Includes a **navbar** for navigation and an **outlet** component from React Router to render page content dynamically.

---

### Technical Details

- **Firebase Database**:  
  The protein powders are stored in a Firebase Firestore collection named `protein_powders`. Each document in the collection contains the following fields:

  - `imageUrl`
  - `name`
  - `price`

- **React Router**:  
  Smooth navigation between pages is achieved using React Router.

- **Responsiveness**:  
  The app is fully responsive, ensuring a seamless user experience on all device sizes.

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd protein-crud-app

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Configure Firebase:

   - Add your Firebase API key and configuration details in an `.env` file.
   - The API key and Firebase configuration are hidden for security and are not included in the repository.

4. Start the application:
   ```bash
   npm start
   ```

---

## Notes

- Make sure to create a Firebase project and set up Firestore with a collection named `protein_powders`.
- The `.env` file should include your Firebase configuration keys:
  ```env
  VITE_FIREBASE_DB_API_KEY=your-api-key
  ```
