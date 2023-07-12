const ProductsArray = [
  {
    id: 484848,
    title: "Cheese Sticks",
    img: "/cheese_sticks.png",
  },
  {
    id: 797979,
    title: "Yogurt",
    img: "/yogurt.png",
  },
  {
    id: 797979,
    title: "Flavored milk drinks",
    img: "/milk_drinks.png",
  },
  {
    id: 797979,
    title: "Desserts",
    img: "/desserts.png",
  },
  {
    id: 797979,
    title: "Ice cream",
    img: "/ice_cream.png",
  },
];

const Products: any = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between bg-white p-8">
      <div className="flex flex-col justify-center items-center md:items-start pb-4 md:pb-0 text-slate-600">
        <h1 className="text-xl">Our products</h1>
        <h3 className="text-sm underline underline-offset-2">Assortment</h3>
      </div>
      <div className="flex flex-col md:flex-row justify-around">
        {ProductsArray.map((product) => (
          <div className="flex flex-col items-center align-center m-4">
            <div className="flex h-20 w-20 md:h-28 md:w-28 lg:h-36 lg:w-36 pb-4">
              <img src={product.img} alt={product.title} />
            </div>
            <div className="text-sm text-center text-slate-600">
              {product.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
