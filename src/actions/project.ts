import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { FETCH_PROJECT_ALL } from "../types/action-types";
import * as api from "../utils/api";

export const getProjects = async (dispatch: Dispatch) => {
	try {
		const data: AxiosResponse<any> = await api.fetchProjects();
		dispatch({ type: FETCH_PROJECT_ALL, payload: data });
	} catch (err) {
		console.log(err);
	}
};
