"use client";
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import styled from "@emotion/styled";

// Sample image data (replace with your own)
const images = [
  { src: 'photos/image1.jpeg', caption: 'Image 1', width: 3, height: 4 },
  { src: 'photos/image2.jpeg', caption: 'Image 2', width: 3, height: 4 },
  { src: 'photos/image3.jpeg', caption: 'Image 3', width: 3, height: 4 },
  { src: 'photos/image4.jpeg', caption: 'Image 4', width: 3, height: 4 },
  { src: 'photos/image5.jpeg', caption: 'Image 5', width: 3, height: 4 },
  { src: 'photos/image7.jpeg', caption: 'Image 7', width: 9, height: 4 },
  { src: 'photos/image6.jpeg', caption: 'Image 6', width: 3, height: 4 },
  { src: 'photos/image8.jpeg', caption: 'Image 8', width: 3, height: 4 },
  { src: 'photos/image9.jpeg', caption: 'Image 9', width: 4, height: 4 },
  { src: 'photos/image10.jpeg', caption: 'Image 10', width: 4, height: 4 },
  { src: 'photos/image11.jpeg', caption: 'Image 11', width: 4, height: 3 },
  { src: 'photos/image13.jpeg', caption: 'Image 13', width: 4, height: 4 },
  { src: 'photos/image15.jpeg', caption: 'Image 15', width: 4, height: 4 },
  { src: 'photos/image16.jpeg', caption: 'Image 16', width: 4, height: 4 },
  { src: 'photos/image17.jpeg', caption: 'Image 17', width: 4, height: 4 },
  { src: 'photos/image19.jpeg', caption: 'Image 19', width: 4, height: 4 },
  { src: 'photos/image20.jpeg', caption: 'Image 20', width: 4, height: 4 },
  { src: 'photos/image21.jpeg', caption: 'Image 21', width: 4, height: 4 },
  { src: 'photos/image22.jpeg', caption: 'Image 22', width: 6, height: 4 },
  { src: 'photos/image23.jpeg', caption: 'Image 12', width: 4, height: 4 },
];

const Captures: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const Container = styled.div`
    .react-images__view {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    .react-images__view img {
      max-height: 80vh; /* Adjust this value as needed */
      max-width: 80vw; /* Adjust this value as needed */
    }
  `;

    return (
      <Container>
      <Gallery photos={images} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map(x => ({
                ...x,
                source: x.src,
                src: x.src,
                alt: x.caption,
                caption: x.caption
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
    );
  };
  
  export default Captures;