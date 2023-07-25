import React, { useState } from "react";
import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';

function App() {

  const [page] = useState(['About Me', 'Portfolio', 'Contact', 'Resume'])

  const [currentPage, setCurrentPage] = useState(page[0]); 

  return (
    <div >
      <Header/>
      <main>
        <Content renderPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
