import React, { Fragment } from "react";
// import UsersResult from "../users/UsersResult";
// import GithubContext from "../../context/Github/githubContext";
// import { useContext } from "react";
import Search from "../users/Search";

export const Home = () => {
    //const githubContext = useContext(GithubContext);

    const styles = {
        gradientBackground: {
          background: 'linear-gradient(to right, #FFFFF, #F0F8FF)',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '60px'
        },
        shadow: {
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }
    };

    return (
        <Fragment>
            <div style={styles.gradientBackground}>
                <Search style={styles.shadow} />
            </div>
        </Fragment>
    );
};

export default Home;
