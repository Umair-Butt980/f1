"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface BiaxialLineChartProps {
  data: any[];
  xAxisDataKey: string;
  yAxis1DataKey: string;
  yAxis2DataKey: string;
  yAxis1Name: string;
  yAxis2Name: string;
}

export function BiaxialLineChart({
  data,
  xAxisDataKey,
  yAxis1DataKey,
  yAxis2DataKey,
  yAxis1Name,
  yAxis2Name,
}: BiaxialLineChartProps) {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisDataKey} />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey={yAxis1DataKey}
            name={yAxis1Name}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey={yAxis2DataKey}
            name={yAxis2Name}
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
