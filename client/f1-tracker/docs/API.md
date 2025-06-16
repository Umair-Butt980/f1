# API Integration

## Overview

The F1 Tracker application currently uses the Jolpi API, which is a wrapper around the Ergast F1 API. This documentation outlines the API endpoints and data structures we're using.

## Base URL

```
https://api.jolpi.ca/ergast/f1
```

## Endpoints

### Driver Standings

```
GET /2025/driverStandings.json
```

#### Response Structure

```typescript
interface ErgastResponse {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    StandingsTable: {
      season: string;
      round: string;
      StandingsLists: [
        {
          season: string;
          round: string;
          DriverStandings: [
            {
              position: string;
              positionText: string;
              points: string;
              wins: string;
              Driver: {
                driverId: string;
                permanentNumber: string;
                code: string;
                url: string;
                givenName: string;
                familyName: string;
                dateOfBirth: string;
                nationality: string;
              };
              Constructors: [
                {
                  constructorId: string;
                  url: string;
                  name: string;
                  nationality: string;
                },
              ];
            },
          ];
        },
      ];
    };
  };
}
```

### Race Results

```
GET /current/results.json
```

#### Response Structure

```typescript
interface RaceResultsResponse {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: {
      season: string;
      Races: [
        {
          season: string;
          round: string;
          url: string;
          raceName: string;
          Circuit: {
            circuitId: string;
            url: string;
            circuitName: string;
            Location: {
              lat: string;
              long: string;
              locality: string;
              country: string;
            };
          };
          date: string;
          time: string;
          Results: [
            {
              number: string;
              position: string;
              positionText: string;
              points: string;
              Driver: {
                driverId: string;
                permanentNumber: string;
                code: string;
                url: string;
                givenName: string;
                familyName: string;
                dateOfBirth: string;
                nationality: string;
              };
              Constructor: {
                constructorId: string;
                url: string;
                name: string;
                nationality: string;
              };
              grid: string;
              laps: string;
              status: string;
              Time?: {
                millis: string;
                time: string;
              };
              FastestLap?: {
                rank: string;
                lap: string;
                Time: {
                  time: string;
                };
              };
            },
          ];
        },
      ];
    };
  };
}
```

### Pit Stops

```
GET /2025/{round}/pitstops.json
```

#### Response Structure

```typescript
interface PitStopsResponse {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: {
      season: string;
      round: string;
      Races: [
        {
          season: string;
          round: string;
          url: string;
          raceName: string;
          Circuit: {
            circuitId: string;
            url: string;
            circuitName: string;
            Location: {
              lat: string;
              long: string;
              locality: string;
              country: string;
            };
          };
          date: string;
          time: string;
          PitStops: [
            {
              driverId: string;
              lap: string;
              stop: string;
              time: string;
              duration: string;
            },
          ];
        },
      ];
    };
  };
}
```

### Lap Times

```
GET /2025/{round}/laps.json
```

#### Response Structure

```typescript
interface LapTimesResponse {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: {
      season: string;
      round: string;
      Races: [
        {
          season: string;
          round: string;
          url: string;
          raceName: string;
          Circuit: {
            circuitId: string;
            url: string;
            circuitName: string;
            Location: {
              lat: string;
              long: string;
              locality: string;
              country: string;
            };
          };
          date: string;
          time: string;
          Laps: [
            {
              number: string;
              Timings: [
                {
                  driverId: string;
                  position: string;
                  time: string;
                },
              ];
            },
          ];
        },
      ];
    };
  };
}
```

### Race Calendar

```
GET /2025.json
```

#### Response Structure

```typescript
interface RaceCalendarResponse {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: {
      season: string;
      Races: [
        {
          season: string;
          round: string;
          url: string;
          raceName: string;
          Circuit: {
            circuitId: string;
            url: string;
            circuitName: string;
            Location: {
              lat: string;
              long: string;
              locality: string;
              country: string;
            };
          };
          date: string;
          time: string;
          FirstPractice: {
            date: string;
            time: string;
          };
          SecondPractice: {
            date: string;
            time: string;
          };
          ThirdPractice?: {
            date: string;
            time: string;
          };
          Qualifying: {
            date: string;
            time: string;
          };
          Sprint?: {
            date: string;
            time: string;
          };
        },
      ];
    };
  };
}
```

### Race Schedule

```
GET /2025/{round}.json
```

#### Response Structure

```typescript
interface RaceScheduleResponse {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: {
      season: string;
      round: string;
      Races: [
        {
          season: string;
          round: string;
          url: string;
          raceName: string;
          Circuit: {
            circuitId: string;
            url: string;
            circuitName: string;
            Location: {
              lat: string;
              long: string;
              locality: string;
              country: string;
            };
          };
          date: string;
          time: string;
          FirstPractice: {
            date: string;
            time: string;
          };
          SecondPractice: {
            date: string;
            time: string;
          };
          ThirdPractice?: {
            date: string;
            time: string;
          };
          Qualifying: {
            date: string;
            time: string;
          };
          Sprint?: {
            date: string;
            time: string;
          };
        },
      ];
    };
  };
}
```

## Error Handling

The API integration includes proper error handling for:

- Network errors
- Invalid responses
- Missing data
- Rate limiting

## Caching Strategy

Currently, the application fetches data on demand. Future implementations will include:

- Client-side caching
- Server-side caching
- Rate limiting protection

## Future API Endpoints

Planned endpoints to be implemented:

- Qualifying results
- Driver details
- Constructor details
- Circuit information
- Live timing data
- winner prediction
