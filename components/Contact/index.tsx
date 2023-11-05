"use client"

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import NewsLatterBox from "./NewsLatterBox";
import { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_USER_ID } from '../../config.js'; // Import your configuration

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const emailServiceId = process.env.EMAIL_SERVICE_ID;
  const emailTemplateId = process.env.EMAIL_TEMPLATE_ID;
  const emailUserId = process.env.EMAIL_USER_ID;
  


  const sendEmail = async (e) => {
    e.preventDefault();
  
    if (name === '' || email === '' || message === '' || phoneNumber === '') {
      setContactMessage('Complete the form before sending');
    } else {
      try {
        const emailData = {
          inputName: name,
          inputPhoneNumber: phoneNumber,
          inputEmail: email,
          inputMessage: message,
        };
  
        await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, emailData, EMAIL_USER_ID);
        setContactMessage('Message sent successfully');
        setName('');
        setEmail('');
        setMessage('');
        setPhoneNumber('');
      } catch (error) {
        console.error(error);
        setContactMessage('Oops! Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Contact us below.
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                We will get back to you ASAP.
              </p>
              <form onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus-border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus-border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus-border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Enter your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus-border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover-bg-opacity-80 hover-shadow-signUp" type="submit">
                    Submit
                  </button>
                </div>
              </form>
              {contactMessage && (
                <div className={`mt-4 text-sm ${contactMessage.includes('Oops') ? 'text-red-500' : 'text-green-500'}`}>
                  {contactMessage}
                </div>
              )}
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
