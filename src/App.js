import React, { useState } from "react";
import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';

function App() {

  const [currentPage, setCurrentPage] = useState([]); 

  return (
    <div >
      <Header/>
      <main>
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
