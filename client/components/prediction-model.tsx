import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PredictionModel() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="factors">Factors</TabsTrigger>
        <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <div className="space-y-4 py-4">
          <p className="text-sm">
            Our prediction model uses machine learning algorithms trained on historical F1 data to predict race
            outcomes. The model analyzes patterns from past races, driver performances, and circuit characteristics to
            generate predictions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h4 className="text-sm font-medium mb-2">Data Sources</h4>
                <ul className="text-sm space-y-1">
                  <li>• Historical race results (2010-present)</li>
                  <li>• Qualifying performances</li>
                  <li>• Driver career statistics</li>
                  <li>• Team performance trends</li>
                  <li>• Circuit-specific data</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h4 className="text-sm font-medium mb-2">Algorithm</h4>
                <ul className="text-sm space-y-1">
                  <li>• Ensemble of machine learning models</li>
                  <li>• Gradient Boosting Decision Trees</li>
                  <li>• Neural Networks</li>
                  <li>• Bayesian probability models</li>
                  <li>• Monte Carlo simulations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="factors">
        <div className="space-y-4 py-4">
          <p className="text-sm">
            Our model considers numerous factors when making predictions. Here are the key variables that influence the
            prediction outcomes:
          </p>

          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardContent className="p-4">
                <h4 className="text-sm font-medium mb-2">Driver Factors</h4>
                <ul className="text-sm space-y-1">
                  <li>• Recent form (last 5 races)</li>
                  <li>• Historical performance at the circuit</li>
                  <li>• Qualifying performance</li>
                  <li>• Race start performance</li>
                  <li>• Wet weather performance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h4 className="text-sm font-medium mb-2">Team Factors</h4>
                <ul className="text-sm space-y-1">
                  <li>• Car performance (power, downforce, drag)</li>
                  <li>• Pit stop efficiency</li>
                  <li>• Strategic decision making</li>
                  <li>• Recent upgrades</li>
                  <li>• Historical team performance at circuit</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h4 className="text-sm font-medium mb-2">Circuit & Race Factors</h4>
                <ul className="text-sm space-y-1">
                  <li>• Circuit characteristics (high/low downforce)</li>
                  <li>• Weather conditions</li>
                  <li>• Track temperature</li>
                  <li>• Tire compounds</li>
                  <li>• Race start time (day/night)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="accuracy">
        <div className="space-y-4 py-4">
          <p className="text-sm">
            Our model is continuously evaluated and improved. Here's how it has performed in predicting race outcomes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h4 className="text-sm font-medium mb-2">Prediction Accuracy</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Podium Predictions</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "78%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Race Winner</span>
                      <span className="font-medium">62%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "62%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Points Finishers</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "85%" }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h4 className="text-sm font-medium mb-2">Recent Performance</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Miami GP 2023</span>
                    <span className="font-medium">7/10 correct</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Emilia Romagna GP 2023</span>
                    <span className="font-medium">8/10 correct</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Monaco GP 2023</span>
                    <span className="font-medium">6/10 correct</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Spanish GP 2023</span>
                    <span className="font-medium">9/10 correct</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Canadian GP 2023</span>
                    <span className="font-medium">7/10 correct</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

