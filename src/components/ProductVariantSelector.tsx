
import { ProductVariant, ProductColor } from "../types/product";

interface VariantSelectorProps {
  label: string;
  variants: ProductVariant[];
  selectedId?: number;
  onSelect: (id: number) => void;
  isColor?: boolean;
}

const ProductVariantSelector = ({
  label,
  variants,
  selectedId,
  onSelect,
  isColor = false
}: VariantSelectorProps) => {
  const colorVariants = isColor ? variants as ProductColor[] : null;

  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-700">{label}</h3>
      
      <div className="flex flex-wrap gap-2 mt-2">
        {isColor ? (
          colorVariants?.map((color) => (
            <button
              key={color.id}
              onClick={() => color.available && onSelect(color.id)}
              disabled={!color.available}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center transition
                ${!color.available ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}
                ${selectedId === color.id ? 'ring-2 ring-offset-2 ring-ecommerce-500' : ''}
              `}
              title={color.label}
              aria-label={color.label}
            >
              <span 
                className={`w-8 h-8 rounded-full border ${color.colorCode === '#FFFFFF' ? 'border-gray-300' : 'border-transparent'}`}
                style={{ backgroundColor: color.colorCode }}
              />
            </button>
          ))
        ) : (
          variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => variant.available && onSelect(variant.id)}
              disabled={!variant.available}
              className={`
                min-w-12 px-3 py-2 text-sm font-medium rounded-md transition
                ${!variant.available 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200' 
                  : selectedId === variant.id
                    ? 'bg-ecommerce-500 text-white' 
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              {variant.label}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductVariantSelector;
