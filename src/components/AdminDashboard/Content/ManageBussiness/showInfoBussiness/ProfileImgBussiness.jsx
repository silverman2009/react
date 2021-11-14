import { useState, useEffect } from "react";
import PreviewImgUpload from "./PreviewImgUpload";
import "./style.css";

const ProfileImgBussiness = ({ nameLabel, preview, onChange, className, nameInput }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container__selectImg ">
        <div className={`selectImg ${className}`}>
          <div className="clickSelect_for__img ">
            <div>
              <label
                className="fony80 fontfamily text-white cursorPoiner label__uplaodImg"
                htmlFor={nameInput}
              >
                {nameLabel}
              </label>
              <input
                type="file"
                onChange={onChange}
                name="photo"
                id={nameInput}
                style={{ display: "none" }}
              />
            </div>
            <p className="fony80 fontfamily m-0 border_icon_arrow"></p>
            <img
              className="icon_arrow_left"
              src="https://icons-for-free.com/iconfiles/png/512/arrow+left+chevron+chevronleft+left+left+icon+icon-1320185731545502691.png"
              alt="arow-left"
            />
          </div>
          <div className="mx-3">
            <img
              src={preview}
              className="img_info"
              onClick={() => setShow(true)}
            />
          </div>
        </div>
        <PreviewImgUpload show={show} setShow={setShow} src={preview} />
      </div>
    </>
  );
};

export default ProfileImgBussiness;
