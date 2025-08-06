import React, { useMemo } from 'react';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register required components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const COLORS = {
  algoDatapoint: 'rgba(255, 99, 132, 1)', // Prominent
  log_n: 'rgba(27, 6, 255, 0.98)',
  n_log_n: 'rgb(123, 0, 255)',
  n: 'rgba(0, 255, 38, 0.9)',
  n_squared: 'rgb(230, 255, 4)',
  n_cubed: 'rgb(255, 111, 0)',
  exponential: 'rgb(255, 6, 6)',
};

const Graph = ({ graphData, showComparisons = true }) => {
  const chartData = useMemo(() => {
    const labels = graphData.dataPoints.map((d) => d.numberOfInputs);

    // Helper to build dataset
    const buildDataset = (label, key, color, prominent = false) => ({
      label,
      data: graphData.dataPoints.map((d) => {
        const val = d[key];
        return Number.isFinite(val) ? val : null;
      }),
      borderColor: color,
      backgroundColor: color,
      borderWidth: prominent ? 2.5 : 1,
      pointRadius: prominent ? 3 : 0,
      tension: 0.3,
      hidden: !prominent && !showComparisons, // hide if not showing comparisons
    });

    const datasets = [
      buildDataset(
        'Algorithm Runtime',
        'algoDatapoint',
        COLORS.algoDatapoint,
        true
      ),
      buildDataset('log(n)', 'log_n', COLORS.log_n),
      buildDataset('n·log(n)', 'n_log_n', COLORS.n_log_n),
      buildDataset('n', 'n', COLORS.n),
      // buildDataset("n^2", "n_squared", COLORS.n_squared),
      // buildDataset("n^3", "n_cubed", COLORS.n_cubed),
      // buildDataset("2ⁿ", "exponential", COLORS.exponential),
    ];

    return {
      labels,
      datasets,
    };
  }, [graphData]);

  // if (!graphData?.dataPoints) return <div>No data</div>;
  // console.log(`Graph component: graphData: ${JSON.stringify(graphData)}`)

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Algorithm Runtime vs Input Size',
      },
      legend: {
        display: true,
        position: 'bottom',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Number of Inputs (N)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Milliseconds',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='graph'>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default Graph;
