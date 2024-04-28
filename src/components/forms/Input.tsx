import { FormEvent, useState } from "react";
import arrow from "../../assets/ui/arrow-right.svg";
import s from "../../styles/forms/Input.module.scss";
import Modal from "react-modal";

export const Input = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-expect-error
    if (!e.target["email"].value) {
      return;
    }
    new Promise(function (resolve) {
      setDisabled(true);
      setTimeout(resolve, 1000);
    })
      .then(() => setIsOpen(true))
      .catch(() => console.log("error"))
      .finally(() => setDisabled(false));
  };
  return (
    <>
      <form onSubmit={submitHandler} className={s.container}>
        <input
          disabled={disabled}
          name="email"
          placeholder="Enter your Email and get notified"
        />
        <button disabled={disabled} type="submit">
          <img src={arrow} />
        </button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            width: "320px",
            height: "370px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
          overlay: { backgroundColor: "rgba(22,44,78,0.6)" },
        }}
        contentLabel="Example Modal"
      >
        <h2>Success</h2>
        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  );
};
