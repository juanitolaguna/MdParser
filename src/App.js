import './App.css';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

import React, { Component } from 'react';
import InputField from './components/InputField';
import OutputField from './components/OutputField';

//import data
import list from './files/data.js';

let md = require('markdown-it')();
// let handlebars = require('handlebars');


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputTerm: list,
    }
  }

  onDismiss = (id) => {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  onInputChange = (event) => {
    this.setState({ inputTerm: md.render(event.target.value) });
  }

  dummyMethod = (event) => {
    return;
  }


  render() {

    const { author, title, mdExample } = this.state.inputTerm;

    const authorStr = Object.keys({ author })[0];
    const titleStr = Object.keys({ title })[0];
    const mdExampleStr = Object.keys({ mdExample })[0];

    return (
      <div className="App">
        <br />
        <div className="row">
          <div className="col s6 input">
            <form className="col s12">

              <div className="row">
                <div className="col s6">
                  <InputField
                    fieldName={authorStr}
                    value={author}
                    action={this.dummyMethod}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col s6">
                  <InputField
                    fieldName={titleStr}
                    value={title}
                    action={this.dummyMethod}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <InputField
                    fieldName={mdExampleStr}
                    value={mdExample}
                    action={this.onInputChange}
                  />
                </div>
              </div>

            </form>
          </div>

          <div className="col s6 output">
            <OutputField output={this.state.inputTerm}/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;