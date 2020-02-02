import React, { useEffect, useState } from 'react';
import isEmpty from 'lodash/isEmpty';

const SUBREDDITS_PREFFERED = ['all', 'askreddit', 'showerthoughts', 'movies', 'wtf', 'dota2', 'alasjuicy', 'underlords'];

const RedditPage = () => {
  const [selected, setSelected] = useState('all');
  const [subreddits, setSubreddits] = useState([]);

  const fetchTrendingSubreddits = async (subreddit: string) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`, {
      method: 'GET',
    });

    const { data } = await response.json();
    setSubreddits(data.children);
  };

  useEffect(() => {
    setSubreddits([]);
    fetchTrendingSubreddits(selected);
  }, [selected]);

  const renderSelectSubreddit = (
    <div className="flex flex-wrap mb-5">
      {SUBREDDITS_PREFFERED.map((sub, key) => (
        <div
          className={`mr-2 font-bold ${sub === selected && 'text-orange-400'}`}
          role="button"
          tabIndex={key}
          onClick={() => setSelected(sub)}
          onKeyDown={() => setSelected(sub)}
        >
          {`r/${sub}`}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="title">
        <h1 className="text-5xl">Maybe some memes could make your day.</h1>
        <a href="https://www.reddit.com/dev/api/">Reddit API</a>
      </div>
      <div className="content">
        {renderSelectSubreddit}
        <ul className="fetched-content">
          {isEmpty(subreddits) && <p>Fetching...</p>}
          {subreddits.map(({ data }, key) => (
            <li>
              <a key={key} href={`http://www.reddit.com/${data.permalink}`} target="_blank" rel="noopener noreferrer">{data.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RedditPage;
