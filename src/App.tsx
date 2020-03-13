import React from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TATU</p>
        <Link href="http://10.68.106.111:9067/projects?sort=-analysis_date">
          Sonar 6.7
        </Link>
        <Link href="http://10.68.106.111:9090/">
          SIPC - Sistema integrado de prestação de econtas
        </Link>
        <Link href="http://10.68.106.111:8080/">
          SISBAPI - Amigo da Pessoa Idosa
        </Link>
        <Link href="http://10.68.106.111:8014/">
          SLI - Lei de Incentivo ao Esporte [SPRINT-14]
        </Link>
        <Link href="http://10.68.106.111:8015/">
          SLI - Lei de Incentivo ao Esporte [SPRINT-15]
        </Link>
        {/* <Link href="http://10.68.106.111:9090/">
          SLI - Lei de Incentivo ao Esporte
        </Link> */}
        <Link href="http://10.68.106.111:9085/">Pátria Voluntária</Link>
      </header>
    </div>
  );
};

const Link = styled.a.attrs({ target: '_blank' })`
  color: #61dafb;
  text-decoration: inherit;
  margin: 10px;
`;
