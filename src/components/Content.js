import React from 'react';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Content(props) {
  
  const renderPage = () => {
    if (props.renderPage === 'About Me') {
      return <About />
    } else if (props.renderPage === 'Portfolio') {
      return <Portfolio />
    } else if (props.renderPage === 'Contact') {
      return <Contact />
    } else if (props.renderPage === 'Resume') {
      return <Resume />
    }
  }
  
  return (
    <section className='content-container'>
      <h1>{props.renderPage}</h1>
      {renderPage()}
    </section>
    );
  }

  export default Content;
