import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Input, Label, SubmitButton } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  loginInputId = nanoid();

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  onContactChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Label htmlFor={this.loginInputId}>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={this.loginInputId}
            value={this.state.name}
            onChange={this.onContactChange}
            required
          />
        </Label>
        <Label htmlFor={this.loginInputId}>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={this.loginInputId}
            value={this.state.number}
            onChange={this.onContactChange}
            required
          />
        </Label>

        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
