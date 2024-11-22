import React, { Component } from 'react';


function HighOrderComponent(WrappedComponent) {

    const HighOrderComponents = (props) => {
        return (
            <div>
                <h1>High Order Component tested</h1>
                <WrappedComponent {...props} />
            </div>
        );
    }

    return HighOrderComponents;
}

export default HighOrderComponent;