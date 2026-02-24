import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import StudentDashboard from "./components/StudentDashboard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <StudentDashboard />
      <Footer />
    </div>
  );
}

export default App;
