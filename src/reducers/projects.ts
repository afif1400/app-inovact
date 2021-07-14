import { Project } from "./../types/project-types";
import * as ActionType from "../types/action-types";

interface projectsState {
	loading: boolean;
	error: String | null;
	data: Project[];
}

const initialState: projectsState = {
	loading: false,
	error: null,
	data: [],
};

const reducer = (
	state: projectsState = initialState,
	action: any
): projectsState => {
	switch (action.type) {
		case ActionType.FETCH_PROJECT_ALL:
			//? return the updated state
			return { ...state };
		default:
			return { ...state };
	}
};

export default reducer;
