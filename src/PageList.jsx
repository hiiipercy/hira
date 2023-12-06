// PageList.js
import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const PageList = ({ routes }) => {
  const { url } = useMatch();

  return (
    <div>
      <ul>
        {routes.map(route => (
          <li key={route.path}>
            <Link to={`${url}${route.path}`}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageList;
