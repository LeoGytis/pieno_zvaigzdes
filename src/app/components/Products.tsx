const ProductsArray = [
  {
    id: 484848,
    title: "Cheese Sticks",

    img: "https://placehold.co/100x200",
  },
  {
    id: 797979,
    title: "Yogurt",
    img: "https://placehold.co/100x200",
  },
  {
    id: 797979,
    title: "Flavored milk drinks",
    img: "https://placehold.co/100x200",
  },
  {
    id: 797979,
    title: "Desserts",
    img: "https://placehold.co/100x200",
  },
  {
    id: 797979,
    title: "Ice cream",
    img: "https://placehold.co/100x200",
  },
];

const Products: any = () => {
  return (
    <div className="max-w-7xl flex justify-between border border-orange-600">
      <div className="flex-col items-center">
        <h1>Our products</h1>
        <h3>Assortment</h3>
      </div>
      {ProductsArray.map((product) => (
        <>
          <div>
            <img src="{product.img}" alt="${product.title}" />
          </div>
          <div>{product.title}</div>
        </>
      ))}
    </div>
  );
};

export default Products;
