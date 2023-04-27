import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import {BiTask} from 'react-icons/bi'
import {BsFillCalendar2MinusFill,BsFillCalendar2CheckFill} from 'react-icons/bs'
import { useTasks } from '../context/TaskContext'


export default function DashboardStatsGrid() {
	const { tasks,setTasks } = useTasks();
	const totalTasks = tasks.length;
	const tasksInDue = tasks.filter(task => task.status === 'in-due').length;
	const tasksCompleted = tasks.filter(task => task.status === 'completed').length;
	return (
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<BiTask className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total task</span>
					<div className="flex items-center">
						<strong className="text-xl text-green-700 font-semibold">{totalTasks} task(s)</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<BsFillCalendar2MinusFill className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Task in due</span>
					<div className="flex items-center">
						<strong className="text-xl text-red-700 font-semibold">{tasksInDue} task(s)</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<BsFillCalendar2CheckFill className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Tasks completed</span>
					<div className="flex items-center">
						<strong className="text-xl text-green-700 font-semibold">{tasksCompleted} task(s)</strong>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
