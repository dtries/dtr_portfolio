import React from 'react';
// import logo from './logo.svg';
import { Row, Col, Card, Icon, Navbar,
NavItem } from 'react-materialize';
import './App.css';

function App() {
  return (
    <div className="App">

<Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="#">Logo</a>}
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <NavItem href="">
    Getting started
  </NavItem>
  <NavItem href="components.html">
    Components
  </NavItem>
</Navbar>

      <header className="App-header">
        <img src="/images/Stylized_Profile2.png" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="container">
      <Row>
          <Col
            m={6}
            s={12}
          >
            <Card
              actions={[
              <a key="1" href="/">This is a link</a>,
              <a key="2" href="/">This is a link</a>
            ]}
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            title="Card title"
          >
            I am a very simple card.
          </Card>
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default App;
