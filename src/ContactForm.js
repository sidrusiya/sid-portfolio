import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button,  Form, FormGroup, Label, Input } from 'reactstrap'
import './ContactForm.css'
class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    if(name==="" || email==="" || subject==="" || message==="")
    {
      return;
    }
    let templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
     }
     emailjs.send(
      'service_sfbtr67',
      'template_x4o2vy7',
       templateParams,
      'user_l8kPNRJPitlykYRZlpyOH'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <div className="cf" id="contact">
          <h1 className="p-heading1">Contact</h1>
          <Form onSubmit={this.handleSubmit.bind(this)} className="fcon">
            <div id="div1">
            <FormGroup controlId="formBasicEmail">
              <div className="fg">
              <Label className="text-muted"></Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email*"
              />
              </div>
            </FormGroup>
            <FormGroup controlId="formBasicName">
            <div className="fg">
              <Label className="text-muted"></Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name*"
              />
            </div>
            </FormGroup>
            <FormGroup controlId="formBasicSubject">
            <div className="fg">
              <Label className="text-muted"></Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject*"
              />
            </div>
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
            <div className="fg">
              <Label className="text-muted"></Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                rows="10"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                placeholder="Message*"
              />
            </div>
            </FormGroup>
            <p>All * marked are compulsory to fill.</p>
            <Button variant="primary" type="submit" className="btnc" id="bt">
              Submit
            </Button>
            </div>
          </Form>
      </div>
    )
  }
}
export default ContactForm
