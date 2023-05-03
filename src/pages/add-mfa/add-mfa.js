import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../stores";
import MFAForm from "../../components/mfa-form/mfa-form";

export default function AddMFA() {
  const navigate = useNavigate();

  const { mfaStore } = useStores();

  const handleBackClick = () => {
    navigate("/");
  };

  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.code && inputs.name) {
      mfaStore.addToken(inputs.name);
      navigate("/");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <MFAForm
      inputs={inputs}
      onHandleChange={handleChange}
      onHandleSubmit={handleSubmit}
      onHandleBack={handleBackClick}
    />
  );
}
