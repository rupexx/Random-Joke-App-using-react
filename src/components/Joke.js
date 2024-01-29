import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomJokeApp = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get('https://official-joke-api.appspot.com/jokes/random');
        setJoke(response.data.setup + ' ' + response.data.punchline);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching joke:', error);
        setJoke('Error fetching joke. Please try again.');
        setLoading(false);
      }
    };

    fetchJoke();
  }, []);

  return (
    <div>
      <h1 className="joke-wrapper">Random Joke App</h1>
      {loading ? (
        <p className="joke-wrapper">Loading...</p>
      ) : (
        <p className="joke-wrapper">{joke}</p>
      )}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button className="button" onClick={() => window.location.reload()}>Get Another Joke</button>
      </div>
    </div>
  );
};

export default RandomJokeApp;