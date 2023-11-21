import React, { useState, useContext } from 'react';
import GithubContext from '../../context/Github/githubContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/Github/GithubState';

const Search = () => {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const onChange = (e) => setText(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'error');
    } else {
      githubContext.dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      githubContext.dispatch({ type: 'GET_USERS', payload: users });
      setText('');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start', 
      alignItems: 'center', 
      paddingTop: '20px',
      backgroundColor: '#FFFFFF',
      width: '100%',
    }}>
      <form onSubmit={onSubmit} style={{ width: '100%', maxWidth: '600px' }}>
        <div style={{
          display: 'flex',
          position: 'relative',
        }}>
          <input
            type="text"
            value={text}
            onChange={onChange}
            placeholder="Search User "
            style={{
              flex: 1,
              height: '50px',
              padding: '10px',
              fontSize: '18px',
              fontFamily:"arial",
              letterSpacing: '2px',
              outline: 'none',
              borderRadius: '25px',
              backgroundColor: '#FCFCFC',
              color: '#000000',
              border: '1px solid #DDD',
            }}
          />
          <button
            type="submit"
            style={{
              width: '50px',
              height: '50px',
              border: 'none',
              fontSize: '20px',
              fontWeight: 'bold',
              outline: 'none',
              cursor: 'pointer',
              borderRadius: '50%',
              color: '#FFFFFF',
              backgroundColor: '#002147',
              marginLeft: '10px',
            }}
          >
            <i className="fa fa-search" style={{ fontSize: '1.2rem' }}></i>
          </button>
        </div>
        {githubContext.users.length > 0 && (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <button
              type="button"
              onClick={() => githubContext.dispatch({ type: 'CLEAR_USERS' })}
              style={{
                backgroundColor: "#002147",
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Search;
