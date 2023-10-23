import React, { Fragment } from "react";
import UsersResult from "../users/UsersResult";
import GithubContext from "../../context/Github/githubContext";
import { useContext } from "react";
//import Search from "../users/Search";

const ResultsPage = () => {
    const githubContext = useContext(GithubContext);

    return (
      <Fragment>

        {/* <div
          className="mt-1"
          style={{ borderTop: "0.1rem solid", minHeight: "40vh" }}
        > */}
          <div>
            {githubContext.users.length > 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2 className="ml-2 mt-3">Profiles</h2>
              </div>
            ) : (
              console.log("")
            )}
            <UsersResult />
          </div>
       
      </Fragment>
   );
};

export default ResultsPage;
