"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDriverById } from "@/lib/f1-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getRaceResults } from "@/lib/services/f1-api";
import { Race } from "@/lib/types/f1";

export default async function RaceHistoryPage() {
  const response = await getRaceResults();
  const races = response.MRData.RaceTable.Races;

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Race History</h1>
      <div className="space-y-6">
        {races.map((race: Race) => (
          <RaceCard key={race.round} race={race} />
        ))}
      </div>
    </div>
  );
}

function RaceCard({ race }: { race: Race }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{race.raceName}</CardTitle>
            <CardDescription>
              Round {race.round} · {new Date(race.date).toLocaleDateString()}
            </CardDescription>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          <div className="grid gap-2">
            {race.Results.map(result => {
              const driver = getDriverById(result.Driver.driverId);
              if (!driver) return null;

              return (
                <div
                  key={result.Driver.driverId}
                  className="flex items-center justify-between p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-background font-bold text-xs">
                      P{result.position}
                    </div>
                    <Avatar className="h-8 w-8 border">
                      <AvatarImage src={driver.imageUrl || "/placeholder.svg"} alt={driver.name} />
                      <AvatarFallback>{driver.code}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">{driver.name}</p>
                      <p className="text-xs text-muted-foreground">{driver.team}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{result.points} pts</p>
                    <p className="text-xs text-muted-foreground">
                      {result.Time?.time || result.status}
                    </p>
                    {result.FastestLap?.rank === "1" && (
                      <p className="text-xs text-yellow-500">Fastest Lap</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
