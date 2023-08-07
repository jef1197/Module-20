import React from 'react';

function Project({ project }) {
  
  const { name, link, repo, pic} = project
  return  (
    <section className='portfolio-card'>
      <img src={pic} alt={`website homepage ` + name}/>
      <div className='portfolio-text'>
        <h3>{name}</h3>
        <a target='_blank' rel='noreferrer' href={link}>Link to Site</a>
        <a target='_blank' rel='noreferrer' href={repo}>Link to Repo</a>
      </div>
    </section>
    );
  }

  export default Project;
