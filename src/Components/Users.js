import React, { useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { fetchUsers } from "../features/Users/userAction";



function Users() {
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return ( <div>
        <h1>Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
    </div> );
}

export default Users;