// src/components/ImageGallery.js
const ImageGallery = () => {
  const images = [
    '../../assets/Food/almendrado.jpg',
    '../../assets/Food/gaseosa.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div className="flex overflow-x-auto">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="w-64 h-48 object-cover mr-4"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
