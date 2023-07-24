import React, { useState } from 'react';
import Project from './project';

function Portfolio() {
  
  const [projects] = useState([
    {
      name: 'first',
      link: '',
      repo:'',
      pic: ''
    },
    {
      name: 'second',
      link: '',
      repo:'',
      pic: ''
    },
    {
      name: 'Third',
      link: '',
      repo:'',
      pic: ''
    },
    {
      name: 'Fourth',
      link: '',
      repo:'',
      pic: ''
    }
  ])
  
  return (
    <section>
      {projects.map((project, id) => {
        return (<Project project={project} key={id}/>)
      })}
    </section>
    );
  }

  export default Portfolio;
