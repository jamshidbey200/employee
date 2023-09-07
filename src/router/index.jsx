import { observer } from 'mobx-react-lite';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import Login from '../modules/Login';
import authStore from '../store/auth.store';
import Department from '../modules/Department';
import Cards from 'modules/Department/components/Cards';
import List from 'modules/Users/List';
import Roles from 'modules/Roles/List';
import Designation from 'modules/Designation/List';
const Router = () => {
	const { isAuth } = authStore;

	// if (!isAuth)
	// 	return (
	// 		<Routes>
	// 			<Route path="/" element={<AuthLayout />}>
	// 				<Route index element={<Navigate to="/login " />} />
	// 				<Route path="login" element={<Login />} />
	// 				<Route path="*" element={<Navigate to="/login" />} />
	// 			</Route>
	// 			<Route path="*" element={<Navigate to="/login" />} />
	// 		</Routes>
	// 	);

	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Navigate to="/dashboard" />} />
				<Route path="department" element={<Department />} />
				<Route path="department/create" element={<Cards />} />
				<Route path="users" element={<List />} />
				<Route path="users/create" element={<Cards />} />
				<Route path="roles" element={<Roles />} />
				<Route path="roles/create" element={<Cards />} />
				<Route path="designation" element={<Designation />} />
				<Route path="designation/create" element={<Cards />} />
				<Route path="*" element={<Navigate to="/dashboard" />} />
			</Route>

			<Route path="*" element={<Navigate to="/dashboard" />} />
		</Routes>
	);
};

export default observer(Router);
