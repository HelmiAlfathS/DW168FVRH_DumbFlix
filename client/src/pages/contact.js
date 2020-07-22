import React, { Component } from 'react';
import { Form, Modal, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { CoinStack } from '@styled-icons/boxicons-solid';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      data: [],
      name: 'a',
      email: '',
      phone: '',
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/contacts').then((res) => {
      const persons = res.data.data;
      this.setState({
        persons,
      });
    });
  }

  handleChange = (e) => {
    console.log(e.target.name + ' : ' + e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };
    console.log(contact);
    axios.post('http://localhost:5000/api/v1/contact', contact).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    // masukan action login dari redux please --> this.props.login(data)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>
              Fullname:
              <input
                name="name"
                type="text"
                // value={this.state.name ? this.state.name : ''}
                onChange={this.handleChange}
              />
            </label>
            <label style={{ marginTop: 12 }}>
              email:
              <input
                style={{ marginLeft: 24 }}
                name="email"
                type="email"
                // value={this.state.email ? this.state.email : ''}
                onChange={this.handleChange}
              />
            </label>
            <label style={{ marginTop: 12 }}>
              password:
              <input
                name="phone"
                type="text"
                // value={this.state.phone ? this.state.phone : ''}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button style={{ marginTop: 20, marginLeft: 20 }} type="submit">
            Register
          </button>
        </form>

        <h1>POST COntact</h1>
        <ul>
          {this.state.persons.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contact;
