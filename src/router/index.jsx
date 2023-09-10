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
import UsersCards from 'modules/Users/components/Cards';
import RolesCards from 'modules/Roles/components/Cards';
import DesignationsCards from 'modules/Designation/components/Cards';
import DepartmentDetail from 'modules/Department/Detail';
import RoleDetail from 'modules/Roles/Detail';
import DesignationDetail from 'modules/Designation/Detail';
import UserDetail from 'modules/Users/Detail';
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
				<Route path="/departments" element={<Department />} />
				<Route path="departments/create" element={<Cards />} />
				<Route path="departments/:id" element={<DepartmentDetail />} />
				<Route path="users" element={<List />} />
				<Route path="users/create" element={<UsersCards />} />
				<Route path="users/:id" element={<UserDetail />} />
				<Route path="roles" element={<Roles />} />
				<Route path="roles/create" element={<RolesCards />} />
				<Route path="roles/:id" element={<RoleDetail />} />
				<Route path="designations" element={<Designation />} />
				<Route path="designations/create" element={<DesignationsCards />} />
				<Route path="designations/:id" element={<DesignationDetail />} />
				<Route path="*" element={<Navigate to="/dashboard" />} />
			</Route>

			<Route path="*" element={<Navigate to="/dashboard" />} />
		</Routes>
	);
};

export default observer(Router);
