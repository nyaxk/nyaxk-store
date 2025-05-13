
import { useState, useEffect } from 'react';
import { Product, UserSelections, AddressInfo } from '../types/product';
import { useLocalStorage } from '../hooks/useLocalStorage';
import ProductImageGallery from './ProductImageGallery';
import ProductVariantSelector from './ProductVariantSelector';
import ZipCodeDelivery from './ZipCodeDelivery';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Tag, Check, ArrowRight, Info } from 'lucide-react';
import { toast } from 'react-toastify';

interface ProductPageProps {
  product: Product;
}

const ProductPage = ({ product }: ProductPageProps) => {
  const [localSelections, setSelections] = useLocalStorage<UserSelections>(
    'product_selections',
    { selectedImage: 0 },
    15
  );
  
  const [selectedImage, setSelectedImage] = useState(localSelections.selectedImage || 0);
  const [selectedSize, setSelectedSize] = useState<number | undefined>(localSelections.selectedSize);
  const [selectedColor, setSelectedColor] = useState<number | undefined>(localSelections.selectedColor);
  const [addressInfo, setAddressInfo] = useState<AddressInfo | undefined>(localSelections.addressInfo);
  
  useEffect(() => {
    setSelections({
      selectedImage,
      selectedSize,
      selectedColor,
      addressInfo
    });
  }, [selectedImage, selectedSize, selectedColor, addressInfo]);

  const finalPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error(!selectedSize && !selectedColor
        ? "Por favor, selecione um tamanho e uma cor"
        : !selectedSize
          ? "Por favor, selecione um tamanho"
          : "Por favor, selecione uma cor",);
      return;
    }

    toast.success("Produto adicionado ao carrinho!");
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <ProductImageGallery
          images={product.images}
          selectedImage={selectedImage}
          onSelectImage={(index) => setSelectedImage(index)}
        />

        <div className="flex-1">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                Em estoque
              </span>
              <span>•</span>
              <span className="flex items-center">
                ★★★★★ {product.rating}
              </span>
            </div>

            <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl mb-1">
              {product.name}
            </h1>

            <div className="mt-3">
              <div className="flex items-baseline">
                {product.discount ? (
                  <>
                    <span className="text-3xl font-bold text-gray-900">
                      {finalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                    <span className="ml-2 px-2 py-1 bg-ecommerce-100 text-ecommerce-700 rounded-full text-xs font-medium">
                      {product.discount}% OFF
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Em até 10x de {(finalPrice / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} sem juros
              </p>
            </div>

            <div className="mt-4 text-gray-700">
              <p>{product.description}</p>
            </div>

            <div className="flex items-center mt-5 text-sm">
              <Tag className="w-4 h-4 text-ecommerce-500 mr-1" />
              <span className="text-ecommerce-700 font-medium">Melhor preço garantido</span>
              <Info className="w-4 h-4 text-gray-400 ml-1 cursor-help" aria-label="Se encontrar mais barato, devolvemos a diferença!" />
            </div>
          </div>

          <ProductVariantSelector
            label="Tamanho"
            variants={product.sizes}
            selectedId={selectedSize}
            onSelect={setSelectedSize}
          />

          <ProductVariantSelector
            label="Cor"
            variants={product.colors}
            selectedId={selectedColor}
            onSelect={setSelectedColor}
            isColor
          />

          <div className="mt-8">
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full bg-ecommerce-500 hover:bg-ecommerce-600 h-14 text-base"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Adicionar ao carrinho
            </Button>

            <div className="mt-3 flex gap-4">
              <Button
                variant="outline"
                className="flex-1 border-ecommerce-300 text-ecommerce-700 hover:bg-ecommerce-50"
              >
                Comprar agora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Salvar
              </Button>
            </div>
          </div>

          <ZipCodeDelivery
            addressInfo={addressInfo}
            onAddressChange={setAddressInfo}
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center p-3 border border-gray-200 rounded-lg">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Garantia de 30 dias</span>
            </div>
            <div className="flex items-center p-3 border border-gray-200 rounded-lg">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Frete grátis acima de R$ 199</span>
            </div>
            <div className="flex items-center p-3 border border-gray-200 rounded-lg">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Troca fácil</span>
            </div>
            <div className="flex items-center p-3 border border-gray-200 rounded-lg">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Pagamento seguro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
