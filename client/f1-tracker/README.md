# F1 Tracker

A modern Formula 1 tracking application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Real-time race tracking
- Driver and constructor standings
- Race predictions
- Recent race results
- Full race history with expandable details
- Beautiful, responsive UI

## Data Sources

The application uses the following data sources:

- F1 API (https://api.jolpi.ca/ergast/f1/) for:
  - Race results
  - Driver standings
  - Constructor standings
  - Live race data

## Pages

- `/` - Home page with recent results and upcoming races
- `/standings` - Driver and constructor standings
- `/live` - Live race tracking
- `/predictions` - Race predictions
- `/history` - Full race history with expandable details

## Components

### Recent Results

- Displays the last 3 races in a tabbed interface
- Shows top 3 finishers for each race
- Includes driver avatars, positions, points, and fastest lap indicators
- Links to full race results

### Race History

- Lists all races in the current season
- Expandable race cards with full results
- Shows driver positions, points, and race times
- Highlights fastest lap achievements

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies

- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn UI
- F1 API

## License

MIT
