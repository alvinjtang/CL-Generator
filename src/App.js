import React, { Component } from 'react';
import Form from './Form';
import ResearchIntern from './ResearchIntern';
import VolunteerAid from './VolunteerAid';
import Header from './Header';
import './App.css';

const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: `${months[mm - 1]} ${dd}, ${yyyy}`,
      companyName: '---',
      address: '---',
      city: '---',
      role: '',
      position: '',
      intro: '---',
      toast: 'disappear',
    };
  }

  updateState = info => {
    this.setState(info);
  };

  setRole = role => {
    this.setState({ role });
  };

  copyText = () => {
    const text = document.createElement('textarea');
    text.id = 'temp';
    document.body.appendChild(text);
    text.value = document.getElementById('letter').innerText;
    const temp = document.getElementById('temp');
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(text);
    this.setState({ toast: 'appear' });
    setTimeout(() => this.setState({ toast: 'disappear' }), 1500);
  };

  render() {
    return (
      <div id="app">
        <div id="form">
          <Form updateState={this.updateState} props={this.state} />
          <br />
          <div id="form-footer">
            <button className="btn" onClick={this.copyText}>
              Copy
            </button>
            <div id="toast" className={this.state.toast}>
              Copied!
            </div>
          </div>
        </div>
        <div id="letter">
          <Header state={this.state} />
          {this.state.role === 'ResearchIntern' ? (
            <ResearchIntern state={this.state} />
          ) : this.state.role === 'VolunteerAid' ? (
            <VolunteerAid state={this.state} />
          ) : (
            '(Please select a role you are applying for...)'
          )}
        </div>
      </div>
    );
  }
}

export default App;
