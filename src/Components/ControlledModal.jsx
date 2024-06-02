export const ControlledModal = ({ children, hideModal }) => {
  return (
    <>
      <section
        onClick={(e) => e.stopPropagation()}
        className="fixed z-50 left-0 top-0 w-full h-full overflow-auto bg-slate-900/50"
      >
        <article
          onClick={hideModal}
          className="flex flex-1 bg-auto items-center justify-center h-full p-4 w-full"
        >
          {children}
        </article>
        <button
          onClick={hideModal}
          className="bg-slate-500 px-4 py-2 rounded-xl hover:bg-slate-700 text-white text-xl"
        >
          Hide Modal
        </button>
      </section>
    </>
  );
};
