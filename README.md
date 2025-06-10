# Vectur - Software Company Website

**Submitted To:**  
Sir Tauseef Iftikhar

**Submitted By:**  
Name: Bilal Haider  
Roll No: 0043-BSCS-22  
Section: A1
Email: haiderbilal306@gmail.com

## Overview
Vectur is a software company website built with Next.js (React-based framework) that showcases the company's services and handles client interactions through contact forms and job applications.
The application implements a robust MVC architecture with MongoDB integration, featuring secure file upload capabilities and RESTful API endpoints for seamless user engagement and business operations.


## Architecture

The application follows the **MVC (Model-View-Controller)** architectural pattern, ensuring clean separation of concerns and maintainable code structure.

### Project Structure

### Backend
```
├── controllers/                     # Controller Logic Layer
│   ├── contactController.js
│   └── JobApplicationController.js
├── lib/                             # Utility Libraries & Configurations
│   ├── middlewareWrapper.js
│   └── mongodb.js
├── middleware/                      # Custom Middleware Functions
│   └── upload.js
├── models/                          # Data Models & Database Schema
│   ├── Contact.js
│   └── JobApplication.js
├── pages/                           # Next.js Pages & API Routes
│   └── api/                         # API Endpoints
│       ├── contact.js
│       └── jobApplication.js
```
### Frontend
```
├── src/                    # Frontend Source Code
│   └── app/               # Next.js App Directory
│       ├── (main)/        # Main Route Group
│       ├── careers/       # Careers Page
│       ├── favicon.ico    # Website Favicon
│       ├── globals.css    # Global Styles
│       ├── layout.js      # Root Layout Component
│       └── components/    # Reusable UI Components
│           ├── AboutUsSection/
│           ├── Contact/
│           ├── HeroSection/
│           ├── HiringSection.js
│           ├── layout/
│           ├── PurposeSection/
│           ├── ServicesSection/
│           ├── TechStackSection/
│           ├── TestimonialSection/
│           └── WhyChooseUsSection/
├── store/                  # State Management
│   ├── index.js
│   └── sidebarSlice.js
├── uploads/                # File Upload Directory
├── .env                    # Environment Variables
└── .gitignore             # Git Ignore Rules
```

## Features

- **Redux Global State Management** - Centralized state management using Redux Toolkit for consistent data flow across all components  
- **Frontend Transitions and Gradients** - Smooth CSS animations, hover effects, and modern gradient backgrounds for enhanced visual appeal  
- **Dynamic Routing** - Next.js App Router with file-based routing system for seamless navigation between pages  
- **Resume Upload API** - Dedicated RESTful API endpoint for secure job application file uploads with validation  
- **Responsive Mobile Design** - Fully responsive layout using Tailwind CSS for optimal viewing on all screen sizes   
- **MongoDB Database Integration** - Robust data persistence for contact forms and job applications  
- **Form Validation & Error Handling** - Client-side and server-side validation with user-friendly error messages  
- **File Upload Middleware** - Custom secure file handling with type validation and size restrictions  
- **Loading States & Feedback** - User-friendly loading indicators and success/error notifications

## MVC Architecture Implementation

### 📁 **Controllers** (`/controllers`)
Contains business logic and handles data flow between models and views:
- `contactController.js` - Manages contact form submissions and email notifications
- `JobApplicationController.js` - Handles job applications, resume uploads, and candidate management

### 📁 **Models** (`/models`)
Defines data structure and database schema:
- `Contact.js` - Contact form data model with validation rules
- `JobApplication.js` - Job application model with file upload support

### 📁 **Views** (Components & Pages)
React components and Next.js pages providing the user interface:
- Landing page with hero section and company showcase
- Career page with job listings and application forms
- Contact page with inquiry forms

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- MongoDB database connection
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/BilalHaider20/Vectur
cd vectur-website
```

2. Install dependecies
```bash
npm install or npm install --legacy-peer-deps
```

3. Create .env and set up environment variables as follows
```bash
MONGODB_URI=mongodb://127.0.0.1:27017/vectur
```

4. Start the development server
```bash 
npm run dev
```

5. Open http://localhost:3000 in your browser


## API Endpoints

- `POST /api/contact` - Submit contact form with validation  
- `POST /api/jobApplication` - Submit job application with resume upload  
- File upload support with type validation (PDF, DOC, DOCX)


### Github
[https://github.com/BilalHaider20](https://github.com/BilalHaider20)