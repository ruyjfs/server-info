import React from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';
import dataj3 from './data/j3.json';
import dataTatu from './data/tatu.json';

export default () => {
  // console.log(process.env.NODE_ENV, process.env.APP_NAME);
  const data = false ? dataTatu : dataj3;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data.name}</p>
        {data.list.map((item: any) => (
          <Link href={item.url}>{item.name}</Link>
        ))}
      </header>
    </div>
  );
};

const Link = styled.a.attrs({ target: '_blank' })`
  color: #61dafb;
  text-decoration: inherit;
  margin: 10px;
`;
