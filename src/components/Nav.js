import React from 'react';

function Nav(props) {
  
  
  return (
    <nav>
      <ul>
        {props.page.map((page, id) => {
          return (
            <li key={id}>
              <p className="point" onClick={() => props.setCurrentPage(page)}>{page}</p>
            </li>
          )
        })}
      </ul>
    </nav>
    );
  }

  export default Nav;
