import React from 'react';

function Nav(props) {
  
  
  return (
    <nav>
      Hello
      <ul>
        {props.page.map((page, id) => {
          return (
            <li key={id}>
              <a href='#' onClick={() => props.setCurrentPage(page)}>{page}</a>
            </li>
          )
        })}
      </ul>
    </nav>
    );
  }

  export default Nav;
