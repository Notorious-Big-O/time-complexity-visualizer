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
  log_n: 'rgba(54, 162, 235, 0.3)',
  n_log_n: 'rgba(255, 206, 86, 0.3)',
  n: 'rgba(75, 192, 192, 0.3)',
  n_squared: 'rgba(153, 102, 255, 0.3)',
  n_cubed: 'rgba(255, 159, 64, 0.3)',
  exponential: 'rgba(199, 199, 199, 0.3)',
};

const Graph = ({ graphData, showComparisons = true }) => {
  const chartData = useMemo(() => {
    const labels = graphData.dataPoints.map((d) => d.numberOfInputs);
    console.log(`Graph component labels: ${labels}`);

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
      // buildDataset('log(n)', 'log_n', COLORS.log_n),
      // buildDataset('n·log(n)', 'n_log_n', COLORS.n_log_n),
      // buildDataset('n', 'n', COLORS.n),
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
