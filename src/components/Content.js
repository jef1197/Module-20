import React from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

function Content(props) {
  
  const renderPage = () => {
    if (props.renderPage === 'About Me') {
      return <About />
    } else if (props.renderPage === 'Portfolio') {
      return <Portfolio />
    } else if (props.renderPage === 'Home') {
      return <Home />
    } else if (props.renderPage === 'Resume') {
      return <Resume />
    }else if (props.renderPage === 'Contact') {
      return <Contact />
    }
  }
  
  return (
    <section className='content-container'>
      {props.renderPage !== 'Home' && 
        <h1>{props.renderPage}</h1>
      }
      {renderPage()}
    </section>
    );
  }

  export default Content;
