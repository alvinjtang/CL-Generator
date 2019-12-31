import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor({ props }) {
    super({ props });
    const { date, team, culture } = props;
    this.state = {
      date,
      companyName: '',
      address: '',
      city: '',
      role: '',
      title: '',
      position: '',
      culture,
      intro: '',
    };
  }

  handleChange = async event => {
    await this.setState({
      [event.target.name]: event.target.value,
    });
    this.props.updateState(this.state);
  };

  render() {
    return (
      <form>
        <div id="btn">
          <input
            className="btn"
            type="button"
            name="role"
            value="Research Intern"
            onClick={this.handleChange}
          />
          <input
            className="btn"
            type="button"
            name="role"
            value="Volunteer Aid"
            onClick={this.handleChange}
          />
        </div>
        <br />
        <label htmlFor="date">Date:</label>
        <input
          className="input"
          name="date"
          type="text"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="companyName">Doctor's' Name:</label>
        <input
          className="input"
          name="companyName"
          type="text"
          value={this.state.companyName}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="title">Doctor's Title:</label>
        <input
          className="input"
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label htmlFor="address">Address:</label>
        <input
          className="input"
          name="address"
          type="text"
          value={this.state.address}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <label htmlFor="intro">Intro:</label>
        <br />
        <textarea
          className="paragraph"
          name="intro"
          type="text"
          value={this.state.intro}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;
