import axios, { AxiosInstance, AxiosResponse } from "axios";

const BASE_URL = "https://reqres.in/api";

interface ApiResponse<T = any> {
	data: T;
}

interface ApiError {
	message: string;
}

const api: AxiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
		// You can add any common headers here
	},
});

const handleResponse = (response: AxiosResponse<ApiResponse>) => response?.data;

const handleError = (error: any): ApiError => {
	if (error.response) {
		// The request was made and the server responded with a status code
		return {
			message: `Request failed with status code ${error.response.status}`,
		};
	} else if (error.request) {
		// The request was made but no response was received
		return { message: "No response received from the server" };
	} else {
		// Something happened in setting up the request that triggered an Error
		return { message: "Error setting up the request" };
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
		// console.log(error, "Error from API");
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
