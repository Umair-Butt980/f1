import Image from "next/image"
import { Card, CardContent } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"

export function CircuitInfo() {
  return (
    <div className="space-y-6">
      <div className="aspect-video relative overflow-hidden rounded-lg">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Miami International Autodrome Circuit Map"
          width={800}
          height={400}
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-sm font-medium">Length</div>
            <div className="text-2xl font-bold">5.412 km</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm font-medium">Turns</div>
            <div className="text-2xl font-bold">19</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm font-medium">DRS Zones</div>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm font-medium">Lap Record</div>
            <div className="text-2xl font-bold">1:29.708</div>
            <div className="text-xs text-muted-foreground">Max Verstappen (2023)</div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Circuit Characteristics</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">High Speed</Badge>
          <Badge variant="outline">Technical</Badge>
          <Badge variant="outline">Hard Braking</Badge>
          <Badge variant="outline">Overtaking Opportunities</Badge>
          <Badge variant="outline">Street Circuit</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Weather Forecast</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">☀️</span>
            <span>28°C</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💨</span>
            <span>Wind: 12 km/h</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💧</span>
            <span>Humidity: 65%</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🌧️</span>
            <span>Chance of Rain: 10%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

