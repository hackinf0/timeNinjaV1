import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import BarChart from '../components/BarChart'
import { useTasks } from '../context/TaskContext';

export default function Dashboard() {
	const { tasks } = useTasks();
  
	return (
	  <div className="flex flex-col gap-4">
		<DashboardStatsGrid />
		<div className="flex flex-row gap-4 w-full">
		  <BarChart  />
		</div>
	  </div>
	);
  }
  