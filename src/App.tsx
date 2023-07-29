import React, { useState, useCallback } from "react";

import Input from "./mascaras";
import "./App.css";
import PhoneDDI from "./PhoneDDI/PhoneDDI";
import apiListCountriesBR from "./PhoneDDI/ListCountries/ptBR/listCountries.json";
import apiListCountriesUS from "./PhoneDDI/ListCountries/enUS/listCountries.json";

interface Usuario {
  cep: string;
  cpfcnpj: string;
  telefone: string;
  mascaraData: string;
  price: number;
}

const App: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setUsuario({
        ...usuario,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [usuario]
  );

  function handleTeste(e: any) {
    console.log(e);
  }

  return (
    <div className="container">
      <div className="containerInput">
        <Input
          name="cep"
          mask="cep"
          onChange={handleChange}
          placeholder="CEP"
        />
      </div>
      <div className="containerInput">
        <Input
          name="cpfcnpj"
          mask="cpfcnpj"
          onChange={handleChange}
          placeholder="CPF / CNPJ"
        />
      </div>
      <div className="containerInput">
        <Input
          name="price"
          mask="currency"
          prefix="R$"
          placeholder="DINDIN"
          onChange={handleChange}
        />
      </div>
      <div className="containerInput">
        <Input
          name="telefone"
          mask="telefone"
          onChange={handleChange}
          placeholder="TELEFONE"
        />
      </div>
      <div className="containerInput">
        <Input
          name="mascaraData"
          mask="mascaraData"
          onChange={handleChange}
          placeholder="DATA"
        />
      </div>
      <div className="containerInput">
        <PhoneDDI
          value=""
          defaultValue=""
          onChange={handleTeste}
          countryLanguage="apiListCountriesBR"
        />
      </div>
    </div>
  );
};

export default App;
