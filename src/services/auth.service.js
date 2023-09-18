import { useMutation } from 'react-query';
import httpRequestAuth from './httpRequestAuth';

const authService = {
	login: (data) => httpRequestAuth.post('user/login', data),
};

export const useLoginMutation = (mutationSettings) => {
	return useMutation((data) => authService.login(data), mutationSettings);
};
