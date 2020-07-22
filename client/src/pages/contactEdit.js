import React, { Component } from 'react';
import { Form, Modal, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { addContact } from '../redux/actions/contact';
import { CoinStack } from '@styled-icons/boxicons-solid';

class ContactEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {},
      persons: [],
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
    const { contact } = this.state;
    this.setState({
      contact: { ...contact, [e.target.name]: e.target.value },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    console.log(this.state.contact);
    await this.props.addContact(this.state.contact);
    this.setState({ film: {} });
    // masukan action login dari redux please --> this.props.login(data)
  };

  render() {
    const { data, loading, error } = this.props; //state initial reducer
    const { contact } = this.state;
    return (
      <>
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
                  value={contact.name ? contact.name : ''}
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
                  value={contact.email ? contact.email : ''}
                />
              </label>
              <label style={{ marginTop: 12 }}>
                password:
                <input
                  name="phone"
                  type="text"
                  // value={this.state.phone ? this.state.phone : ''}
                  onChange={this.handleChange}
                  value={contact.phone ? contact.phone : ''}
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, loading, error } = state.addContact;
  return {
    data,
    loading,
    error,
  };
};
export default connect(mapStateToProps, {
  addContact,
})(ContactEdit);
