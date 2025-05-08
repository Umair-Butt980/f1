# Components Documentation

## Overview

This document outlines the components used in the F1 Tracker application, their responsibilities, and their rendering strategy (server vs client-side).

## Server vs Client Components

### Server Components

Server Components are the default in Next.js 13+. They run on the server and send HTML to the client.

#### When to Use Server Components:

- Data fetching
- Access backend resources directly
- Keep sensitive information on the server
- Reduce client-side JavaScript
- Improve initial page load
- SEO-critical content

#### Best Practices for Server Components:

1. Keep them pure and predictable
2. Avoid using hooks or browser APIs
3. Don't use event handlers directly
4. Use client components for interactive parts
5. Handle data fetching at the server level

### Client Components

Client Components run on the browser and can use React features like hooks and event handlers.

#### When to Use Client Components:

- Interactivity and event listeners
- useState and useEffect hooks
- Browser-only APIs
- Client-side state management
- Custom event handlers
- React Context

#### Best Practices for Client Components:

1. Keep them as small as possible
2. Use "use client" directive at the top
3. Handle loading and error states
4. Implement proper error boundaries
5. Use proper TypeScript types

## Component Architecture

### Server Components

#### DriverStandings

- **Purpose**: Displays the current driver standings in a table format
- **Data Source**: F1 API via server-side data fetching
- **Rendering Strategy**: Server Component
- **Key Features**:
  - Full standings table with position, driver info, team, points, and wins
  - Server-side data fetching for better performance
  - Static rendering with periodic revalidation
- **Dependencies**:
  - F1 API Service
  - Team Colors Constants
  - UI Components (Card, Table)
  - Client Components (DriverImage)

#### ConstructorStandings

- **Purpose**: Shows constructor championship standings
- **Data Source**: F1 API via server-side data fetching
- **Rendering Strategy**: Server Component
- **Key Features**:
  - Constructor points and positions
  - Team colors and logos
  - Server-side rendering for optimal performance

### Client Components

#### DriverStandingsCard

- **Purpose**: Compact view of top 5 drivers for dashboard
- **Data Source**: F1 API via client-side fetching
- **Rendering Strategy**: Client Component ("use client")
- **Key Features**:
  - Top 5 drivers display
  - Loading states
  - Error handling
  - Interactive elements
- **Dependencies**:
  - F1 API Service
  - UI Components (Card, Avatar)
  - Team Colors Constants

#### DriverImage

- **Purpose**: Handles driver image loading and fallback
- **Rendering Strategy**: Client Component ("use client")
- **Key Features**:
  - Image error handling
  - Fallback to placeholder
  - Client-side state management
- **Dependencies**:
  - React hooks (useState)

#### RaceSchedule

- **Purpose**: Displays upcoming and past races
- **Data Source**: F1 API
- **Rendering Strategy**: Client Component
- **Key Features**:
  - Interactive calendar
  - Race details
  - Countdown timers
  - User interactions

#### DriverProfile

- **Purpose**: Detailed view of individual driver information
- **Data Source**: F1 API
- **Rendering Strategy**: Client Component
- **Key Features**:
  - Driver statistics
  - Career highlights
  - Interactive elements
  - Real-time updates

## State Management

- Server Components: Use server-side data fetching
- Client Components: Use React hooks for local state
- Global State: React Context API for shared state

## Best Practices

1. Use Server Components by default
2. Add "use client" only when necessary
3. Keep client components as small as possible
4. Use server-side data fetching when possible
5. Implement proper loading and error states
6. Follow consistent styling patterns
7. Maintain type safety with TypeScript
8. Split interactive parts into client components
9. Use proper error boundaries
10. Implement proper loading states

## Performance Considerations

- Server Components for static content
- Client Components for interactive features
- Optimize images and assets
- Implement proper loading states
- Use proper caching strategies
- Minimize client-side JavaScript
- Use proper code splitting
- Implement proper error handling
- Use proper TypeScript types
- Follow React best practices
