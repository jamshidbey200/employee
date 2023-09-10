import { useQuery, useMutation } from 'react-query';
import httpRequestAuth from './httpRequestAuth';

const useDepartmentService = {
	getByID: (id, params) => httpRequestAuth.get(`designation/${id}`, { params }),
	create: (data) => httpRequestAuth.post('designation', data),
	update: (data) => httpRequestAuth.put('designation', data),
};

export const useGetDesignationByIdQuery = ({ id, params = {}, queryParams }) => {
	return useQuery(
		['DESIGNATION_BY_ID', { id, ...params }],
		() => {
			return useDepartmentService.getByID(id, params);
		},
		queryParams,
	);
};

export const useDesignationCreateMutation = (mutation) => {
	return useMutation((data) => useDepartmentService.create(data), mutation);
};

export const useDesignationUpdateMutation = (mutation) => {
	return useMutation((data) => useDepartmentService.update(data), mutation);
};
