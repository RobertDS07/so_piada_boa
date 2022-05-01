import { useCallback, useState } from "react";

type ModalProps<T> = T;

interface UseModalProps<T> {
  blockHideModal?: boolean;
  defaultModalProps?: ModalProps<T>;
}

export type ToggleModalVisibility<T = any> = (
  toOpen?: boolean,
  modalProps?: ModalProps<T>
) => void;

type IsOpen = boolean;

const useModal = <T = Record<string, any>>(
  props?: UseModalProps<T>
): [IsOpen, ToggleModalVisibility<T>, ModalProps<T> | undefined] => {
  const [isOpen, setIsOpen] = useState(false);

  const [modalProps, setModalProps] = useState(props?.defaultModalProps);

  const handleModalProps = (modalProps?: ModalProps<T>) => {
    setModalProps(modalProps ?? props?.defaultModalProps);
  };

  const toggleModalVisibility: ToggleModalVisibility<T> = useCallback(
    (toOpen, modalProps) =>
      setIsOpen((oldVal) => {
        const isOpen = !!oldVal;

        if (isOpen && props?.blockHideModal) return true;

        toOpen && handleModalProps(modalProps);

        return !!toOpen;
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // se esse retorno crescer mais uma prop acho que se torna imprescindível o uso de um objeto para retorno
  return [isOpen, toggleModalVisibility, modalProps];
};

export default useModal;
