import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useObserver } from "mobx-react";
import Timer from "../../components/timer/Timer";
import TotpImage from "../../assets/reddit-logo-16.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useStores } from "../../stores";
import "./mfa-listing.css";

function MFAListing() {
  const navigate = useNavigate();

  const { mfaStore } = useStores();

  const dragItem = useRef();
  const dragOverItem = useRef();

  const handleAddToken = () => {
    navigate("/add-new");
  };

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyListItems = [...mfaStore.mfaList];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    mfaStore.rearrange(copyListItems);
  };

  return useObserver(() => (
    <div className="listing-container">
      <div className="tokens-header">
        <div>Edit</div>
        <div className="main-heading">Tokens</div>
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
        <div
          key={index}
          className="mfa-item"
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
          draggable
        >
          <div className="topt-container">
            <img src={TotpImage} alt="img" className="img-container" />
            <div className="inner-container">
              <span>{item.name}</span>
              <span className="totp">{item.totp}</span>
            </div>
            <Timer seconds={mfaStore.seconds} />
          </div>
          <hr />
        </div>
      ))}
    </div>
  ));
}

export default MFAListing;
