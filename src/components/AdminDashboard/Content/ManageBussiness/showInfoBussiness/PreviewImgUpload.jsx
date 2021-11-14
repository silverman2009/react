import { useState } from "react";
import {Modal} from "react-bootstrap"
const PreviewImgUpload = ({show,src,setShow}) => {

  return (
    <div>
      <Modal show={show} onHide={()=> setShow(false)} centered>
           <div className="container__preview__img_upload">
               <img src={src} alt=" "  style={{objectFit:"cover"}}/>
           </div>
      </Modal>
    </div>
  );
};

export default PreviewImgUpload;
