# F1 Tracker Application Architecture

## Overview

F1 Tracker is a modern web application built with Next.js, TypeScript, and React. The application follows a microservices-based architecture, starting with the frontend and planning to expand to backend services.

## Frontend Architecture

### Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Context API
- **API Integration**: REST APIs (Ergast/Jolpi)

### Directory Structure

```
client/f1-tracker/
├── app/                 # Next.js app directory
├── components/         # Reusable UI components
├── lib/               # Shared utilities and types
│   ├── context/      # React Context providers
│   ├── types/        # TypeScript type definitions
│   └── constants/    # Application constants
├── public/           # Static assets
└── docs/            # Documentation
```

### Key Features

1. **Driver Standings**

   - Real-time standings display
   - Team colors and driver information
   - Responsive table layout
   - Loading and error states

2. **Navigation**
   - Home
   - Live Race
   - Race History
   - Statistics
   - Predictions
   - Standings

## Data Flow

1. **API Integration**

   - Using Jolpi's Ergast API wrapper
   - Type-safe API responses
   - Error handling and loading states

2. **State Management**
   - F1Context for global state
   - Type-safe context values
   - Efficient data fetching

## Future Backend Architecture (Planned)

1. **Microservices**

   - F1 Data Service
   - User Service
   - Analytics Service
   - Notification Service

2. **API Gateway**
   - Request routing
   - Authentication
   - Rate limiting
   - Caching

## Development Guidelines

1. **Type Safety**

   - Use TypeScript for all new code
   - Define interfaces for all data structures
   - Avoid using `any` type

2. **Component Structure**

   - Use functional components
   - Implement proper error boundaries
   - Follow React best practices
   - use context to store the global data

3. **Styling**

   - Use Tailwind CSS for styling
   - Follow shadcn/ui component patterns
   - Maintain consistent design system

4. **Documentation**
   - Keep documentation up to date
   - Document all major changes
   - Include code examples where necessary
