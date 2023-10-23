import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return (
<div className="rounded-lg shadow card bg-light" 
style={{ 
  fontFamily: "Arial, sans-serif" }}>
    <div className="card-body">
    <h3 className="display-3 my-3" style={{ color: "#00256B" }}>
      Latest Repositories
    </h3>
        {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
        ))}
    </div>
</div>
  )
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;