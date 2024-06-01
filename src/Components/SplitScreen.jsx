export const SplitScreen = ({ children }) => {
  const [left, right] = children;

  return (
    <section className="flex gap-2">
      <article className="flex-1 bg-slate-100 border border-slate-200 rounded-xl p-4 shadow-lg shadow-slate-400">
        {left}
      </article>
      <article className="flex-1 bg-slate-100 border border-slate-200 rounded-xl p-4 shadow-lg shadow-slate-400">
        {right}
      </article>
    </section>
  );
};
