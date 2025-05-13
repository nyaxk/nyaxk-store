
import ProductPage from '@/components/ProductPage';
import { productData } from '@/data/productData';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-ecommerce-700 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">NyaxkStore</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-ecommerce-200 text-sm font-medium">Home</a>
              <a href="#" className="hover:text-ecommerce-200 text-sm font-medium">Categorias</a>
              <a href="#" className="hover:text-ecommerce-200 text-sm font-medium">Ofertas</a>
              <a href="#" className="hover:text-ecommerce-200 text-sm font-medium">Marcas</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-ecommerce-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-ecommerce-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-ecommerce-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center text-sm">
            <a href="#" className="text-gray-500 hover:text-ecommerce-600">Home</a>
            <span className="mx-2 text-gray-400">/</span>
            <a href="#" className="text-gray-500 hover:text-ecommerce-600">Calçados</a>
            <span className="mx-2 text-gray-400">/</span>
            <a href="#" className="text-gray-500 hover:text-ecommerce-600">Tênis</a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700 font-medium truncate">{productData.name}</span>
          </div>
        </div>
      </nav>

      <main className="pb-12">
        <ProductPage product={productData} />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">NyaxkStore</h3>
              <p className="text-gray-400 text-sm">
                A melhor loja online para suas compras de calçados e roupas esportivas.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white">Produtos</a></li>
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>contato@nyaxkstorebrasil.com.br</li>
                <li>(11) 9999-9999</li>
                <li>Av. Paulista, 1000 - São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-400">
            <p>&copy; 2025 NyaxkStore. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
