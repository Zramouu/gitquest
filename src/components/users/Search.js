import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GithubContext from '../../context/Github/githubContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/Github/GithubState';

const Search = () => {

  const [text, setText] = useState('');
  const { users, dispatch } = useContext(GithubContext);
  const {setAlert} = useContext(AlertContext);
  const navigate = useNavigate();

  const onChange = (e) => setText(e.target.value)
  // const onSubmit = async (e) => {
  //   e.preventDefault()
  //   if (text === '') {
  //     setAlert('Please enter something', 'error')
  //   } else {
  //     dispatch({ type: 'SET_LOADING' })
  //     const users = await searchUsers(text)
  //     dispatch({ type: 'GET_USERS', payload: users })

  //     setText('')
  //   }
  // }
  const onSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({ type: 'GET_USERS', payload: users });
      navigate("/results");  // This line navigates to the results page
      setText('');
    }
  };
  
  return (
    <div className="px-2">
      <div className="row m-0 p-0">
        <form onSubmit={onSubmit} className="form col-12" id="my-form">
          <div className="row m-0">
            <input
              className="form-control form-control-sm col-8"
              type="text"
              placeholder="Search User e.g. Taylor Otwell"
              id="search-button"
              value={text}
              onChange={onChange}
             // onKeyDown={onEnter}
/>
      {users.length > 0 && (
        <button
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}
            className='btn btn-black btn-lg'
          >
            Clear
          </button>
      )}
   </div>
        </form>
      </div>
    </div>
  );
};

export default Search;


// eslint-disable-next-line no-lone-blocks
{/* 
    // <div>
    //   <form onSubmit={onSubmit} className='form'>
    //     <input */}
    //       type='text'
    //       name='text'
    //       placeholder='Search User '
    //       value={text}
    //       onChange={onChange}
    //     />
    //     <input
    //       type='submit'
    //       value='Search'
    //       className='btn btn-dark btn-block'
    //       //class="btn btn-primary btn-block"
    //     />
    //   </form>