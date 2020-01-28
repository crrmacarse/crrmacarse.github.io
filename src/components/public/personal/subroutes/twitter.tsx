import React, { useEffect, useState } from 'react';

const TwitterPage = () => {
  const [gists, setGists] = useState([]);

  const fetchGists = async () => {
    const response = await fetch('https://api.twitter.com/1.1/trends/place.json?id=1', {
      method: 'GET',
    });
    const data = await response.json();

    setGists(data);
  };

  useEffect(() => { fetchGists(); }, []);

  return (
    <div>
      <div className="title">
        <h1 className="text-5xl">Playing around with Twitter</h1>
        <a href="https://twitter.com/pablongbuhaymo" className="text-sm font-bold">Follow me on Twitter</a>
        <a href="https://developer.twitter.com/en/docs" className="text-sm font-bold">Twitter API Docs</a>
      </div>
      <div className="content">
        <ul>
          {gists.map((gist) => (
            <li key={gist.id}>{gist.id}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TwitterPage;
