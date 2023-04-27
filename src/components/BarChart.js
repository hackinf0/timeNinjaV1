import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useTasks } from '../context/TaskContext';

const BarChart = () => {
  const chartRef = useRef();
  const { tasks } = useTasks();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    let chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
              label: 'Completed tasks',
              data: [12, 9, 15, 11, 7, 13, 16, 10, 8, 14, 17, 20],
              backgroundColor: '#2F855A',
              borderColor: '#2F855A',
              borderWidth: 1,
            },
            {
              label: 'In due tasks',
              data: [8, 11, 5, 9, 13, 10, 7, 12, 14, 6, 3, 1],
              backgroundColor: '#ECC94B',
              borderColor: '#ECC94B',
              borderWidth: 1,
            },
            
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        scales: {
          y: {
            stacked: true,
            title: {
              display: true,
              text: 'Number of tasks',
            },
            ticks: {
              beginAtZero: true,
              precision: 0,
            },
          },
          x: {
            title: {
              display: true,
              text: 'Month',
            },
          },
        },
      },
    });

    // Loop through each task and count completed and in-due tasks for each month
    tasks.forEach((task) => {
      const date = new Date(task.dates[0]);
      const monthIndex = date.getMonth();
      if (task.status === 'completed') {
        chart.data.datasets[0].data[monthIndex]++;
      } else {
        chart.data.datasets[1].data[monthIndex]++;
      }
    });

    chart.update();

    return () => {
      chart.destroy();
    };
  }, [tasks]);

  return (
    <div className="w-full h-96">
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;
