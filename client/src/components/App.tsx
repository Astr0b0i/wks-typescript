import React, { useEffect } from 'react';
import {User, fetchUsers, deleteUsers} from '../store/actions';
import {StoreState} from '../store/reducers';
import {useSelector, useDispatch} from 'react-redux';

export default function App() {
	const dispatch = useDispatch();
	const users: User[] = useSelector((state: StoreState) => state.users);

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	const click = () => {
		dispatch(fetchUsers());
	}
	
	const deleteUserClick = (id: number) => {
		dispatch(deleteUsers(id))
	}

	return (
		<div>
			<button onClick={click}>FETCH USERS!</button>
			{users.map((user: User) => {
				return (
					<div key={user.id}>
						{user.id}) {user.name} {user.lastName}
						<button onClick={()=> deleteUserClick(user.id)}>delete</button>
					</div>
				);
			})}
		</div>
	);
}

