import { FetchUsersAction, DeleteUsersAction } from './index';

export enum ActionTypes {
  fetchUsers,
  deleteUsers
}

export type Action = FetchUsersAction | DeleteUsersAction;
