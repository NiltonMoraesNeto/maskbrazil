import React, { useState, useCallback } from "react";

import Input from "./mascaras";
import "./App.css";

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
    </div>
  );
};

export default App;
