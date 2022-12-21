import { Button } from "antd";
import React, { useState } from "react";
import { ModalAnt } from "./Modal.styled";

const ModalCustomer = ({ title, hiddenCancel, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <ModalAnt
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        hiddenCancel={hiddenCancel}
        onCancel={handleCancel}
      >
        <p>{content}</p>
        <p>{content}</p>
      </ModalAnt>
    </>
  );
};
export default ModalCustomer;
