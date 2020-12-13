import React from "react";
import Form from "./Form";

class MailModal extends React.Component {
  render() {
    return (
      <div id="mailModal" className="modal">
        <span className="close">Close</span>
        <Form></Form>
      </div>
    );
  }
}

export default MailModal;