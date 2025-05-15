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

## Driver Comparison

### DriverComparison

A comprehensive driver comparison system that allows users to compare two drivers across multiple metrics.

#### Features

- Dynamic driver selection from current season standings
- Multiple comparison views:
  - Points comparison
  - Pit stop analysis
  - Lap time analysis
- Real-time data fetching
- Interactive charts
- Responsive design

#### Usage

```tsx
import { DriverComparison } from "@/components/driver-comparison";
import { PitStopComparison } from "@/components/pit-stop-comparison";
import { LapTimeComparison } from "@/components/lap-time-comparison";

export default function ComparisonPage() {
  return (
    <div>
      <DriverComparison driver1Id="max_verstappen" driver2Id="lewis_hamilton" />
      <PitStopComparison driver1Id="max_verstappen" driver2Id="lewis_hamilton" />
      <LapTimeComparison driver1Id="max_verstappen" driver2Id="lewis_hamilton" />
    </div>
  );
}
```

#### Components

1. **DriverComparison**

   - Compares points earned across races
   - Uses biaxial line chart for visualization
   - Shows trend analysis

2. **PitStopComparison**

   - Analyzes pit stop performance
   - Compares number of stops and total pit time
   - Visualizes pit stop efficiency

3. **LapTimeComparison**
   - Compares lap times across races
   - Shows fastest and average lap times
   - Helps identify consistency and pace

#### Data Integration

- Uses F1Context for driver data
- Fetches real-time data from Ergast API
- Implements proper error handling and loading states

## Future Components

Planned components to be implemented:

1. Race Calendar
2. Live Race Timing
3. Driver Details
4. Team Details
5. Circuit Information
6. Statistics Charts
7. Prediction Forms
