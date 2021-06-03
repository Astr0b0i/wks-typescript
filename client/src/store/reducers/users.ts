import {User} from '../actions';
import { ActionTypes, Action } from '../actions/types';

export const usersReducer = (state: User[] = [], action: Action) => {
	switch (action.type) {
		case ActionTypes.fetchUsers:
			return action.payload;

		case ActionTypes.deleteUsers:
			return state = state.filter(user => user.id !== action.payload)
		default:
			return state;
	}
};
