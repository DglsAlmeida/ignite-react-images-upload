import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent alignSelf="center" bgColor="pGray.800">
        <ModalBody p={2}>
          <Image maxHeight="900px" src={imgUrl} alt="Img" />
        </ModalBody>

        <ModalFooter>
          <Link href={imgUrl} target="_blank">
            Abrir Original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
