# Components Documentation

## Navigation

### MainNav

The main navigation component that provides access to all major sections of the application.

#### Features

- Responsive design
- Active state highlighting
- Icon-based navigation
- Type-safe navigation items

#### Usage

```tsx
import { MainNav } from "@/components/main-nav";

export default function Layout() {
  return (
    <header>
      <MainNav />
    </header>
  );
}
```

#### Navigation Items

- Home (`/`)
- Standings (`/standings`)
- Live Race (`/live`)
- Race History (`/history`)
- Statistics (`/stats`)
- Predictions (`/predictions`)

## Driver Standings

### DriverStandings

Displays the current F1 driver standings in a table format.

#### Features

- Real-time data fetching
- Loading states
- Error handling
- Responsive table design
- Team color indicators
- Driver images with fallback

#### Usage

```tsx
import { DriverStandings } from "@/components/DriverStandings";

export default function StandingsPage() {
  return (
    <div>
      <h1>Formula 1 Standings</h1>
      <DriverStandings />
    </div>
  );
}
```

#### Data Structure

Uses the Ergast API response structure with the following key information:

- Driver position
- Driver details (name, nationality, number)
- Team information
- Points
- Wins

#### Styling

- Uses shadcn/ui Card components
- Responsive table layout
- Team color indicators
- Loading spinner
- Error states

## Future Components

Planned components to be implemented:

1. Race Calendar
2. Live Race Timing
3. Driver Details
4. Team Details
5. Circuit Information
6. Statistics Charts
7. Prediction Forms
