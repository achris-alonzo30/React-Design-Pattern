export const NumberList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return ( 
    <>
      {items.map((item, i) => (
        <div className="flex flex-between items-center gap-2" key={i}>
          <h3 className="flex text-center items-center justify-center text-lg text-slate-500 font-bold border-2 border-slate-500 rounded-full w-10 h-10">{i + 1}</h3>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </div>
      ))}
    </>
  );
};
