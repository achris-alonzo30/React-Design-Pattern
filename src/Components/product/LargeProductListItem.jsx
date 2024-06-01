export const LargeProductListItem = ({ products }) => {
    const { name, price, description, rating} = products;
  return (
    <aside className="flex flex-col items-center border border-slate-500 rounded-lg py-1 my-4 bg-white">
      <hgroup className="flex flex-col items-center gap-2">
        <h4 className="text-lg text-slate-500">
          <strong>Name</strong>: {name}
        </h4>
        <p className="text-lg text-slate-500">
          <strong>Price</strong>: ${price}
        </p>
        <p className="text-lg text-slate-500">
          <strong>Rating</strong>: {rating}
        </p>
        <div className="flex gap-2 text-lg text-slate-500">
          <strong>Description: </strong>
          <p>{description}</p>
        </div>
      </hgroup>
    </aside>
  );
};
