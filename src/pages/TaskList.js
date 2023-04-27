import React,{useState} from 'react';
import { useTasks } from '../context/TaskContext';
import {FaTrash,FaEdit} from 'react-icons/fa'
import { DatePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;

const TaskList = () => {
    const { tasks,setTasks } = useTasks();
    const [editTask, setEditTask] = useState(null);
    const [editedTaskName, setEditedTaskName] = useState('');
    const [editedTaskDates, setEditedTaskDates] = useState('');
    const [editedTaskStatus, setEditedTaskStatus] = useState('');
  
    const handleEdit = (task) => {
        setEditTask(task);
        setEditedTaskName(task.taskName);
        setEditedTaskDates(task.dates);
        setEditedTaskStatus(task.status);
    };

    const handleSave = () => {
        const updatedTasks = tasks.map((task) =>
            task.taskName === editTask.taskName
                ? { taskName: editedTaskName, dates: editedTaskDates, status: editedTaskStatus, color: editTask.color }
                : task
        );
        setTasks(updatedTasks);
        setEditTask(null);
    };

    const handleDelete = (task) => {
        const updatedTasks = tasks.filter((t) => t.taskName !== task.taskName);
        setTasks(updatedTasks);
    };
    return (
        <div className="flex flex-wrap">
            {tasks.map((task) => (
                <div key={task.taskName} className="relative max-w-sm rounded overflow-hidden shadow-lg m-2">
                <div className="bg-gray-200 p-4">
                    <div className="rounded-full h-6 w-6 float-left mr-2" style={{ backgroundColor: task.color }}></div>
                    <h3 className="font-bold text-xl mb-2">{task.taskName}</h3>
                    <p className="text-gray-700 text-base">{task.dates.join(' to ')}</p>
                    <div className="absolute top-0 right-0 flex">
                        <button className="text-green-700 mr-2 mt-2" onClick={() => handleEdit(task)}>
                            <FaEdit />
                        </button>
                        <button className="text-red-700 mr-2 mt-2" onClick={() => handleDelete(task)}>
                            <FaTrash />
                        </button>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <p className="text-gray-700 text-base">Status: {task.status}</p>
                </div>
            </div>
            
            ))}
            {editTask && (
                <div className="max-w-sm absolute top-0 left-0 right-0 bottom-0 m-auto">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="font-bold text-xl mb-2">Edit Task</h3>
                    <form onSubmit={handleSave}>
                        <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="taskName">
                            Task Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="taskName"
                            type="text"
                            value={editedTaskName}
                            onChange={(e) => setEditedTaskName(e.target.value)}
                        />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="task-dates">
                                Date Range
                            </label>
                            <RangePicker
                                onChange={(values) => {
                                    console.log(values)
                                    const formattedDates = values.map((date) => new Date(date).toISOString().substring(0, 10));
                                    setEditedTaskDates(formattedDates);
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
                            value={editedTaskStatus}
                            onChange={(e) => setEditedTaskStatus(e.target.value)}
                            >
                            <option value="">-- Select Status --</option>
                            <option value="completed">Completed</option>
                            <option value="in-due">In Due</option>
                            </select>
                        </div>
                        <div className="flex justify-end">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                            type="submit"
                        >
                            Save
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={() => setEditTask(null)}
                        >
                            Cancel
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskList;
