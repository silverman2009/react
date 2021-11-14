import {useState} from "react";
import {Modal,Button} from "react-bootstrap"
import Input from "./../Input"

const VeriyCode = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="btn_verify_code fony75 fontfamily" onClick={handleShow}>
           +
      </button>

      <Modal show={show} onHide={handleClose}>
       <div className="p-5">
         <p className="fony85 fontfamily m-0">لطفا کد خود را وارد نمایید </p>
         <Input/>
         <div className="d-flex justify-content-end">
         <button className="btn_verify_code fony75 fontfamily px-4 py-2">تایید</button>
         </div>
       </div>
      </Modal>
    </>
  );
};

export default VeriyCode;
