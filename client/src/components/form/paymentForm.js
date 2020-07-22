import React, { Component } from 'react';
import { Form, Row, Container, Col } from 'react-bootstrap';
import Button from '../button';
import { createTransaction } from '../../redux/actions/transaction';
import { login } from '../../redux/actions/auth';
import { connect } from 'react-redux';

import './form.css';

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId: this.props.auth.data.id,
      attachment: '',
    };
  }

  handleChangeInput = (e) => {
    console.log(e.target.name + ' : ' + e.target.value);
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    const dataPayment = {
      UserId: this.state.UserId,
      attachment: this.state.attachment,
    };
    console.log(dataPayment);
    this.props.createTransaction(dataPayment);
    // this.setState({ transaksi: {} });
  };
  // handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const dataPayment = {
  //     UserId: this.state.UserId,
  //     attachement: this.state.attachment,
  //   };
  //   console.log(dataPayment);
  //   this.props.createTransaction(dataPayment);
  //   // this.setState({ transaksi: {} });
  // };

  render() {
    console.log(this.props);
    return (
      <div className="half">
        <Container className=" mt-5 text-center">
          <div className="layanan text-white ">
            <h1 className="text-white"> Premium </h1>
            <p className="">
              Bayar Sekarang dan nikmati streaming kekinian dari{' '}
              <span className="font-weight-bold" style={{ color: '#E50914' }}>
                DUMBFLIX
              </span>
            </p>
            <p>
              <span className="font-weight-bold" style={{ color: '#E50914' }}>
                DUMBFLIX
              </span>{' '}
              : 098177881
            </p>
          </div>
          <div className="small-form">
            <Form>
              {/* <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="input your account number"
                  name=""
                />
              </Form.Group> */}
              <Form.File id="formcheck-api-custom" custom className="mb-3">
                <Form.File.Input
                  isValid
                  name="attachment"
                  onChange={this.handleChangeInput}
                />
                <Form.File.Label
                  data-browse="File"
                  className="text-white bg-dark border-white"
                  // name="attachement"
                  // onChange={this.handleChangeInput}
                >
                  Upload your transaction
                </Form.File.Label>
              </Form.File>
            </Form>
            <div className="stretch" onClick={this.handleSubmit}>
              <Button primary> Send </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    transaction: state.transactionReducer,
    auth: state.authReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createTransaction: (data) => dispatch(createTransaction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
