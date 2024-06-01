import { RegularList } from "./RegularList";
import { people } from "../../lib/data";
import { SmallPersonListItem } from "./person/SmallPersonListItem";
import { LargePersonListItem } from "./person/LargePersonListItem";

export const LeftComponent = () => {
  return (
    <aside className="flex flex-col gap-4">
      <div className="bg-white border border-slate-500 rounded-xl p-2 shadow-md shadow-slate-400">
        <h2 className="text-center font-semibold text-xl text-slate-700">
          People
        </h2>
      </div>
      <hgroup>
        <div className="text-center ">
          <h3 className="font-semibold text-xl text-muted-foreground underline">
            Small Person List Item
          </h3>
        </div>
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={SmallPersonListItem}
        />
      </hgroup>
      <hgroup>
        <div className="text-center ">
          <h3 className="font-semibold text-xl text-muted-foreground underline">
            Large Person List Item
          </h3>
        </div>
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={LargePersonListItem}
        />
      </hgroup>
    </aside>
  );
};
