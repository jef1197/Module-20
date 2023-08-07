import React, { useState } from 'react';
import Project from './Project';

function Portfolio() {
  
  const [projects] = useState([
    {
      name: 'Weather App',
      link: 'https://oguesweather.netlify.app',
      repo: 'https://github.com/jef1197/odin-weather',
      pic: '1'
    },
    {
      name: 'Rock - Paper - Scissors',
      link: 'https://oguesrps.netlify.app',
      repo: 'https://github.com/jef1197/rock-paper-scissors',
      pic: '2'
    },
    {
      name: 'Memory Game',
      link: 'https://oguesmemory.netlify.app',
      repo: 'https://github.com/jef1197/memory-game',
      pic: '3'
    },
    {
      name: 'Fake Shop Site',
      link: 'https://ogues-shopping-cart.netlify.app',
      repo: 'https://github.com/jef1197/react-routes',
      pic: '4'
    },
    {
      name: 'Next City',
      link: 'https://kimmh891223.github.io/next_city',
      repo: 'https://github.com/kimmh891223/next_city',
      pic: '4'
    },
    {
      name: 'Tasty Bytes',
      link: 'https://tastybyts-1e5618d2a801.herokuapp.com',
      repo: 'https://github.com/kemcclen/TastyBytes',
      pic: '4'
    }
  ])
  
  return (
    <section className='portfolio-container'>
      {projects.map((project, id) => {
        return (<Project project={project} key={id}/>)
      })}
    </section>
    );
  }

  export default Portfolio;
