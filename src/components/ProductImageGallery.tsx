
import { useState, useEffect } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  selectedImage: number;
  onSelectImage: (index: number) => void;
}

const ProductImageGallery = ({ 
  images, 
  selectedImage, 
  onSelectImage 
}: ProductImageGalleryProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setMousePosition({ x, y });
  };

  return (
    <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-[40%]">
      <div 
        className="relative w-full aspect-square overflow-hidden rounded-lg border border-gray-200 bg-white"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <div 
          className={`w-full h-full transition-all duration-200 ${isZoomed ? 'scale-150' : 'scale-100'}`}
          style={isZoomed ? { transformOrigin: `${mousePosition.x}% ${mousePosition.y}%` } : undefined}
        >
          <img 
            src={images[selectedImage]} 
            alt="Product" 
            className="w-full h-full object-contain"
          />
        </div>
        {isZoomed && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
            Passe o mouse para ampliar
          </div>
        )}
      </div>
      
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onSelectImage(index)}
            className={`relative min-w-16 h-16 rounded-md overflow-hidden border-2 transition-all
              ${selectedImage === index 
                ? 'border-ecommerce-500 shadow-md' 
                : 'border-gray-200 hover:border-ecommerce-300'}`}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
