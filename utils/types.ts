export type Cart = {
  products?: Product[];
  fee_percentage?: number;
  fee_delivery?: number;
  total_value?: number;
};

export type Product = {
  id: number;
  produto: string;
  preco: number;
  descricao: string;
  img: string;
  marca: string;
  quantidade: number;
  estoque: number;
  favoritado?: boolean;
};