import axios, { AxiosInstance, AxiosResponse } from "axios";

const BASE_URL = "https://reqres.in/api";

interface ApiResponse<T = any> {
	data: T;
}

const api: AxiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

const handleResponse = (response: AxiosResponse<ApiResponse>) => response?.data;

const handleError = (error: any) => {
	console.log(error, "ERROR");
	if (error.response.status === 400) {
		// The request was made and the server responded with a status code
		return {
			message: error.response.data.error,
		};
	}
};

export const signIn = async (data: {
	email: string;
	password: string;
}): Promise<any> => {
	try {
		const response = await api.post<ApiResponse>("/login", data);
		return handleResponse(response);
	} catch (error) {
		throw handleError(error);
	}
};

export const signUp = async (data: {
	email: string;
	password: string;
}): Promise<any> => {
	try {
		const response = await api.post<ApiResponse>("/register", data);
		return handleResponse(response);
	} catch (error) {
		console.log(error, "Error from API");

		throw handleError(error);
	}
};

export const getUserList = async (): Promise<any> => {
	try {
		const response = await api.get<ApiResponse>("/users");
		return handleResponse(response);
	} catch (error) {
		throw handleError(error);
	}
};

export default api;
