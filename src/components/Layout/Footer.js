import React from "react";

export const Footer= () => {
    return (

        <div className="d-flex justify-content-center align-items-center py-1 px-1 mb-1" 
        style={{ 
            marginTop: 'auto', 
            backgroundColor: "#002147", 
            border: '5px',
            bottom: '0',       
            width: '100%',     
            zIndex: 999        
             }}>
            <span>
                <a className="btn-sm text-decoration-none rounded-0 text-light"
                   href="https://github.com/Zramouu?tab=repositories" style={{ marginRight: '15px' }}>
                    <i className="fa text-light fa-github"></i>
                </a>
                <a className="btn-sm text-decoration-none rounded-0 text-light"
                   href="https://www.linkedin.com/in/zaynab-r-94b605286/" style={{ marginRight: '15px' }}>
                    <i className="fa text-light fa-linkedin"></i>
                </a>
                <a className="btn-sm text-decoration-none rounded-0 text-light"
                   href="https://www.linkedin.com/in/zaynab-r-94b605286/" style={{ marginRight: '15px' }}>
                    <i className="fa fa-globe"></i>
                </a>
                <a className="btn-sm text-decoration-none rounded-0 text-light" href="https://www.linkedin.com/in/zaynab-r-94b605286/">
                    Copyright &copy; 2023
                </a>
            </span>
        </div>
    );
};

export default Footer;

