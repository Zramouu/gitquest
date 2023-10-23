// import React, {useContext} from "react";
// import UserItem from "./UserItem";
// import Spinner from "../Layout/Spinner";
// import GithubContext from "../../context/Github/GithubContext";

// const UsersResult = () => {
//     const {users, loading} = useContext(GithubContext);

//     if (!loading) {
//         return (
//             <div className=' grid grid-cols-1 gap-8 xl
//             :grid-cols-4 lg
//             :grid-cols-3 md
//             :grid-cols-2'>
//                 {users.map((user) => (
//                     <UserItem key={user.id} user={user}/>

                
//                 ))}
//             </div>
//         )
//     } else{
//         return <Spinner/>
//     }

// }

// export default UsersResult


import React, { useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../Layout/Spinner';
import GithubContext from '../../context/Github/githubContext';

const Users = () => {
  //const githubContext = useContext(GithubContext);

  const { loading, users } = useContext(GithubContext)

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;

