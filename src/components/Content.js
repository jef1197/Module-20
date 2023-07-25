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
    <section>
      {renderPage()}
    </section>
    );
  }

  export default Content;
