/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
//email
import * as emailjs from "@emailjs/browser";
// validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Contact = () => {
  const form = useRef();

  //keys
  const KEY_1 = import.meta.env.VITE_KEY_1;
  const KEY_2 = import.meta.env.VITE_KEY_2;
  const KEY_3 = import.meta.env.VITE_KEY_3;

  //states
  const [showAlert, setShowAlert] = useState(false);
  const [emailContent, setEmailContent] = useState("");
  const [sentEmail, setSentEmail] = useState(false);

  const schema = yup.object().shape({
    user_name: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .required("Required"),
    user_email: yup
      .string()
      .email("Invalid email address")
      .matches(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Invalid email address"
      )
      .required("Required"),
    message: yup.string().required("Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSend = async () => {
    try {
      const templateParams = {
        user_name: register.user_name,
        user_email: register.user_email,
        message: register.message,
      };

      await emailjs.send(KEY_1, KEY_2, templateParams, KEY_3);

      setEmailContent("Email sent successfully");
      setSentEmail(true);
      setShowAlert(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [showAlert]);

  return (
    <section id="#contact" className=" pb-16">
      <div className="container">
        <div className=" md:flex justify-between items-center">
          {/* map */}
          <div className="w-full md:w-1/2  h-[270px] sm:h-[400px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.685884843263!2d21.687629276512503!3d48.88326437133556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ec8937ab5e13f%3A0x8f50adacfff1e8a9!2sS%C3%ADdlisko%20Juh%201064%2F49%2C%20093%2001%20Vranov%20nad%20Top%C4%BEou!5e0!3m2!1ssk!2ssk!4v1692705371576!5m2!1ssk!2ssk"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* ALERT */}
          {showAlert && <div className="f">Message sent.</div>}
          {/* form */}
          <div className="w-full mt-8 md:mt-0 md:w-1/2  sm:h-[400px] lg:flex items-center bg-[#16161616] px-4 lg:px-8 py-8">
            <form
              ref={form}
              onSubmit={handleSubmit(handleSend)}
              noValidate
              className="w-full"
            >
              <div className="mb-5">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  {...register("user_name")}
                  className={`w-full p-3 focus:outline-none rounded-[5px] ${
                    errors.user_name ? "border-red-500" : ""
                  }`}
                />
                {errors.user_name && (
                  <p className="text-red-500 mt-1">
                    {errors.user_name.message}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="user_email"
                  placeholder="E-mail"
                  {...register("user_email")}
                  className={`w-full p-3 focus:outline-none rounded-[5px] ${
                    errors.user_email ? "border-red-500" : ""
                  }`}
                />
                {errors.user_email && (
                  <p className="text-red-500 mt-1">
                    {errors.user_email.message}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <textarea
                  name="message"
                  placeholder="Message"
                  {...register("message")}
                  rows={3}
                  className={`w-full p-3 focus:outline-none rounded-[5px] ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 mt-1">{errors.message.message}</p>
                )}
              </div>
              <button
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-white
               hover:text-smallTextColor ease-in duration-300"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
