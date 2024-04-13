import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0wkrjys",
        "template_22ttpki",
        form.current,
        "SA2eE8286jhpU3eDJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={`${props.darkMode && "dark"}`}>
      <div name="contact" className="max-w-[600px] mx-auto mt-40 mb-20 px-6">
        <h1 className="text-center text-lightTxt dark:text-darkTxt text-3xl mb-10">
          Contact
        </h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <p className="text-lightTxt dark:text-darkTxt mb-2">Name</p>
          <input
            type="text"
            name="user_name"
            className="border border-lightTxt dark:border-darkTxt p-4 rounded-tr-lg rounded-bl-lg dark:bg-darkBg dark:text-darkTxt"
            placeholder="Mihai"
          />
          <p className="text-lightTxt dark:text-darkTxt mb-2 mt-6">Email</p>
          <input
            type="email"
            name="user_email"
            className="border border-lightTxt dark:border-darkTxt p-4 rounded-tr-lg rounded-bl-lg dark:bg-darkBg dark:text-darkTxt"
            placeholder="example@gmail.com"
          />
          <p className="text-lightTxt dark:text-darkTxt mb-2 mt-6">Message</p>
          <textarea
            name="message"
            className="border border-lightTxt dark:border-darkTxt p-4 h-[200px] rounded-tr-lg rounded-bl-lg dark:bg-darkBg dark:text-darkTxt"
            placeholder="Type something..."
          />
          <div className="flex justify-end mt-6">
            <input
              type="submit"
              value="Send"
              className="blue-600 w-[120px] h-[40px] sm:w-[200px] sm:h-[50px] text-darkTxt cursor-pointer bg-darkBg dark:bg-blue-700 duration-300"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
