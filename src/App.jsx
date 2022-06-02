import { useEffect, useState } from 'react';
import './App.scss';
import { BarChart } from './components/BarChart/BarChart';
import { LineChart } from './components/LineChart/LineChart';
import { Controls } from './components/Controls/Controls';
import { Data } from './Data';
import { AddPoint } from './components/AddPoint/AddPoint';
import { Chart as ChartJS } from "chart.js/auto";
import { Link, Route, Routes } from 'react-router-dom';

export const App = () => {
  const [isBar, setIsBar] = useState(true);
  const [data, setData] = useState([]);
  const [isShowAddForm, setIsShowAddForm] = useState(false);

  useEffect(() => setData(Data), []);

  const chartData = {
    labels: data.map((item) => item.mounth),
    id: data.map((item) => item.id),
    datasets: [
      {
        label: "Statictic",
        data: data.map((item) => item.gain),
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
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/BarChart" element={<BarChart chartData={chartData} />} />
        <Route path="/LineChart" element={<LineChart chartData={chartData} />} />
      </Routes>

      <Link
        to={`${isBar ? '/BarChart' : '/LineChart'}`}
        className="App__button edit center Link"
        onClick={() => setIsBar(!isBar)}
      >
        {isBar ? 'Bar' : 'Line'} Chart
      </Link>

      {isShowAddForm && (
        <AddPoint 
          dataLength={data.length}
          setData={setData}
          setIsShowAddForm={setIsShowAddForm}
        />
      )}

      <Controls
        data={data}
        setData={setData}
      />

      <button
        className="App__button edit center"
        onClick={() => setIsShowAddForm(true)}
      >
        Add point
      </button>
    </div>
  );
}
