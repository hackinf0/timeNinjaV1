import React, { useState,useContext } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import {useTasks} from '../context/TaskContext';

const { RangePicker } = DatePicker;


const CreateTask = () => {
    const { tasks, setTasks } = useTasks();
    const [taskName, setTaskName] = useState('');    
    const [dates, setDates] = useState([]) ;
    const [status, setStatus] = useState('in due');
    const [color, setColor] = useState('');
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedDates = dates.map((date) => formatDate(new Date(date)));
        // Create a new task object with all the form inputs
        const newTask = {
          taskName,
          dates,
          status,
          color,
        };
        console.log(newTask)
        // Append the new task object to the tasks array
        setTasks([...tasks, newTask]);
        console.log(tasks)
        // Reset the form inputs
        setTaskName('');
        setDates([]);
        setStatus('in due');
        setColor('');
    };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="task-name">
              Task Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="task-name"
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="task-dates">
                Date Range
            </label>
            <RangePicker
              onChange={(values) => {
                console.log(values)
                const formattedDates = values.map((date) => new Date(date).toISOString().substring(0, 10));
                setDates(formattedDates);
              }}
            />




          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="task-status">
              Status
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="task-status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">-- Select Status --</option>
              <option value="completed">Completed</option>
              <option value="in-due">In Due</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="task-color">
              Color
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="task-color"
              type="color"
              placeholder="Task Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit} 
            >
            Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
