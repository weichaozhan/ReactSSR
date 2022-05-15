import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({
  children
}) => {

  return (
    <div>
      <ol>
        <li>
          <Link to="/">home</Link>
        </li>

        <li>
          <Link to="/test">test</Link>
        </li>
      </ol>
      {children}
    </div>
  )
};

export default Nav;
