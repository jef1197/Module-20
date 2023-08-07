import React from 'react';

function Contact() {
  
  
  return (
    <section className='contact-container'>
      <form>
        <label htmlFor='name'>Name: </label>
        <input type="text" name="name" required />
        <label htmlFor='email'>Email: </label>
        <input type="email" name="email" required/>
        <label htmlFor='message'>Message: </label>
        <textarea required></textarea>
        <button type="submit" value="Submit">Send</button>
      </form>
    </section>
    );
  }

  export default Contact;
