import "./App.css";
import { LeftComponent } from "./Components/LeftComponent";
import { RightComponent } from "./Components/RightComponent";
import { SplitScreen } from "./Components/SplitScreen";
import { Modal } from './Components/modal/Modal';
import { LargePersonListItem } from './Components/person/LargePersonListItem';
import { people } from '../lib/data';
function App() {
  return (
    <main className="flex flex-col p-6 bg-background gap-4">
      <header className="text-center">
        <h1 className="font-bold text-4xl text-slate-500">
          Layout Components
        </h1>
        <Modal>
          <LargePersonListItem person={people[0]} />
        </Modal>
      </header>
      <SplitScreen>
        <LeftComponent />
        <RightComponent />
      </SplitScreen>
    </main>
  );
}

export default App;
