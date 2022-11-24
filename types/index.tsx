export type product = {
  _id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: {
    src: string;
    alt: string;
  };
  bestseller: boolean;
  featured: boolean;
  description: string;
  people_also_buy: product[];
};

export type shoppingCartProduct = {
  product: product;
  quantity: number;
};
