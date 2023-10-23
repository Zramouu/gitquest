import React from 'react';


export const About = () => {
  return (
    <div style={{ 
        padding: '5%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: "80vh" }}>
      
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
        Harnessing the GitHub API, this app presents in-depth insights 
        about a specific user, showcasing their top repositories, follower count, and more.</p>
        <p style={{ 
        fontSize: '1.5rem', 
        marginBottom: '1.5rem', 
        color: '#002147'}}>
        Version:  1.0.0
      </p>

</div>

    //   <Fragment>
    //   <h1 style={{ 
    //     fontSize: '2rem', 
    //     marginBottom: '1.5rem', 
    //     color: '#002147'}}
    //     >
    //     About This App
    //   </h1>
    //   <p>Harnessing the GitHub API, this app presents in-depth insights 
    //    about a specific user, showcasing their top repositories, follower count, and more.</p>
    //   <p style={{ 
    //     fontSize: '1.5rem', 
    //     marginBottom: '1.5rem', 
    //     color: '#002147'}}>
    //     Version: 
    //   <p style={{ 
    //     fontSize: '1 rem', 
    //     marginBottom: '1.5rem', 
    //     color: '#002147'}} >1.0.0</p> 
    //     </p>
    // </Fragment>
  );
};

export default About;
