import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RacePredictions } from "@/components/race-predictions"
import { PredictionModel } from "@/components/prediction-model"

export default function PredictionsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-6">Race Predictions</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Next Race Predictions</CardTitle>
            <CardDescription>AI-powered predictions for the upcoming race</CardDescription>
          </CardHeader>
          <CardContent>
            <RacePredictions />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prediction Model</CardTitle>
            <CardDescription>How our machine learning model works</CardDescription>
          </CardHeader>
          <CardContent>
            <PredictionModel />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

