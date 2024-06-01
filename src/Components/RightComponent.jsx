import { products } from "../../lib/data";
import { NumberList } from "./NumberedList";
import { LargeProductListItem } from "./product/LargeProductListItem";
import { SmallProductListItem } from "./product/SmallProductListItem";

export const RightComponent = () => {
  return (
    <aside className="flex flex-col gap-4">
      <div className="border border-slate-500 rounded-xl p-2 shadow-md shadow-slate-400">
        <h2 className="text-center font-semibold text-xl text-slate-700">
          Products
        </h2>
      </div>
      <hgroup>
        <div className="text-center ">
          <h3 className="font-semibold text-xl text-muted-foreground underline">
            Small Person List Item
          </h3>
        </div>
        <NumberList
          items={products}
          resourceName="products"
          itemComponent={SmallProductListItem}
        />
      </hgroup>
      <hgroup>
        <div className="text-center ">
          <h3 className="font-semibold text-xl text-muted-foreground underline">
            Large Person List Item
          </h3>
        </div>
        <NumberList
          items={products}
          resourceName="products"
          itemComponent={LargeProductListItem}
        />
      </hgroup>
    </aside>
  );
};
