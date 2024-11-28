import { useContext } from 'react'
import AppContext from './Hooks/AppContext'



const Profile = () => {
    const { user, setUser, theme,setTheme } = useContext(AppContext);

    const color = theme=="light" ? "lightblue" : "black";

    const textColor = theme=="light" ? "black" : "white";

    return (
        <div style={{backgroundColor:color,color:textColor}}>
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
            <button style={{border:"none",background:color,color:textColor,border:"2px solid red",borderRadius:"10px"}} onClick={() => theme == 'light' ? setTheme('dark') : setTheme('light')}>
                {theme=="light" ? "Dark" : "Light" } mode
            </button>

        </div>
    );
};

export default Profile;