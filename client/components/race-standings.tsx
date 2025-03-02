import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RaceStandings() {
  return (
    <Tabs defaultValue="drivers" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="drivers">Drivers Championship</TabsTrigger>
        <TabsTrigger value="constructors">Constructors Championship</TabsTrigger>
      </TabsList>

      <TabsContent value="drivers">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Pos</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-right">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Max Verstappen</TableCell>
              <TableCell>Red Bull Racing</TableCell>
              <TableCell className="text-right">119</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell>Sergio Perez</TableCell>
              <TableCell>Red Bull Racing</TableCell>
              <TableCell className="text-right">104</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Charles Leclerc</TableCell>
              <TableCell>Ferrari</TableCell>
              <TableCell className="text-right">91</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">4</TableCell>
              <TableCell>Carlos Sainz</TableCell>
              <TableCell>Ferrari</TableCell>
              <TableCell className="text-right">78</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">5</TableCell>
              <TableCell>Lewis Hamilton</TableCell>
              <TableCell>Mercedes</TableCell>
              <TableCell className="text-right">69</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">6</TableCell>
              <TableCell>George Russell</TableCell>
              <TableCell>Mercedes</TableCell>
              <TableCell className="text-right">67</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">7</TableCell>
              <TableCell>Lando Norris</TableCell>
              <TableCell>McLaren</TableCell>
              <TableCell className="text-right">54</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">8</TableCell>
              <TableCell>Oscar Piastri</TableCell>
              <TableCell>McLaren</TableCell>
              <TableCell className="text-right">38</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>

      <TabsContent value="constructors">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Pos</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-right">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Red Bull Racing</TableCell>
              <TableCell className="text-right">223</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell>Ferrari</TableCell>
              <TableCell className="text-right">169</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Mercedes</TableCell>
              <TableCell className="text-right">136</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">4</TableCell>
              <TableCell>McLaren</TableCell>
              <TableCell className="text-right">92</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">5</TableCell>
              <TableCell>Aston Martin</TableCell>
              <TableCell className="text-right">65</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">6</TableCell>
              <TableCell>Alpine</TableCell>
              <TableCell className="text-right">28</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">7</TableCell>
              <TableCell>Racing Bulls</TableCell>
              <TableCell className="text-right">16</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">8</TableCell>
              <TableCell>Haas F1 Team</TableCell>
              <TableCell className="text-right">12</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  )
}