import { useState } from 'react';
import './App.scss';
import { BarChart } from './components/BarChart/BarChart';
import { LineChart } from './components/LineChart/LineChart';
import { Controls } from './components/Controls/Controls';
import { Data } from './Data';

export const App = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((item) => item.mounth),
    id: Data.map((item) => item.id),
    datasets: [
      {
        label: "Statictic",
        data: Data.map((item) => item.gain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <header className="App-header">
        <Controls 
          chartData={chartData}
          setChartData={setChartData}
        />
      </header>

      <BarChart 
        chartData={chartData}
      />

      <LineChart 
        chartData={chartData}
      />
    </div>
  );
}
