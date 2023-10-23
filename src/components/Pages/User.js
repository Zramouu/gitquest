import React, { Fragment, useEffect, useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import RepoList from '../Repos/RepoList';
import GithubContext from '../../context/Github/githubContext';
import { getUserAndRepos } from '../../context/Github/GithubState';
import { BsLink45Deg, BsFillInfoCircleFill } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { LuUsers2 } from 'react-icons/lu'; 
import { LiaUserSolid } from 'react-icons/lia';
import { MdLocationCity } from 'react-icons/md';
import { PiMedalDuotone } from 'react-icons/pi'; 
import { GoRepo, GoRepoPush} from 'react-icons/go';




const User = () => {

  const { user, loading, repos, dispatch } = useContext(GithubContext)
  const params= useParams();
  const [showFullBio, setShowFullBio] = useState(false);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login)
      dispatch({ type: 'GET_USER_AND_REPOS', payload: userData })
    }

    getUserData()
  }, [dispatch, params.login])

  const {
    name,
    //type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    //login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  if (loading) {
    return <Spinner />;
  }

  const websiteUrl = blog?.startsWith('http') ? blog : 'https://' + blog

    const toggleBio = () => {
        setShowFullBio(!showFullBio);
    };

    const shortBio = bio && bio.length > 18 ? bio.slice(0, 18) + '...' : bio;

    if (loading) {
        return <Spinner />;
    }



  return (
    <Fragment>
      {/* <div className="container-fluid p-4" style={{ maxWidth: "83%", backgroundColor: '#f8f9fa' }}> */}

        <div className="mb-4">
          <Link to='/' className="btn btn-outline-secondary"
          style={{color:"#00256B."}}>
          <i className="fa fa-chevron-left"></i> Back to search
          </Link>
        </div>

        <div className="ml-2"></div>
      <div className="col-12 p-2" style={{}}>
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
              alt=""
              style={{
                height: "auto",
                maxWidth: "150px",

                borderRadius: "75px",
              }}
            />
          </div>
          <div className="col-12 text-center">
            {name ? (
            
              <p>
                <PiMedalDuotone style={{ marginRight: '4px' }}/>
                {name}
                </p>
            ) : (
              <p>
                <em>Name not Listed</em>
              </p>
            )}
            <p 
            className="col-12 text-center" 
            title={bio} 
            style={{ cursor: 'pointer' }}
            onClick={toggleBio}
            >
            <BsFillInfoCircleFill style={{ marginRight: '4px' }} />
            {showFullBio ? bio : shortBio}
            </p>

          </div>
          <div className=" col-4 col-sm-4 col-xs-4 m-2 text-center">
            {location ? (
            <p>
                <MdLocationCity /> {location}
            </p>
            ) : (
            <p>
                <em>Location not available</em>
            </p>
            )}
        </div>
          <div className="col-12 text-center">
            Hireable:{" "}
            {hireable ? (
              <i className="fa fa-check text-success" />
            ) : (
              <i className="fa fa-times-circle text-danger" />
            )}
          </div>
          <div className=" col-4 col-sm-4 col-xs-4 m-2 text-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <p>
            <BsLink45Deg size="1.5em" />
              <a href={websiteUrl} 
              target="_blank" 
              rel="noreferrer">{websiteUrl}</a>
              </p>
              </div>
              <div 
              className=" col-4 col-sm-4 col-xs-4 m-2 text-center"
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
          >
              {twitter_username && (
                <p>
                <FaTwitter/>
                <a 
                href={`https://twitter.com/${twitter_username}`} 
                target="_blank" 
                rel="noreferrer">@{twitter_username}</a></p>
              )}
            </div>
            <div className="col-12 text-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href={html_url} 
            target="_blank" 
            rel="noreferrer" 
            class="btn btn-outline-primary"
            style={{
                display: 'inline-block',
                backgroundColor: "#00256B", 
                borderColor: "#00256B", 
                color: 'white', 
            }}>
            Visit Github Profile
            </a>

            </div>

            
          </div>
        </div> 

      
          <div className="row">
            <div className="col-12 col-md-3 text-center">
              <LuUsers2 size={40} className="text-muted" />
              <div>Followers</div>
              <div className="h5">{followers}</div>
            </div>

            <div className="col-12 col-md-3 text-center">
              <LiaUserSolid size={40} className="text-muted" />
              <div>Following</div>
              <div className="h5">{following}</div>
            </div>

            <div className="col-12 col-md-3 text-center">
              <GoRepo size={40} className="text-muted" />
              <div>Public Repos</div>
              <div className="h5">{public_repos}</div>
            </div>

            <div className="col-12 col-md-3 text-center">
              <GoRepoPush size={40} className="text-muted" />
              <div>Public Gists</div>
              <div className="h5">{public_gists}</div>
            </div>
          </div>


        <RepoList repos={repos} />

    </Fragment>
  );
};

export default User;