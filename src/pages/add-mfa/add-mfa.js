import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../stores";
import "./add-mfa.css";
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
    // <div className="form-container">
    //   <div className="back-btn">
    //     <FontAwesomeIcon icon={faLeftLong} onClick={handleBackClick} />
    //     {" "}
    //     Add Account
    //   </div>
    //   <form className='add-mfa-form' onSubmit={handleSubmit}>
    //     <div className="form-item">
    //       <div>
    //         Enter Code given by the website
    //       </div>
    //       <input
    //         type="text"
    //         name="code"
    //         placeholder="i.e: sw3g lasdkas adskld asd"
    //         className="width-100-percent input-field"
    //         value={inputs.code || ""}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="form-item">
    //       <div>
    //         Enter Account Name
    //       </div>
    //       <input
    //         type="text"
    //         name="name"
    //         placeholder="Account Name"
    //         className="width-100-percent input-field"
    //         value={inputs.name || ""}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <input type="submit" className="submit-btn" />
    //   </form>
    // </div>
  );
}
