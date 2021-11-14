import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useMutation } from "react-query";
import axios from "axios";

const ResultRestPassword = ({ numberPhone }) => {
  const [show, setShow] = useState(false);

  //   send data for api
  const data = {
    phone: numberPhone,
  };

  // request for rest password
  const mutation = useMutation((event) => {
    axios
      .post("user/login/ResetPassword", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("مشکلی در اتصال به وجود امده است");
      });
  });

  // show and close modal fun
  const handleClose = () => setShow(false);
  const handleShow = () => {
    mutation.mutate();
    setShow(true);
  };

  return (
    <div>
      <p
        onClick={handleShow}
        type="button"
        className=" fony75 textColorbule cursorPoiner fontfamily"
      >
        فراموش کردن رمز عبور
      </p>
      <Modal show={show} onHide={handleClose}>
        <div>
          {mutation.isLoading ? (
            <h1>در حال ارسال اطلاعات</h1>
          ) : (
            <>
              {mutation.isError ? (
                <div>مشکلی در اتصال به وجود امده است</div>
              ) : null}
              {mutation.isSuccess ? (
                <div className="p-5">
                  <h3 className="fontfamily p-2 text-center textColorbule">
                    رمز جدید به گوشی شما ارسال شد
                  </h3>
                </div>
              ) : null}
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ResultRestPassword;
