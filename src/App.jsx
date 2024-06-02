import "./App.css";
import { useState } from "react";
import { ControlledForm } from "./Components/ControlledForm";

import { ControlledModal } from "./Components/ControlledModal";
import { Onboarding } from "./Components/Onboarding/Onboarding";

function App() {
  const [shouldShow, setShouldShow] = useState(false);
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({
      ...onboardingData,
      ...stepData
    });

    setCurrentIndex(currentIndex + 1)
  };

  function showModal() {
    setShouldShow(true);
  }
  function hideModal() {
    setShouldShow(false);
  }
  return (
    <main className="flex flex-col p-6 bg-background gap-4">
      <header className="text-center">
        <h1 className="font-bold text-4xl text-slate-500">
          Controlled & Uncontrolled Components
        </h1>
      </header>
      <button
        className="bg-slate-500 px-4 py-2 rounded-xl hover:bg-slate-700 text-white text-xl"
        onClick={showModal}
      >
        Create Account
      </button>
      {shouldShow && (
        <ControlledModal showModal={showModal} hideModal={hideModal}>
          <ControlledForm />
        </ControlledModal>
      )}

      <Onboarding currentIndex={currentIndex} onNext={onNext}>

      </Onboarding>
    </main>
  );
}

export default App;
