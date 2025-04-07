import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {init, sendForm} from '@emailjs/browser';

const ContactContainer = styled.section`
  padding: 80px 20px;
  background-color: #f7fafc;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #333;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
  height: 150px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(()=> {
    init('iLv-cGVEhWWQ_7MP3');
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendForm('service_32v7xai', 'template_kb9knoq', e.target, 'iLv-cGVEhWWQ_7MP3')
        .then(
      (result) => {
        console.log('Email envoyé : ', result.text);
       
      },
      (error) => {
        console.log('Erreur d\'envoi : ', error.text);
        alert('Désolé, il y a eu un problème avec l\'envoi de votre message. Essayez à nouveau plus tard.');
      }
    );
    setFormData({ name: '', email: '', message: '' });
    alert('Merci pour votre message!');
  };

  return (
    <ContactContainer id="contact">
      <h2>Contactez-moi</h2>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextAreaField
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit">Envoyer</SubmitButton>
        </form>
      </FormWrapper>
    </ContactContainer>
  );
};

export default Contact;
