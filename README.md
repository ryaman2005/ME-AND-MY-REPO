# Portfolio OS - Aryaman Bohra

A premium, macOS-inspired "Obsidian Glass" portfolio built with the MERN stack. This application features a cinematic, photorealistic interface with interactive desktop icons, a functional dock, and a built-in terminal.

**Live Demo:** [https://myrepo-nine-gamma.vercel.app](https://myrepo-nine-gamma.vercel.app)

---

## 🚀 Features

- **macOS Aesthetic:** Realistic glassmorphism, desktop icons, and an interactive menu bar.
- **Dark & Light Mode:** Seamless theme switching with persistent user preference.
- **Interactive Terminal:** A functional command-line interface to explore project details.
- **Dynamic Projects Showcase:** Filterable and interactive project cards with live demo links.
- **Contact System:** Integrated backend for form submissions saved to MongoDB.
- **Resume System:** Secure CV download functionality in both PDF and DOCX formats.
- **Connections Folder:** Dedicated window for social media and professional networking links.

## 🛠 Tech Stack

### Frontend
- **React 18** with **Vite**
- **TypeScript** for type safety
- **Tailwind CSS** for premium styling
- **Next-Themes** for dark mode management
- **Lucide React** for consistent iconography
- **React Router Dom** for navigation

### Backend
- **Node.js** & **Express**
- **MongoDB** with **Mongoose**
- **CORS** & **Dotenv** for secure environment management

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (for production) or local MongoDB instance

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ryaman2005/ME-AND-MY-REPO.git
   cd retro-mac-portofolio-vue-main
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Root (Frontend)
   npm install

   # Backend
   cd backend
   npm install
   ```

3. Setup Environment Variables:
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5001
   MONGO_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```

4. Run the application:
   ```bash
   # From the root directory
   npm run dev

   # From the backend directory (in a separate terminal)
   node server.js
   ```

---

## 🌐 Deployment

### Frontend (Vercel)
The frontend is optimized for Vercel. Ensure you set the `VITE_API_URL` environment variable to your deployed backend URL.

### Backend (Render)
The backend is configured for Render using the `render.yaml` blueprint. Ensure you add your `MONGO_URI` to the Render environment settings.

## 📄 License
This project is for personal showcase purposes. 

---
Developed with ❤️ by [Aryaman Bohra](https://github.com/ryaman2005)
