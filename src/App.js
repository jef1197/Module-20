import React, { useState } from "react";
import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';
import Nav from "./components/Nav";
import './App.css'

function App() {

  const [page] = useState(['Home', 'About Me', 'Portfolio', 'Contact'])

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
      {currentPage !== 'Home' &&
        <Footer/>
      }
    </div>
  );
}

export default App;
