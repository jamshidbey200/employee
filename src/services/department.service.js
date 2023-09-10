import { useQuery, useMutation } from 'react-query';
import httpRequestAuth from './httpRequestAuth';

const useDepartmentService = {
	getList: (params, tableSlug) => httpRequestAuth.get(tableSlug, { params: params }),
	getByID: (id, params) => httpRequestAuth.get(`department/${id}`, { params }),
	create: (data) => httpRequestAuth.post('department', data),
	update: (data) => httpRequestAuth.put('department', data),
	delete: (mypathRemove) => httpRequestAuth.delete(`${mypathRemove}`),
};

export const useGetAllDepartmentList = ({ params = {}, tableSlug } = {}) => {
	return useQuery(['DEPARTMENT', params, tableSlug], () => {
		return useDepartmentService.getList(params, tableSlug);
	});
};

export const useGetByIdQuery = ({ id, params = {}, queryParams }) => {
	return useQuery(
		['DEPARTMENT_BY_ID', { id, ...params }],
		() => {
			return useDepartmentService.getByID(id, params);
		},
		queryParams,
	);
};

export const useCreateMutation = (mutation) => {
	return useMutation((data) => useDepartmentService.create(data), mutation);
};

export const useUpdateMutation = (mutation) => {
	return useMutation((data) => useDepartmentService.update(data), mutation);
};

export const useDeleteMutation = (mutation) => {
	return useMutation((mypathRemove) => useDepartmentService.delete(mypathRemove), mutation);
};
