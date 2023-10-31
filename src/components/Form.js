import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mail: "",
    rol: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name; //inputlar icindeki name.form elemanlarinin deger degisikliklerini kaydeder .
    const value = event.target.value;
    setformData({ ...formData, [name]: value }); //name ile hangi verinin nereye kaydedilecegini soyluyoruz. Bunu da formDataya yazdiriyoruz .
  };
  //formu gonderme islemi sirasinda submitHandler cagiriyoruz .
  const submitHandler = (e) => {
    e.preventDefault(); // default submit halinde sayfa bastan render ediliyor . react ile bunu istemiyoruz , bu yuzden preventDefault diyerek bu ozelligini kaldiriyoruz.
    console.log("submitten gelen tepki ", formData); // submitten gelen obje okunuyor.
    onSubmit(formData); //submitHandler fonksiyonu, onSubmit prop'u ile iletilen bir fonksiyonu çağırarak bu verileri App.js e iletir.
  };
  console.log("inputtan gelen deger:", formData);
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <label>
          Ad:
          <input
            type="text"
            name="firstName"
            value={formData.firstName || ""}
            onChange={changeHandler} //kullanici veri girdikce bu verileri changeHandler fonksiyonu icerisindeki formData nesnesine yukluyoruz.(Baslangicta bos olan)
          />
        </label>
        <br />
        <label>
          Soyad:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
          />
        </label>
        <br />
        <label>
          Yas:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={changeHandler}
          />
        </label>
        <br />
        <lable>
          E-posta:
          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <label>
          Rol:
          <input
            type="text"
            name="rol"
            value={formData.rol}
            onChange={changeHandler}
          />
        </label>
        <br />
        <button>Submit !</button>
      </form>
    </div>
  );
};

export default Form;
