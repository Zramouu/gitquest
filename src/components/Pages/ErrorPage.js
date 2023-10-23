import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render the ErrorPage component as the fallback UI
      return <ErrorPage />;
    }

    return this.props.children; 
  }
}

export const ErrorPage = () => {
    return (
      <div style={{ 
          padding: '5%', 
          display: 'flex', 
          flexDirection: 'column',
          height: "60vh" }}>
        
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#333' }}>Page Not Found</h1>
        
        <p style={{
          maxWidth: '800px', 
          lineHeight: '1.5', 
          fontSize: '1rem', 
          color: '#555' }}>
          We apologize for the inconvenience, but the page you're seeking cannot be located. It's possible the page 
          may have moved, or the URL might have been typed incorrectly.
        </p>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#333' }}>Suggestions</h2>
        <ul>
        <li>Ensure the URL in the address bar is correct.</li>
        <li>Return to the <Link to="/">Home</Link>.</li>

        </ul>
        <p>Thank you for your understanding</p>
        
      </div>
    );
  };
  
  export default ErrorPage;
  export { ErrorBoundary };

  