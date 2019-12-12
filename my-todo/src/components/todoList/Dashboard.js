import React from 'react';
import DashboardTemplate from './DashboardTemplate';
import Form from './Form';
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