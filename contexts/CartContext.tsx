import React, { createContext, useContext, useState, ReactNode } from "react";
import { Cart, Product } from "../utils/types";

type Error = {
  error: string;
  status: string;
};

type CartContextData = {
  cart: Cart | undefined | null;
  error: Error | undefined | null;
  isLoading: boolean;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void;
  deleteProductFromCart: (productId: number) => void;
  getCartData: () => Cart | undefined | null;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart>({});
  const [favorited, setFavorited] = useState<Product[]>();
  const [token, setToken] = useState<string>("");

  const [error, setError] = useState<Error | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  function addProductToCart(product: Product): void {
    const productId = product.id;
    const currentProduct = cart?.products?.find((p) => p.id === productId);
    const newQuantity = currentProduct ? currentProduct.quantidade + 1 : 1;
    const newProductList = currentProduct
      ? cart.products?.map((p) =>
          p.id === productId ? { ...p, quantidade: newQuantity } : p
        )
      : [...(cart.products || []), { ...product, quantidade: newQuantity }];

    const newTotalValue = (cart.total_value || 0) + product.preco;
    const newFeeDelivery = cart.fee_delivery || 0;
    const newFeePercentage = cart.fee_percentage || 0;

    setCart({
      ...cart,
      products: newProductList,
      total_value: newTotalValue,
      fee_delivery: newFeeDelivery,
      fee_percentage: newFeePercentage,
    });
  }

  function removeProductFromCart(productId: number): Cart {
    const currentProduct = cart?.products?.find((p) => p.id === productId);
    if (currentProduct) {
      const newQuantity = currentProduct.quantidade - 1;
      const newProductList =
        newQuantity > 0
          ? cart.products?.map((p) =>
              p.id === productId ? { ...p, quantidade: newQuantity } : p
            )
          : cart.products?.filter((p) => p.id !== productId);

      const newTotalValue = (cart.total_value || 0) - currentProduct.preco;
      const newFeeDelivery = cart.fee_delivery || 0;
      const newFeePercentage = cart.fee_percentage || 0;

      setCart({
        ...cart,
        products: newProductList,
        total_value: newTotalValue,
        fee_delivery: newFeeDelivery,
        fee_percentage: newFeePercentage,
      });
    }
    return cart;
  }

  function deleteProductFromCart(productId: number): Cart {
    const deletedProduct = cart?.products?.find((p) => p.id === productId);
    if (deletedProduct) {
      const newProductList = cart.products?.filter((p) => p.id !== productId);
      const newTotalValue =
        (cart.total_value || 0) -
        deletedProduct.preco * deletedProduct.quantidade;
      const newFeeDelivery = cart.fee_delivery || 0;
      const newFeePercentage = cart.fee_percentage || 0;

      setCart({
        ...cart,
        products: newProductList,
        total_value: newTotalValue,
        fee_delivery: newFeeDelivery,
        fee_percentage: newFeePercentage,
      });
    }
    return cart;
  }

  function getCartData(): Cart {
    let total = 0;
    let quantity = 0;
    (cart?.products || []).forEach((product) => {
      total += product.preco * product.quantidade;
      quantity += product.quantidade;
    });

    const feePercentage = cart.fee_percentage || 0;
    const feeDelivery = cart.fee_delivery || 0;
    const totalValue = (total * (100 + feePercentage)) / 100 + feeDelivery;

    return {
      ...cart,
      total_value: totalValue,
    };
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        error,
        isLoading,
        addProductToCart,
        removeProductFromCart,
        deleteProductFromCart,
        getCartData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function fetchProducts() {
  const products: Product[] = [
    {
      id: 1,
      produto: "Creme facial",
      preco: 75.99,
      descricao: "Creme facial hidratante para peles secas",
      img: "https://images-americanas.b2w.io/produtos/01/00/img/4401106/6/4401106623_1GG.jpg",
      marca: "Oceane",
      estoque: 100,
      quantidade: 0,
    },
    {
      id: 2,
      produto: "Protetor solar",
      preco: 69.99,
      descricao: "Protetor solar FPS 50 para uso diário",
      img: "https://www.neutrogena.com.br/sites/neutrogena_br/files/styles/jjbos_adaptive_images_generic-desktop/public/product-images/produto-protetor-solar-fps-30-sun-fresh.png",
      marca: "Neutrogena",
      estoque: 50,
      quantidade: 0,
      favoritado: true,
    },
    {
      id: 3,
      produto: "Shampoo",
      preco: 59.99,
      descricao: "Shampoo para cabelos oleosos",
      img: "https://www.neutrogena.ca/sites/neutrogena_ca/files/originalshampoo-hero.png",
      marca: "Neutrogena",
      estoque: 250,
      quantidade: 0,
    },
    {
      id: 4,
      produto: "Condicionador",
      preco: 59.99,
      descricao: "Condicionador para cabelos secos",
      img: "https://www.neutrogena.ca/sites/neutrogena_ca/files/extrastrengthshampoo-hero.png",
      marca: "Neutrogena",
      estoque: 200,
      quantidade: 0,
    },
    {
      id: 5,
      produto: "Máscara facial",
      preco: 59.99,
      descricao: "Máscara facial de argila verde",
      img: "https://static.thcdn.com/images/large/original//productimg/1600/1600/12589092-1214789674404889.jpg",
      marca: "Pinkclay",
      estoque: 50,
      quantidade: 0,
    },
    {
      id: 6,
      produto: "Esmalte",
      preco: 37.99,
      descricao: "Esmalte vermelho intenso",
      img: "https://lojaslivia.fbitsstatic.net/img/p/esmalte-impala-novas-cores-cremoso-7-5-ml-admire-99480/284636.jpg?w=800&h=800&v=no-change&qs=ignore",
      marca: "Impala",
      estoque: 10,
      quantidade: 0,
    },
    {
      id: 8,
      produto: "Base líquida",
      preco: 52.99,
      descricao: "Base líquida de cobertura média",
      img: "https://60193.cdn.simplo7.net/static/60193/sku/face-bases-base-liquida-bt-skin-bruna-tavares--p-1602794059926.jpg",
      marca: "BT Skin",
      estoque: 30,
      quantidade: 0,
    },
    {
      id: 9,
      produto: "Perfume",
      preco: 499.99,
      descricao: "Perfume feminino floral",
      img: "https://m.media-amazon.com/images/I/710fa-Et8LL._AC_SL1500_.jpg",
      marca: "Lancôme",
      estoque: 50,
      quantidade: 0,
    },
    {
      id: 10,
      produto: "Sabonete líquido",
      preco: 19.99,
      descricao: "Sabonete líquido hidratante para o corpo",
      img: "https://jequiti.vtexassets.com/arquivos/ids/164036-800-auto?v=637581796708730000&width=800&height=auto&aspect=true",
      marca: "Jequiti",
      estoque: 250,
      quantidade: 0,
    },
  ];

  return products;
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart, fetchProducts };
