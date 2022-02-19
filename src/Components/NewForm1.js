import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import '../CSS/Form1.css';

export default function Form1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  /* const onSubmit = (data) => {
    console.log(data);
  }; */
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <div className="container border border-dark rounded div1" style={{backgroundColor: "#406882",width:"700px"}}>
      <h1>Login Form</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Email"
            type="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </Form.Group>
        {errors.email && <p className="text-danger">Please check the Email</p>}
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Password"
            name="password"
            type={passwordShown ? "text" : "password"}
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            })}
          />
          <FaEye onClick={togglePassword} />
        </Form.Group>
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
        <Button
          variant="primary"
          type="submit"
          className="button"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
