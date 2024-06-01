import { useState } from "react";

export const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);

  function showModal() {
    setShouldShow(true);
  }
  function hideModal() {
    setShouldShow(false);
  }

  return (
    <>
      <button
        className="bg-slate-500 px-4 py-2 rounded-xl hover:bg-slate-700 text-white text-xl"
        onClick={showModal}
      >
        Show Modal
      </button>
      {shouldShow && (
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
      )}
    </>
  );
};
