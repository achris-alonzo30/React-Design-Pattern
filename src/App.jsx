import "./App.css";
import { CurrentUserLoader } from "./CurrentUserLoader";

function App() {
  return (
    <main className="flex flex-col p-6 bg-background gap-4">
      <header className="text-center">
        <h1 className="font-bold text-4xl text-slate-500">
          Container Components
        </h1>
      </header>
      <CurrentUserLoader />
    </main>
  );
}

export default App;
