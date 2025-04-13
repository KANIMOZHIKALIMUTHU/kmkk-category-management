#  Revisit - Category Management Dashboard

A full-stack web application for managing product categories, built with **React.js**, **Node.js**, and **SQLite**. It features user authentication, a clean and professional UI, and functionality to **view**, **add**, **edit**, and **delete** categories.

---

##  Features

- JWT-based authentication (Login/Signup/Logout)
- Responsive Dashboard layout with Sidebar and Topbar
- View all categories in card format (image, name, item count)
- Add new categories with image and item count
- Edit and delete existing categories
- Modal form for add/edit actions
- Professional and responsive design

---

## Tech Stack

**Frontend**
- React.js (with `react-router-dom`)
- CSS (custom professional styles)
- Context API for global auth state

**Backend**
- Node.js with Express.js
- SQLite for category data
- JSON Web Token (JWT) for authentication

---

## Folder Structure

├── components/ │ ├── CategoryCard.jsx │ ├── EditCategoryModal.jsx │ ├── Sidebar.jsx │ ├── Topbar.jsx │ ├── contexts/ │ └── AuthContext.js │ ├── pages/ │ ├── Dashboard/ │ │ ├── index.js │ │ └── index.css │ ├── Categories/ │ │ ├── index.js │ │ └── index.css │ ├── Login.jsx │ └── Signup.jsx │ ├── App.js ├── index.js └── README.md

---

##  Getting Started

### 1. Clone the repository

git clone https://github.com/KANIMOZHIKALIMUTHU/kmkk-category-management

### 2. Install dependencies

npm install

### 3. Start the frontend
npm start
Frontend will run at http://localhost:3000

## Sample Category JSON Format
json
{
  "id": 1,
  "name": "Electronics",
  "image": "https://images.unsplash.com/photo-1581091870622-3e1b5f8d5a7f",
  "itemCount": 42
}
## Authentication
1. User tokens are stored in Context and localStorage

2. Login and Signup pages handle token management

3. Logout clears session and redirects to login

## To Do / Future Enhancements
1. Integrate with real API (currently uses mock data)

2. Add search and filter functionality

3. Paginate category cards

4. Role-based access (admin only)

5. Unit tests and error boundarie