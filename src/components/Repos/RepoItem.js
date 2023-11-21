import { FaLink, FaGitAlt } from 'react-icons/fa';
import {BiGitCompare} from "react-icons/bi";
import {AiOutlineStar,AiOutlineEye} from "react-icons/ai";
import PropTypes from 'prop-types';

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div style={{
      marginBottom: '0.5rem', 
      borderRadius: '0.25rem', 
      backgroundColor: '#f7f7f7', 
      border: '1px solid #e0e0e0', 
      transition: 'all 0.3s'}}>
      <div style={{ padding: '1rem' }}>
      <h3 style={{ 
        marginBottom: '0.5rem', 
        fontWeight: 'bold', 
        fontSize: '1.02rem' }}>
      <a href={html_url} style={{ 
        textDecoration: 'none', 
        color: '#034694.' }}>
      <FaLink style={{ verticalAlign: 'middle', marginRight: '0.25rem' }} />
      {name}
      </a>
      </h3>

        <p style={{marginBottom: '1rem'}}
        >
        {description}
        </p>
        <div>
          <span 
          style={{
            marginRight: '0.5rem', 
            backgroundColor: '#f7f7f7', 
            color: '#034694.', 
            borderRadius: '0.25rem', 
            padding: '0.25rem 0.5rem'}}>
            <AiOutlineEye
            style={{
            marginRight: '0.3rem'
            }} /> 
            {watchers_count}
          </span>
          <span style={{
            marginRight: '0.5rem', 
            backgroundColor: '#f7f7f7', 
            color: '#034694.', 
            borderRadius: '0.25rem', 
            padding: '0.25rem 0.5rem'}}>
            <AiOutlineStar style={{
              marginRight: '0.3rem'}} 
            /> {stargazers_count}
          </span>
          <span style={{
            marginRight: '0.5rem', 
            backgroundColor: '#f7f7f7', 
            color: '#034694.', 
            borderRadius: '0.25rem', 
            padding: '0.25rem 0.5rem'}}>
            <BiGitCompare style={{marginRight: '0.5rem'}} /> 
            {open_issues}
          </span>
          <span style={{
            marginRight: '0.5rem', 
            backgroundColor: '#f7f7f7', 
            color: '#034694.', 
            borderRadius: '0.25rem', 
            padding: '0.25rem 0.5rem'}}>
            <FaGitAlt style={{
            marginRight: '0.3rem'}} /> {forks}
          </span>
        </div>
      </div>
    </div>
);
  }

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;







