import { useQuery, useMutation } from 'react-query';
import httpRequestAuth from './httpRequestAuth';

const useGetRoadmapService = {
	getByID: (id, params) => httpRequestAuth.get(`roadmap/${id}`, { params }),
	create: (data) => httpRequestAuth.post('roadmap', data),
	update: (data) => httpRequestAuth.put('roadmap', data),
};

export const useGetRoadmapByIdQuery = ({ id, params = {}, queryParams }) => {
	return useQuery(
		['ROADMAPS_BY_ID', { id, ...params }],
		() => {
			return useGetRoadmapService.getByID(id, params);
		},
		queryParams,
	);
};

export const useRoadmapCreateMutation = (mutation) => {
	return useMutation((data) => useGetRoadmapService.create(data), mutation);
};

export const useRoadmapUpdateMutation = (mutation) => {
	return useMutation((data) => useGetRoadmapService.update(data), mutation);
};
