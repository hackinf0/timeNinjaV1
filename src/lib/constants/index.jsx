import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'
import {FaTasks} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {IoCreate} from 'react-icons/io5'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'task',
		label: 'Create task',
		path: '/create-task',
		icon: <IoCreate />
	},
	{
		key: 'Task list',
		label: 'Task list',
		path: '/task-list',
		icon: <FaTasks />
	},

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
