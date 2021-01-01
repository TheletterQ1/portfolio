import React, { useState } from "react";
import "./App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });
  const [userInfo, setUserInfo] = useState();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInfo(formData);
    console.log(userInfo);
  };

  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <br />
      <p>
        Please if you have any reviews, critique, inquiries,and of course....
        compliments of my work, please feel free to share!
        <br />
        (constructive criticism is always welcome!)
      </p>
      <br />
      <p>
        Please submit your information where asked, leave your comments below
        and I'll get back to you as soon as possible
      </p>
      <form>
        <input
          class="input"
          id="user"
          type="text"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          class="input"
          id="email"
          type="text"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <textarea
          class="input"
          id="words"
          type=""
          placeholder="comments here"
          value={formData.comments}
          onChange={handleChange}
        />
        <button class="contact-button" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default Contact;