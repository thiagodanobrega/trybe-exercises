import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }
  render() {
    return (
      <form>
        <fieldset>
          <label>
            Nome
            <input
              name="name"
              type="text"
              value={this.state.handleChange}
              onChange={this.handleChange}
              maxLength="40"
              required
              />
          </label>
          <label>
            Email
            <input
              name="name"
              type="email"
              value={this.state.handleChange}
              onChange={this.handleChange}
              maxLength="50"
              required
              />
          </label>
        </fieldset>
      </form>
    )
  }
}

export default Form;