import React from 'react';
import { Navbar } from '../Components/Navbar';



function HighOrderComponent(WrappedComponent) {

    const HighOrderComponents = (props) => {
        return (
            <div>
                <ul style={{ display: 'flex', overflow: "scroll", listStyle: "none", "width": "80%", height: "50px" }}>
                    {Navbar && Navbar.map((value, index) => {
                        return (
                            <li style={{ padding: "5px" }} key={index}>
                                <a href={value.path}>{value.name}</a>
                            </li>
                        )
                    })}
                </ul>
                <WrappedComponent {...props} />
            </div>
        );
    }

    return HighOrderComponents;
}

export default HighOrderComponent;