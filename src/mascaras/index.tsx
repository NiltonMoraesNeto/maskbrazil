import React, { InputHTMLAttributes, useCallback } from "react";
import "./styles.css";
import { cep, currency, cpfcnpj, telefone, mascaraData } from "./maskBrazil";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "cep" | "currency" | "cpfcnpj" | "telefone" | "mascaraData";
  prefix?: string;
}

const Input: React.FC<InputProps> = ({ mask, prefix, ...props }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "cep") {
        cep(e);
      }
      if (mask === "currency") {
        currency(e);
      }
      if (mask === "cpfcnpj") {
        cpfcnpj(e);
      }
      if (mask === "telefone") {
        telefone(e);
      }
      if (mask === "mascaraData") {
        mascaraData(e);
      }
    },
    [mask]
  );

  return (
    <div className="input-group prefix">
      {prefix && <span className="prefix-span">{prefix}</span>}
      <input {...props} onKeyUp={handleKeyUp} />
    </div>
  );
};

export default Input;
