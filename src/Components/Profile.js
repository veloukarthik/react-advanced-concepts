import { useContext, createContext } from 'react'
import AppContext from './Hooks/AppContext'


const Profile = () => {
    const { user, setUser } = useContext(AppContext);

    return (
        <div>
            <h1>Profile Component</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.name}!</p>
                    <button onClick={() => setUser(null)}>
                        Log Out
                    </button>
                </div>
            ) : (
                <div>
                    <p>Please log in.</p>
                    <button onClick={() => setUser({ name: 'John Doe' })}>
                        Log In
                    </button>
                </div>
            )}


        </div>
    );
};

export default Profile;