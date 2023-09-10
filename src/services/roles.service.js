import { useQuery, useMutation } from 'react-query';
import httpRequestAuth from './httpRequestAuth';

const useDepartmentService = {
	getByID: (id, params) => httpRequestAuth.get(`role/${id}`, { params }),
	create: (data) => httpRequestAuth.post('role', data),
	update: (data) => httpRequestAuth.put('role', data),
};

export const useGetRoleByIdQuery = ({ id, params = {}, queryParams }) => {
	return useQuery(
		['ROLE_BY_ID', { id, ...params }],
		() => {
			return useDepartmentService.getByID(id, params);
		},
		queryParams,
	);
};

export const useRoleCreateMutation = (mutation) => {
	return useMutation((data) => useDepartmentService.create(data), mutation);
};

export const useRoleUpdateMutation = (mutation) => {
	return useMutation((data) => useDepartmentService.update(data), mutation);
};
