import React, { useState } from 'react';
import '../App.css'; // Make sure this points to your main stylesheet

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const sendMessage = () => {
    alert("Hey, this is a non-functional button. It's only for show and tell.");
    closeModal(); // Close the modal after showing the alert
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>Thanks for visiting our site! Feel free to reach out to us anytime.</p>
      <div className="form-container">
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="Your Phone Number" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message"></textarea>
          </div>

          <button type="button" onClick={openModal} className="send-button">Send</button>
        </form>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <p>"Hey, this is a non-functional button. It's only for show and tell."</p>
            <button onClick={closeModal} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
