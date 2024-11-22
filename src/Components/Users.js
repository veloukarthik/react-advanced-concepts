import React, { useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { fetchUsers } from "../features/Users/userAction";



function Users() {
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    if (loading) {
        return <div>Loading...</div>;
    }
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