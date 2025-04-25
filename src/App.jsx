import "./App.css";
import NavBar from "../components/NavBar/NavBar";
import ContactHeader from "../components/ContactHeader/ContactHeader";
import ContactForm from "../components/ContactForm/ContactForm";

function App() {
  return (
    <div >
      <NavBar />
      <main className="main_container">
      <ContactHeader />
      <ContactForm/>
      </main>
    </div>
  );
}

export default App;
