import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useObserver } from "mobx-react";
import Timer from "../../components/timer/Timer";
import TotpImage from "../../assets/reddit-logo-16.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useStores } from "../../stores";
import "./mfa-listing.css";

function MFAListing() {
  const navigate = useNavigate();

  const { mfaStore } = useStores();

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds === 0 ? 60 : prevSeconds - 1);
      if (seconds === 0) {
        mfaStore.regenerate();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const handleAddToken = () => {
    navigate("/add-new")
  };
  return useObserver(() => (
    <div className="listing-container">
      <div className="tokens-header">
        <div>
          Edit
        </div>
        <div className="main-heading">
          Tokens
        </div>
        <div>
          <FontAwesomeIcon
            icon={faPlus}
            className="add-new-token"
            onClick={handleAddToken}
          />
        </div>
      </div>
      <hr />
      {mfaStore.mfaList.map((item, index) => (
        <div key={index} className="mfa-item">
          <div className="topt-container">
            <img src={TotpImage} alt="img" className="img-container" />
            <div className="inner-container">
              <span>{item.name}</span>
              <span className="totp">{item.totp}</span>
            </div>
            <Timer seconds={seconds} />
          </div>
          <hr />
        </div>
      ))}
    </div>
  ));
}

export default MFAListing;
