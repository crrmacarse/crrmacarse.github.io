import React, { useEffect, useState } from 'react';
import isEmpty from 'lodash/isEmpty';

const GistsPage = () => {
  const [gists, setGists] = useState([]);

  const fetchGists = async () => {
    const response = await fetch('https://api.github.com/users/crrmacarse/gists', {
      method: 'GET',
    });
    const data = await response.json();

    setGists(data);
  };

  useEffect(() => { fetchGists(); }, []);

  return (
    <div>
      <div className="title">
        <h1 className="text-5xl">Gists</h1>
        <a href="https://github.com/crrmacarse">@crrmacarse</a>
        <a href="https://developer.github.com/v3/gists/">Github Gists API</a>
      </div>
      <div className="content">
        <ul>
          {isEmpty(gists) && <p>Fetching...</p>}
          {gists.map((gist) => (
            <li key={gist.id}>
              <a href={gist.html_url} target="_blank" rel="noopener noreferrer">{gist.description}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GistsPage;
