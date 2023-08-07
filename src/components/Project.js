import React from 'react';
import weatherImg from '../assets/website/weather.png';
import rpsImg from '../assets/website/rps.png'
import memoryImg from '../assets/website/memory.png'
import shopImg from '../assets/website/shop.png'
import cityImg from '../assets/website/nextCity.png'
import tastyImg from '../assets/website/tasty.png'

function Project({ project }) {
  const { name, link, repo, pic} = project

  const renderPic = () => {
    switch(pic) {
      case 'weather':
        return weatherImg;
      case 'rps':
        return rpsImg;
      case 'memory':
        return memoryImg;
      case 'shop':
        return shopImg;
      case 'city':
        return cityImg;
      case 'tasty':
        return tastyImg;
      default:
        break;
    }
  }
  return  (
    <section className='portfolio-card'>
      <div className='portfolio-img'>
        <img src={renderPic()} alt={`website homepage ` + name}/>
      </div>
      <div className='portfolio-text'>
        <h3>{name}</h3>
        <a target='_blank' rel='noreferrer' href={link}>Link to Site</a>
        <a target='_blank' rel='noreferrer' href={repo}>Link to Repo</a>
      </div>
    </section>
    );
  }

  export default Project;
