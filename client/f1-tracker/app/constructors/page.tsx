import { ConstructorStandings } from "@/components/constructor-standings";

export default function ConstructorsPage() {
  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-4xl font-bold mb-8 text-center">Constructor Standings</h1>
      <div className="max-w-7xl mx-auto">
        <ConstructorStandings />
      </div>
    </div>
  );
}
