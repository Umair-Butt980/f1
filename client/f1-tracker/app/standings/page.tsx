import DriverStandings from "@/components/DriverStandings";

export default function StandingsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Driver's Standings</h1>
      <div className="max-w-7xl mx-auto">
        <DriverStandings />
      </div>
    </div>
  );
}
