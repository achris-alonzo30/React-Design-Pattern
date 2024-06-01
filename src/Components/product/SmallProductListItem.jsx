export const SmallProductListItem = ({ products }) => {
  const { name, price } = products;
  return (
    <aside className="flex flex-col items-center border border-slate-500 rounded-lg py-1 my-4 bg-white">
      <hgroup className="flex gap-2">
        <h4 className="text-lg text-slate-500">
          <strong>Name</strong>: {name}
        </h4>
        |
        <p className="text-lg text-slate-500">
          <strong>Price</strong>: ${price}
        </p>
      </hgroup>
    </aside>
  );
};
