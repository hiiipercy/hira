import React from "react";
// Make sure to run npm install @formspree/react
import { useForm, ValidationError } from '@formspree/react';

export default function Contact(){
  const [state, handleSubmit] = useForm("xzbllqly");
  if (state.succeeded) {
    
      return <div className="contact-box" >
      <h2>Thanks for Contact!</h2>
      <div className="home-btn contact-btn">
      <a href="/" className="btn">Ok </a>
      </div>
      </div>;
  }

  return (
  <section className="contact" id="contact">
      <h2>Contact</h2>
      <div className="contact_body">
    <form className="contact_form" onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter name"
          required
        />
        <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter email address"
          required
        />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

        <textarea
          id="message"
          name="message"
          placeholder="Enter message"
          cols="5"
          rows="6"
          required
        />
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      <div className="home-btn contact-btn">
      <button className="btn" type="submit" disabled={state.submitting} >Send</button>
      </div>
    </form>
    </div>
    </section>
  );
};
