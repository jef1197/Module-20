import React from 'react';

function Project({ project }) {
  
  const { name, link, repo, pic} = project
  return  (
    <section>
      <img src={pic}/>
      <h3>{name}</h3>
      <a href={link}>Link to Site</a>
      <a href={repo}>Link to Repo</a>
    </section>
    );
  }

  export default Project;
