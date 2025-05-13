
import { useState } from 'react';
import { AddressInfo } from '../types/product';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader, MapPin, Truck } from 'lucide-react';
import { toast } from 'react-toastify';

interface ZipCodeDeliveryProps {
  addressInfo?: AddressInfo;
  onAddressChange: (address: AddressInfo | undefined) => void;
}

const ZipCodeDelivery = ({ addressInfo, onAddressChange }: ZipCodeDeliveryProps) => {
  const [zipCode, setZipCode] = useState(addressInfo?.cep || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    
    if (value.length <= 8) {
      const formattedValue = value.length > 5 
        ? `${value.slice(0, 5)}-${value.slice(5)}` 
        : value;
      
      setZipCode(formattedValue);
    }
  };

  const checkDelivery = async () => {
    const cleanZip = zipCode.replace(/\D/g, '');
    
    if (cleanZip.length !== 8) {
      toast.error("CEP inválido");
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanZip}/json/`);
      const data = await response.json();
      
      if (data.erro) {
        toast.error("CEP não encontrado");
        onAddressChange(undefined);
      } else {
        const address: AddressInfo = {
          cep: data.cep,
          logradouro: data.logradouro,
          complemento: data.complemento,
          bairro: data.bairro,
          localidade: data.localidade,
          uf: data.uf,
          valid: true
        };
        
        onAddressChange(address);
        toast.success("CEP encontrado com sucesso");
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      toast.error("Erro na busca");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 border border-gray-200 rounded-lg p-4">
      <div className="flex items-center mb-4">
        <Truck className="w-5 h-5 text-ecommerce-600 mr-2" />
        <h3 className="font-medium">Calcular frete e prazo de entrega</h3>
      </div>
      
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={handleZipChange}
            placeholder="Digite seu CEP"
            className="pr-10"
            maxLength={9}
          />
          {zipCode && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => {
                setZipCode('');
                onAddressChange(undefined);
              }}
            >
              ✕
            </button>
          )}
        </div>
        
        <Button 
          onClick={checkDelivery} 
          disabled={isLoading || zipCode.replace(/\D/g, '').length !== 8}
          className="bg-ecommerce-500 hover:bg-ecommerce-600"
        >
          {isLoading ? <Loader className="w-4 h-4 animate-spin mr-2" /> : "Consultar"}
        </Button>
      </div>
      
      {addressInfo?.valid && (
        <div className="mt-4 text-sm">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-ecommerce-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-700">Entrega disponível para:</p>
              <p>{addressInfo.logradouro}{addressInfo.complemento ? `, ${addressInfo.complemento}` : ''}</p>
              <p>{addressInfo.bairro} - {addressInfo.localidade}/{addressInfo.uf} - {addressInfo.cep}</p>
              
              <div className="mt-3 p-2 bg-green-50 border border-green-100 rounded text-green-700 flex items-center">
                <span>📦 Frete grátis para este endereço!</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-2 text-xs text-gray-500">
        <a 
          href="https://buscacepinter.correios.com.br/app/endereco/index.php" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-ecommerce-500 hover:underline"
        >
          Não sei meu CEP
        </a>
      </div>
    </div>
  );
};

export default ZipCodeDelivery;
