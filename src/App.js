import React, { useState } from "react";
import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';
import Nav from "./components/Nav";
import './App.css'

function App() {

  const [page] = useState(['About Me', 'Portfolio', 'Contact', 'Resume'])

  const [currentPage, setCurrentPage] = useState(page[0]); 

  return (
    <div >
      <Header>
        <Nav page={page} currentPage={currentPage} setCurrentPage={setCurrentPage} >
        </Nav>
      </Header>      
      <main>
        <Content renderPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
