import React, { Component } from 'react';
import Entry from './Entry';

import { SERVER_ADDRESS } from '../config.js';

class App extends Component {
  constructor() {
    super();
    this.state = { userInput: null, data: null };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(event) {
    const newUserInput = event.target.value;
    if (newUserInput === '') {
      // reset state
      this.setState({ userInput: newUserInput, data: null, loading: false });
    } else {
      // set to loading
      this.setState({ userInput: newUserInput, data: null, loading: true });
      const url = `${SERVER_ADDRESS}/eestikeelt?term=${newUserInput}`;

      $.getJSON(url)
        .done((response) => {
          // this.state is not updated if the userInput already has a new value by the time a response is returned
          // if userInput has a new value, a new request must already have sent. We'll wait for the newest resoponse.
          if (this.state.userInput === newUserInput) {
            this.setState({ data: response });
          }
        })
        .fail((jqXHR, textStatus, error) => console.log(error));
    }
  }

  render() {
    const input = (
      <input
        autoFocus
        placeholder="search for e.g. woman, car or man"
        type="text"
        value={this.state.value}
        onChange={this.handleUserInput}
      />
    );

    if (this.state.data === null) {
      if (this.state.loading) {
        return (
          <div className="app">
            {input}
            <div className="loading">Loading...</div>
          </div>
        );
      }
      return (
        <div className="app">
          {input}
        </div>
      );
    }

    const results = this.state.data.map(x => (
      <Entry
        englTerm={x.englTerm}
        estonianTermsAsList={x.list}
        key={x.englTerm}
      />
    ));

    return (
      <div className="app">
        {input}
        {results}
      </div>
    );
  }
}

export default App;
