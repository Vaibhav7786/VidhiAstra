# Vidhi Astra Law Firm - Legal Services Platform

## Overview

Vidhi Astra is a comprehensive legal services platform designed for Advocate Shubham Patidar's law practice based in Indore, Madhya Pradesh. The platform serves as a digital presence for the law firm, providing information about legal services, case studies through blogs, and client communication channels. The application specializes in service matters, property law, matrimonial & family law, civil litigation, arbitration & ADR, and criminal defense.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using **React 18 with TypeScript** and **Vite** as the build tool, providing fast development and optimized production builds. The UI framework combines **Material-UI (MUI)** components with **Tailwind CSS** for styling, offering both pre-built components and utility-first styling flexibility. The application follows a **single-page application (SPA)** architecture with smooth scrolling navigation between sections.

**Component Structure**: The app is organized into modular components (Header, Hero, About, Services, Experience, Testimonials, Contact, Footer) that are composed in the main App component. Form handling is managed through **React Hook Form** for validation and submission, while **Axios** handles HTTP requests to the backend API.

**Development Tools**: ESLint with TypeScript support ensures code quality, and the Vite development server is configured for hot module replacement with custom port settings for deployment environments.

### Backend Architecture
The backend is built with **Node.js and Express.js** using ES modules, providing a RESTful API architecture. The application follows an **MVC (Model-View-Controller)** pattern with separate layers for routes, controllers, models, and middleware.

**API Design**: RESTful endpoints are organized by feature domains:
- `/api/contact` - Contact form submissions
- `/api/blogs` - Blog management (CRUD operations)
- `/api/admin` - Authentication and admin operations
- `/api/upload` - File upload handling

**Authentication**: JWT-based authentication system with bcrypt password hashing for admin access control. Protected routes use middleware to verify tokens and authorize admin-only operations.

**File Handling**: Multer middleware handles file uploads with validation for image types, size limits (5MB), and organized storage in the public/uploads directory.

### Data Storage Solutions
**MongoDB with Mongoose** serves as the primary database, chosen for its flexibility in handling document-based data structures suitable for legal content management. The database includes three main collections:

- **Contact Collection**: Stores client inquiry submissions with validation for email formats and required fields
- **Blog Collection**: Manages legal articles and case studies with metadata including author, timestamps, and featured images
- **Admin Collection**: Handles authentication data with hashed passwords and user credentials

**Schema Design**: Mongoose schemas include built-in validation, default values, and pre-save hooks for data integrity and automatic timestamping.

### Authentication and Authorization
**JWT (JSON Web Tokens)** implement stateless authentication with configurable expiration times. **Bcrypt** handles password hashing with salt rounds for security. The system uses **Bearer token** authentication in HTTP headers, and middleware functions protect sensitive routes requiring admin privileges.

**Security Measures**: Password validation occurs through schema methods, tokens include user identification data, and admin registration is designed for initial setup with production security considerations.

## External Dependencies

### Frontend Dependencies
- **Material-UI (@mui/material)**: React component library for consistent UI design
- **Emotion (@emotion/react, @emotion/styled)**: CSS-in-JS library for MUI styling
- **Tailwind CSS**: Utility-first CSS framework for custom styling
- **React Hook Form**: Form validation and management
- **Axios**: HTTP client for API communication
- **Lucide React**: Icon library for UI elements
- **React Icons**: Additional icon components

### Backend Dependencies
- **Express.js**: Web application framework for Node.js
- **Mongoose**: MongoDB object modeling for Node.js
- **JWT (jsonwebtoken)**: Token-based authentication
- **Bcryptjs**: Password hashing library
- **Multer**: File upload middleware
- **CORS**: Cross-origin resource sharing middleware
- **Dotenv**: Environment variable management

### Database Integration
- **MongoDB**: NoSQL database for storing application data
- Database connection managed through Mongoose with connection string from environment variables
- Collections for contacts, blogs, and admin authentication

### Development Tools
- **Vite**: Frontend build tool and development server
- **TypeScript**: Type safety for both frontend and backend
- **ESLint**: Code linting and formatting
- **Nodemon**: Development server with auto-restart functionality
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing

### Third-party Integrations
- **Email Validation**: Built-in validation patterns for contact forms
- **Image Processing**: File type validation and storage management
- **Environment Configuration**: Support for development and production environments with different API endpoints