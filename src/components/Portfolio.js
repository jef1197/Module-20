import React, { useState } from 'react';
import Project from './Project';

function Portfolio() {
  
  const [projects] = useState([
    {
      name: 'first',
      link: '1',
      repo:'1',
      pic: '1'
    },
    {
      name: 'second',
      link: '2',
      repo:'2',
      pic: '2'
    },
    {
      name: 'Third',
      link: '3',
      repo:'3',
      pic: '3'
    },
    {
      name: 'Fourth',
      link: '4',
      repo:'4',
      pic: '4'
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
