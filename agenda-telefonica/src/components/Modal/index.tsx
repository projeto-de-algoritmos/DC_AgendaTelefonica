import React, { useCallback, useEffect, useRef } from 'react';

import { Container, BackdropContainer, BtnClose } from './styles';

type TAlignModal = 'flex-start' | 'center' | 'flex-end';
interface IModalProps {
  btnClose?: boolean;
  modalVisible?: boolean;
  setModalVisible?: any;
  alignModal?: TAlignModal;
}

const ModalInfo: React.FC<IModalProps> = ({
  btnClose = false,
  modalVisible = false,
  alignModal = 'center',
  setModalVisible,
  children,
}) => {
  const backdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setModalVisible(modalVisible);
  }, [modalVisible, setModalVisible]);

  const handleModalVisible = useCallback(
    (e) => {
      if (e.target === backdrop.current) {
        // console.log('fora da modal');
        setModalVisible(!modalVisible);
      }
    },
    [modalVisible, setModalVisible],
  );

  return (
    <>
      <BackdropContainer
        ref={backdrop}
        visible={modalVisible}
        alignModal={alignModal}
        onClick={handleModalVisible}
      >
        <Container alignModal={alignModal}>
          <BtnClose
            visible={btnClose}
            onClick={() => setModalVisible(!modalVisible)}
          >
            &times;
          </BtnClose>
          {children}
        </Container>
      </BackdropContainer>
    </>
  );
};

export default ModalInfo;