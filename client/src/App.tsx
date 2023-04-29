import logo from "./logo.svg";
import "./App.css";

import tweet from "./images/tweet.png";

function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-4 gap-2">
        <div>1</div>
        <div className="border-l border-r col-span-2 primary-col border-gray-700 min-h-screen">2</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default App;
