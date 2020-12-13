import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="subject">Subject:</label>
        <br />
        <input type="text" id="subject" name="subject" />
        <br />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea name="message" defaultValue={""} />
        <br />
        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default Form;