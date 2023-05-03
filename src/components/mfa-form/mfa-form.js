import React from "react";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./mfa-form.css";

export default function MFAForm({
  inputs,
  onHandleChange,
  onHandleSubmit,
  onHandleBack,
}) {
  return (
    <div className="form-container">
      <div className="back-btn">
        <FontAwesomeIcon icon={faLeftLong} onClick={onHandleBack} /> Add Account
      </div>
      <form className="add-mfa-form" onSubmit={onHandleSubmit}>
        <div className="form-item">
          <div>Enter Code given by the website</div>
          <input
            type="text"
            name="code"
            placeholder="i.e: sw3g lasdkas adskld asd"
            className="width-100-percent input-field"
            value={inputs.code || ""}
            onChange={onHandleChange}
          />
        </div>
        <div className="form-item">
          <div>Enter Account Name</div>
          <input
            type="text"
            name="name"
            placeholder="Account Name"
            className="width-100-percent input-field"
            value={inputs.name || ""}
            onChange={onHandleChange}
          />
        </div>
        <input type="submit" className="submit-btn" />
      </form>
    </div>
  );
}
