import Nav from "./components/Navbar/Nav";
import Background from "./components/background/Background"
import Profiles from "./components/profiles/Profiles";

export default function App() {
  return (
    <div className="App">
      <Background />
      <Nav />
      <Profiles />
    </div>
  );
}