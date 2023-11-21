import React, { Fragment } from "react";
import UsersResult from "../users/UsersResult";
import GithubContext from "../../context/Github/githubContext";
import { useContext } from "react";
import Search from "../users/Search";

export const Home =() =>{
    const githubContext = useContext(GithubContext);

    return (
      <Fragment>
        <Search />
        <div
          className="mt-1"
          style={{ borderTop: "0.1rem solid", minHeight: "vh" }}
        >
          <div>
            {githubContext.users.length > 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2 className="ml-2 mt-3" style={{color: "#034694"}}>Profiles</h2>
              </div>
            ) : (
              console.log("")
            )}
            <UsersResult />
          </div>
        </div>
      </Fragment>
    );
  };
  
  export default Home;