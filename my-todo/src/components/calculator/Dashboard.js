import React from 'react';
import DashboardTemplate from '../todoList/DashboardTemplate';
import Form from '../todoList/Form';
import TodoList from './TodoList';

const Dashboard = () => {
	return (
		<DashboardTemplate
			form={<Form />}
			todoList={<TodoList />}
		/>
	)
}

export default Dashboard;