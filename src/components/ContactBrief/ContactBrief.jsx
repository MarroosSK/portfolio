/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { Alert, Row, Col, Form, Button, Container } from "react-bootstrap";
//email
import * as emailjs from "@emailjs/browser";
// validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Title from "../Title/Title";
const ContactBrief = () => {
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
    <Row className="d-flex justify-content-center align-items-center">
      <Title name="Contact" />
      <hr style={{ color: "#0D6EFD" }} />
      <Col className="d-flex flex-column">
        <Container>
          <div
            className="vh-100 d-flex flex-column justify-content-center"
            style={{ marginBottom: "45px" }}
          >
            <Row className="d-flex justify-content-center align-items-center">
              <Col
                xs={12}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <h5 className="display-5 fs-1">Work with me</h5>
                {showAlert && (
                  <Alert className="fade show" variant="success">
                    Message sent.
                  </Alert>
                )}
                <Form
                  ref={form}
                  onSubmit={handleSubmit(handleSend)}
                  style={{ width: "450px" }}
                  className="xs-width"
                  noValidate
                >
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                      style={{ backgroundColor: "#0D6EFD" }}
                      type="text"
                      name="user_name"
                      placeholder="Name"
                      {...register("user_name")}
                      isInvalid={!!errors.user_name}
                    />
                    {errors.user_name && (
                      <Form.Control.Feedback type="invalid">
                        {errors.user_name.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      style={{ backgroundColor: "#0D6EFD" }}
                      type="email"
                      name="user_email"
                      placeholder="E-mail"
                      {...register("user_email")}
                      isInvalid={!!errors.user_email}
                    />
                    {errors.user_email && (
                      <Form.Control.Feedback type="invalid">
                        {errors.user_email.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control
                      style={{ backgroundColor: "#0D6EFD" }}
                      as="textarea"
                      name="message"
                      placeholder="Message"
                      {...register("message")}
                      isInvalid={!!errors.message}
                      rows={3}
                    />
                    {errors.message && (
                      <Form.Control.Feedback type="invalid">
                        {errors.message.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Button
                    variant="outline-dark"
                    className="btn_size"
                    type="submit"
                  >
                    Send
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </Col>
    </Row>
  );
};

export default ContactBrief;
