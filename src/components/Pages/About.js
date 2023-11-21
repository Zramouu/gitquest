import React, {Fragment} from 'react';


export const About = () => {
  return (

    <Fragment>
      
      <h1 style={{ 
        fontSize: '2rem', 
        marginBottom: '1.5rem', 
        color: '#002147', 
        textAlign: "left" }}
        >
        About This App</h1>
      
      <p style={{ 
        maxWidth: '800px', 
        lineHeight: '1.5', 
        fontSize: '1rem', 
        color: '#002147' }}>
        Leveraging the GitHub API, providing comprehensive data on a GitHub user. 
        Discover their standout repositories, monitor their follower count, and access a myriad of other key insights.</p>
        <p style={{ 
        fontSize: '1.75rem', 
        marginBottom: '1.5rem', 
        color: '#002147'}}>
        Features:
      </p>
      <p>
        <ul>
            <li>Showcase of leading repositories</li>
            <li>Live follower count updates</li>
            <li>Deep dive into user metrics</li>
            <li>Customizable queries for specific information</li>
        </ul>
        
      </p>
      <p style={{ 
        fontSize: '1.75rem', 
        marginBottom: '1.5rem', 
        color: '#002147'}}>
        Info Request:
      </p>
      <p>For more information: <a href="https://github.com/Zramouu/gitquest"> Repositorie</a> </p>
      </Fragment>

  );
};

export default About;
