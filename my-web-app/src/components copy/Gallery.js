import React from 'react';

const images = [
  // Add image URLs here
  { id: 1, src: 'image-url-1.png', title: 'Ocean View 1', description: 'Beautiful ocean view' },
  // Repeat for more images
];

 

function Gallery() {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="photo">
          <img src={image.src} alt={image.title} />
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
