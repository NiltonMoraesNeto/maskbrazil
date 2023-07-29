import React, { InputHTMLAttributes, useCallback } from "react";
import "./styles.css";
import { cep, currency, cpfcnpj, telefone, mascaraData } from "./maskBrazil";
import {
  telefoneDE,
  telefoneGB,
  telefoneAL,
  telefoneBR,
  telefoneGeralDdi02,
  telefoneAD,
  telefoneAO,
  telefoneAmericaNorte,
  telefoneAN,
  telefoneAR,
  telefoneDZ,
} from "./masksPhonesDDI";
import apiListCountriesBR from "../PhoneDDI/ListCountries/ptBR/listCountries.json";
import apiListCountriesUS from "../PhoneDDI/ListCountries/enUS/listCountries.json";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask:
    | "cep"
    | "currency"
    | "cpfcnpj"
    | "telefone"
    | "mascaraData"
    | "telefoneDE"
    | "telefoneGB"
    | "telefoneAL"
    | "telefoneBR"
    | "telefoneGeralDdi02"
    | "telefoneAD"
    | "telefoneAO"
    | "telefoneAmericaNorte"
    | "telefoneAN"
    | "telefoneAR"
    | "telefoneDZ";
  prefix?: string;
  countryLanguage?: string;
  //countryLanguage?: typeof apiListCountriesBR | typeof apiListCountriesUS;
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
      if (mask === "telefoneBR") {
        telefoneBR(e);
      }
      if (mask === "telefoneDE") {
        telefoneDE(e);
      }
      if (mask === "telefoneGB") {
        telefoneGB(e);
      }
      if (mask === "telefoneAL") {
        telefoneAL(e);
      }
      if (mask === "telefoneGeralDdi02") {
        telefoneGeralDdi02(e);
      }
      if (mask === "telefoneAD") {
        telefoneAD(e);
      }
      if (mask === "telefoneAO") {
        telefoneAO(e);
      }
      if (mask === "telefoneAmericaNorte") {
        telefoneAmericaNorte(e);
      }
      if (mask === "telefoneAN") {
        telefoneAN(e);
      }
      if (mask === "telefoneAR") {
        telefoneAR(e);
      }
      if (mask === "telefoneDZ") {
        telefoneDZ(e);
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
