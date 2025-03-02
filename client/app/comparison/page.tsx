import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DriverComparison } from "@/components/driver-comparison"

export default function ComparisonPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-6">Driver Comparison</h1>

      <Card>
        <CardHeader>
          <CardTitle>Driver vs. Driver</CardTitle>
          <CardDescription>Compare performance statistics between F1 drivers</CardDescription>
        </CardHeader>
        <CardContent>
          <DriverComparison />
        </CardContent>
      </Card>
    </div>
  )
}

