# QuickAI - AI-Powered Content Creation Platform

QuickAI is a versatile, full-stack web application that leverages the power of artificial intelligence to offer a suite of powerful tools for content creation. This application is designed to streamline your workflow, whether you're writing articles, generating images, or need your resume reviewed. This project uses the MERN stack.

## ✨ Features

  * **AI Article Writer**: Generate high-quality, engaging articles on any topic.
  * **Blog Title Generator**: Create catchy and effective titles for your blog posts.
  * **AI Image Generation**: Produce stunning visuals from text descriptions.
  * **Background & Object Removal**: Easily edit images by removing backgrounds or specific objects.
  * **Resume Reviewer**: Get instant feedback on your resume to improve your job prospects.
  * **Community Hub**: Share your creations with the community and get inspired by others.
  * **User Authentication**: Secure user authentication and management powered by Clerk.

-----

## 🚀 Tech Stack

### Frontend (Client)

  * **React**: A JavaScript library for building user interfaces.
  * **Vite**: A next-generation frontend tooling for a faster and leaner development experience.
  * **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
  * **React Router**: For declarative routing in your React application.
  * **Clerk**: For authentication and user management.
  * **Axios**: A promise-based HTTP client for the browser and Node.js.

### Backend (Server)

  * **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
  * **Express**: A minimal and flexible Node.js web application framework.
  * **PostgreSQL**: A powerful, open-source object-relational database system.
  * **OpenAI API**: For generating text-based content like articles and blog titles.
  * **Cloudinary**: A cloud-based image and video management service.
  * **Multer**: A node.js middleware for handling `multipart/form-data`.

-----

## 📋 Getting Started

### Prerequisites

  * Node.js (v14 or later)
  * npm or yarn
  * A PostgreSQL database
  * API keys for Clerk, OpenAI, and Cloudinary.

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/shuvam0000/quickai.git
    cd quickai
    ```

2.  **Backend Setup:**

      * Navigate to the `server` directory.
      * Install dependencies `npm install`
      * Create a `.env` file in the `server` directory and add the following environment variables:
        ```env
        PORT=3000
        DATABASE_URL="your_postgresql_database_url"
        CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
        CLERK_SECRET_KEY="your_clerk_secret_key"
        GEMINI_API_KEY="your_openai_api_key"
        CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
        CLOUDINARY_API_KEY="your_cloudinary_api_key"
        CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
        CLIPDROP_API_KEY="your_clipdrop_api_key"
        ```
      * Start the server `npm run server`

3.  **Frontend Setup:**

      * Navigate to the `client` directory
      * Install dependencies `npm install`
      * Create a `.env` file in the `client` directory and add the following:
        ```env
        VITE_BASE_URL="http://localhost:3000"
        VITE_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
        ```
      * Start the client: `npm run dev`

-----

## 📂 Project Structure

```
/quickai
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
```
