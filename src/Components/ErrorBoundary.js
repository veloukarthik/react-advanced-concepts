// src/ErrorBoundary.js
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidMount()
  {
    console.log("components did mount");
  }

  shouldComponentUpdate()
  {
    return true;
  }

  componentDidUpdate()
  {
    console.Console("components updated");
  }

  componentDidCatch(error, info) {
    console.error("Error tested:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
