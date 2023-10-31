import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [takimListesi, setTakimListesi] = useState([]);

  const addMember = (formData) => {
    setTakimListesi([...takimListesi, formData]);
  };
  console.log("takim listesi :", takimListesi);

  return (
    <div className="App">
      <Form onSubmit={addMember} />

      {takimListesi && (
        <div>
          {takimListesi.map((member, index) => (
            <div key={index}>
              <h3>Member {index + 1}:</h3>
              <p>First Name : {member.firstName}</p>
              <p>Last Name : {member.lastName}</p>
              <p>Age: {member.age}</p>
              <p>Mail: {member.mail}</p>
              <p>Rol: {member.rol}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
