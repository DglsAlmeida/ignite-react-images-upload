import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedImage, setSelectedImage] = useState('');

  const handleViewImage = useCallback(
    (url: string) => {
      setSelectedImage(url);
      onOpen();
    },
    [onOpen]
  );

  return (
    <SimpleGrid columns={3} spacingX={10} spacingY={10}>
      {cards.map(card => (
        <Card
          key={card.id}
          data={card}
          viewImage={() => handleViewImage(card.url)}
        />
      ))}

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={selectedImage}
      />
    </SimpleGrid>
  );
}
