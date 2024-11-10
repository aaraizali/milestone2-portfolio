import { useState, useEffect } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('https://formspree.io/f/xanyjnaz', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending message. Please try again.');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setStatus('');
    }
  }, []);

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail} method="POST">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;
