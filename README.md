# QuickGen.ai - AI-Powered Content Creation Platform

**QuickGen.ai** is a powerful, full-stack web application designed to revolutionize your content creation process. By leveraging a suite of advanced AI tools, this platform streamlines everything from writing articles and generating images to summarizing text and reviewing resumes.

## ✨ Features

- **📝 AI Article Writer**: Instantly generate high-quality, engaging articles on any topic.
- **✍️ Blog Title Generator**: Create catchy, SEO-friendly titles for your blog posts.
- **🖼️ AI Image Generation**: Produce stunning, unique visuals from text descriptions.
- **✂️ Background & Object Removal**: Effortlessly edit images by removing backgrounds or specific objects.
- **📄 Resume Reviewer**: Get instant, AI-powered feedback to enhance your resume.
- **📜 Text Summarizer**: Condense long paragraphs into concise, easy-to-read bullet points.
- **🤝 Community Hub**: Share your creations, get inspired, and connect with other users.
- **🔐 Secure Authentication**: Robust user authentication and management powered by Clerk.

---

## 🚀 Tech Stack

### Frontend (Client)

- **React**: A JavaScript library for building dynamic user interfaces.
- **Vite**: A next-generation frontend build tool for a faster and leaner development experience.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Router**: For declarative routing in your React application.
- **Clerk**: For seamless authentication and user management.
- **Axios**: A promise-based HTTP client for making API requests.

### Backend (Server)

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **PostgreSQL (with Neon)**: A powerful, open-source object-relational database system, hosted on a serverless platform.
- **Gemini API**: For generating text-based content like articles, blog titles, and summaries.
- **Cloudinary**: A cloud-based service for image and video management and manipulation.
- **Multer**: A Node.js middleware for handling `multipart/form-data`, used for file uploads.

---

## 📋 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A PostgreSQL database (you can get a free one from [Neon](https://neon.tech/))
- API keys for Clerk, Gemini, Cloudinary, and ClipDrop.

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/shuvam0000/quickgen.ai.git](https://github.com/shuvam0000/quickgen.ai.git)
    cd quickgen.ai
    ```

2.  **Backend Setup:**
    - Navigate to the `server` directory: `cd server`
    - Install dependencies: `npm install`
    - Create a `.env` file and add the following environment variables:
        ```env
        PORT=3000
        DATABASE_URL="your_postgresql_database_url"
        CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
        CLERK_SECRET_KEY="your_clerk_secret_key"
        GEMINI_API_KEY="your_gemini_api_key"
        CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
        CLOUDINARY_API_KEY="your_cloudinary_api_key"
        CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
        CLIPDROP_API_KEY="your_clipdrop_api_key"
        ```
    - Start the server: `npm run server`

3.  **Frontend Setup:**
    - Navigate to the `client` directory: `cd ../client`
    - Install dependencies: `npm install`
    - Create a `.env` file and add the following:
        ```env
        VITE_BASE_URL="http://localhost:3000"
        VITE_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
        ```
    - Start the client: `npm run dev`

---

## 📂 Project Structure

    /quickgen.ai
    ├── /client           # Frontend React application
    │   ├── /src
    │   ├── package.json
    │   └── ...
    ├── /server           # Backend Node.js/Express application
    │   ├── /configs
    │   ├── /controllers
    │   ├── /middlewares
    │   ├── /routes
    │   ├── package.json
    │   └── server.js
    └── README.md
