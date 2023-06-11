/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { Alert,  Row, Col, Form, Button } from "react-bootstrap";
//email
import* as emailjs from "@emailjs/browser";
//formik+yup
import {useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const form = useRef();

  //keys
  const KEY_1 = import.meta.env.VITE_KEY_1
  const KEY_2 = import.meta.env.VITE_KEY_2
  const KEY_3 = import.meta.env.VITE_KEY_3

  //states
  const [showAlert, setShowAlert] = useState(false);
  const [emailContent, setEmailContent] = useState("");
  const [sentEmail, setSentEmail] = useState(false);

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      user_name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .matches(
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Invalid email address"
          )
        .required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const templateParams = {
          user_name: values.user_name,
          user_email: values.user_email,
          message: values.message,
        };

        await emailjs.send(
          KEY_1,
          KEY_2,
          templateParams,
          KEY_3
        );

        setEmailContent("Email sent successfully");
        setSentEmail(true);
        setShowAlert(true);

        resetForm();
      } catch (error) {
        console.error(error);
      }

      setSubmitting(false);
    },
  });

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [showAlert]);

  return (
<div className='vh-100 d-flex flex-column justify-content-center' style={{marginBottom: "45px"}}>
      <Row className="d-flex justify-content-center align-items-center" >
        <Col
          xs={12}
          sm={12}
          md={7}
        >
         <h5 className="display-5 fs-1">Tell me</h5>
           {showAlert && (
            <Alert className="fade show" variant="success">
              Message sent.
            </Alert>
          )} 
          <Form ref={form} onSubmit={formik.handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control
       style={{backgroundColor: "#2bffaa"}}
      type="text"
      name="user_name"
      placeholder="Name"
      value={formik.values.user_name}
      onChange={formik.handleChange}
      className={formik.touched.user_name && formik.errors.user_name ? 'form-control is-invalid' : 'form-control'}
    />
    {formik.touched.user_name && formik.errors.user_name ? (
      <div className="invalid-feedback">{formik.errors.user_name}</div>
    ) : null}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control
       style={{backgroundColor: "#2bffaa"}}  
      type="email"
      name="user_email"
      placeholder="E-mail"
      value={formik.values.user_email}
      onChange={formik.handleChange}
      className={formik.touched.user_email && formik.errors.user_email ? 'form-control is-invalid' : 'form-control'}
    />
    {formik.touched.user_email && formik.errors.user_email ? (
      <div className="invalid-feedback">{formik.errors.user_email}</div>
    ) : null}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Control
      style={{backgroundColor: "#2bffaa"}}
      as="textarea"
      name="message"
      placeholder="Message"
      rows={3}
      value={formik.values.message}
      onChange={formik.handleChange}
      className={formik.touched.message && formik.errors.message ? 'form-control is-invalid' : 'form-control'}
    />
    {formik.touched.message && formik.errors.message ? (
      <div className="invalid-feedback">{formik.errors.message}</div>
    ) : null}
  </Form.Group>

  <Button variant="outline-dark" className='btn_size' type="submit" disabled={formik.isSubmitting}>
    Send
  </Button>
</Form>
    </Col>
  </Row>
</div>
  );
};

export default Contact;
