import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <div
            className="row m-0 p-0"
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="col-12 text-center"
              style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{
          height: "auto",
          maxWidth: "100px",

          borderRadius: "75px",}}
      />
      </div>
      </div>
      <h3>{login}</h3>

      <div>
      <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1' style={{color: "white", backgroundColor: "#034694"}}>
          Visit Profile 
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;