import React from 'react'
import { Chart } from "react-google-charts";
import BarChart from './components/BarChart'
import './App.css'
import ScatterChart from './components/ScatterChart'
const App = () => {
  return (
    <div>
      <BarChart />
      <Chart
        width={'100%'}
        height={'90%'}
        chartType="ScatterChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Color Intensity', 'Hue'],
          [8, 12],
          [4, 5.5],
          [11, 14],
          [4, 5],
          [3, 3.5],
          [6.5, 7],
        ]}
        options={{
          title: 'Color Intensity vs. Hue comparison',
          hAxis: { title: 'Color Intensity', minValue: 0, maxValue: 15 },
          vAxis: { title: 'Hue', minValue: 0, maxValue: 15 },
          legend: 'none',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}

export default App
