import { observer } from "mobx-react-lite";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../modules/Login";
import authStore from "../store/auth.store";
import Department from "../modules/Department";
import Cards from "modules/Department/components/Cards";
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
        <Route path="roles" element={<Navigate to="/roles" />} />
        <Route path="designation" element={<Navigate to="/designation" />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default observer(Router);
