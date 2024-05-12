import { Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import Gallery from "react-photo-gallery";

React.useLayoutEffect = React.useEffect;

// Sample image data (replace with your own)
const images = [
  { src: "photos/image1.jpeg", caption: "Image 1", width: 4, height: 4 },
  { src: "photos/image2.jpeg", caption: "Image 2", width: 4, height: 4 },
  { src: "photos/image3.jpeg", caption: "Image 3", width: 4, height: 4 },
  { src: "photos/image7.jpeg", caption: "Image 7", width: 12, height: 4 },
  { src: "photos/image5.jpeg", caption: "Image 5", width: 4, height: 3 },
  { src: "photos/image6.jpeg", caption: "Image 6", width: 4, height: 3 },
  { src: "photos/image8.jpeg", caption: "Image 8", width: 4, height: 4 },
  { src: "photos/image9.jpeg", caption: "Image 9", width: 6, height: 4 },
  { src: "photos/image10.jpeg", caption: "Image 10", width: 4, height: 4 },
  { src: "photos/image11.jpeg", caption: "Image 11", width: 4, height: 3 },
  { src: "photos/image13.jpeg", caption: "Image 13", width: 4, height: 4 },
  { src: "photos/image15.jpeg", caption: "Image 15", width: 4, height: 4 },
  { src: "photos/image16.jpeg", caption: "Image 16", width: 4, height: 4 },
  { src: "photos/image17.jpeg", caption: "Image 17", width: 4, height: 4 },
  { src: "photos/image19.jpeg", caption: "Image 19", width: 4, height: 4 },
  { src: "photos/image20.jpeg", caption: "Image 20", width: 4, height: 4 },
  { src: "photos/image21.jpeg", caption: "Image 21", width: 4, height: 4 },
  { src: "photos/image22.jpeg", caption: "Image 22", width: 10, height: 4 },
  { src: "photos/image23.jpeg", caption: "Image 12", width: 6, height: 4 },
  { src: "photos/image4.jpeg", caption: "Image 4", width: 4, height: 4 },
  { src: "photos/image24.jpg", caption: "Image 24", width: 4, height: 4 },
  { src: "photos/image25.jpg", caption: "Image 25", width: 4, height: 4 },
  { src: "photos/image26.jpg", caption: "Image 26", width: 8, height: 4 },
  { src: "photos/image27.jpg", caption: "Image 27", width: 4, height: 4 },
  { src: "photos/image28.jpg", caption: "Image 28", width: 6, height: 4 },
  { src: "photos/image29.jpg", caption: "Image 29", width: 10, height: 4 },
  { src: "photos/image30.jpg", caption: "Image 30", width: 4, height: 4 },
  { src: "photos/image31.jpg", caption: "Image 31", width: 4, height: 4 },
  { src: "photos/image32.jpg", caption: "Image 32", width: 4, height: 4 },
  { src: "photos/image33.jpg", caption: "Image 33", width: 4, height: 4 },
  { src: "photos/image34.jpg", caption: "Image 34", width: 4, height: 4 },
  { src: "photos/image35.jpg", caption: "Image 35", width: 4, height: 4 },
  { src: "photos/image36.jpg", caption: "Image 36", width: 8, height: 4 },
  { src: "photos/image37.jpg", caption: "Image 37", width: 4, height: 4 },
  { src: "photos/image38.jpg", caption: "Image 38", width: 4, height: 4 },
  { src: "photos/image39.jpg", caption: "Image 39", width: 4, height: 4 },
  { src: "photos/image40.jpg", caption: "Image 40", width: 4, height: 4 },
  { src: "photos/image41.jpg", caption: "Image 41", width: 4, height: 4 },
  { src: "photos/image42.jpg", caption: "Image 42", width: 4, height: 4 },
  { src: "photos/image43.jpg", caption: "Image 43", width: 10, height: 4 },
  { src: "photos/image44.jpg", caption: "Image 44", width: 4, height: 4 },
  { src: "photos/image45.jpg", caption: "Image 45", width: 4, height: 4 },
];

const Captures: React.FC = () => {
  return (
    <Box>
      <Heading size="xl" marginY={5}>
        Explore Life Through My Lens 📸
      </Heading>
      <Text fontSize="lg" mb={3}>
        Step into my visual realm where pixels dance and memories come alive.
        Explore a curated collection of moments frozen in time, each frame a
        window into my world. Let the images speak for themselves as they invite
        you to wander, wonder, and witness the beauty of the ordinary.
      </Text>
      <Gallery photos={images} />
    </Box>
  );
};

export default Captures;
