import React from 'react';
import Overview from './Overview.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Overview />
      </div>
    );
  }
};