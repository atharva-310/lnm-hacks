import { useState } from 'react';

import axios from 'axios';
/**
 * UseFrom is a custom hooks which wraps all the form functionality. Hooks has the state and handlers for controlled form.
 * It also have methods for validation of inputs, error handling and making API requests
 * @param recaptchaRef : This is refrence to the captcha dom element used to validate the real user
 * @returns  { isSubmitting, formError, toSend, handleChange, handleSubmit}
 *
 *
 */
export default function useFrom(recaptchaRef) {
  const [isSubmitting, setSubmit] = useState(false);

  // store the data to be with the API call
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    question: '',
  });

  // Error handling will be done using this state
  const [formError, setFormError] = useState({
    isInvalid: false,
    message: '',
  });

  // regex based email validation function
  function emailValidation() {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!toSend.email || regex.test(toSend.email) === false) {
      setFormError({
        isInvalid: true,
        message: 'Email Is Invalid',
      });
      setSubmit(false);
      return false;
    }
    return true;
  }

  // function to handle submission of functionality with proper errorhandling
  const handleSubmit = e => {
    setSubmit(true);
    if (
      toSend.email.trim() === '' ||
      toSend.name.trim() === '' ||
      toSend.question.trim() === ''
    ) {
      setFormError({
        isInvalid: true,
        message: 'Please fill all the field',
      });
      setSubmit(false);
      return;
    }
    if (emailValidation()) {
      const recaptchaValue = recaptchaRef.current.getValue();
      if (recaptchaValue) {
        const data = {
          Name: toSend.name,
          Email: toSend.email,
          Query: toSend.question,
        };
        setFormError({
          isInvalid: false,
          message: '',
        });
        // Making API call to sheet best API (which will convert google sheet to REST API)
        axios
          .post(
            'https://sheet.best/api/sheets/9b0e8bf0-1b1c-42d7-8681-63f606f45bc5',
            data
          )
          .then(response => {
            console.log(response);
            recaptchaRef.current.reset();
            setToSend({
              name: '',
              email: '',
              question: '',
            });
            setSubmit(false);
          });
      } else {
        setFormError({
          isInvalid: true,
          message: 'Check reCAPTCHA',
        });
        setSubmit(false);
        return;
      }
    }
  };

  // handle the input change in the controlled form
  const handleChange = e => {
    setFormError({
      isInvalid: false,
      message: '',
    });

    setToSend(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  return {
    isSubmitting,
    formError,
    toSend,
    handleChange,
    handleSubmit,
  };
}
