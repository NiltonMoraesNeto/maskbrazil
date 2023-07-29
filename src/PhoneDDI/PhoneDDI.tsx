import React, { useEffect, useState } from "react";
import Select from "react-select";
import apiListCountriesBR from "./ListCountries/ptBR/listCountries.json";
import apiListCountriesUS from "./ListCountries/enUS/listCountries.json";
import InputTelefone from "../mascaras";
import "../App.css";

export interface CountrySelectResponse {
  value: string;
  label: string;
  flag: string;
}

interface InputComponentProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  countryLanguage?: string;
}

export const countryDefault: readonly CountrySelectResponse[] = [
  {
    value: "+55",
    label: "Brasil",
    flag: "../country-flag-icons/BR.svg",
  },
];

const PhoneDDI: React.FC<InputComponentProps> = ({
  value,
  defaultValue,
  onChange,
  countryLanguage,
}) => {
  const [inputValue, setInputValue] = useState<string>(
    value || defaultValue || ""
  );
  const [countryMask, setCountryMask] = useState("");
  //const [countryLanguage, setCountryLanguage] = useState("");
  const [flag, setFlag] = useState("./country-flag-icons/BR.svg");
  const [listCountries, setListCountries] = useState<
    Array<CountrySelectResponse>
  >([]);

  useEffect(() => {
    (async () => {
      const response =
        (await countryLanguage) === "apiListCountriesBR"
          ? apiListCountriesBR
          : apiListCountriesUS;
      const dataChangedSelect = response.map((dado) => ({
        value: dado.dial_code,
        label: dado.name,
        flag: dado.code,
      }));
      setListCountries(dataChangedSelect);
      setInputValue("+55");
    })();
  }, []);

  const handleChange = async (e: any) => {
    const tamanhoTexto = e?.value;
    if (tamanhoTexto !== undefined) {
      setInputValue(e.value);
      setFlag("./country-flag-icons/" + e.flag + ".svg");
      if (e.value === "+599") setFlag("./country-flag-icons/NL.svg");

      setCountryMask(e.value);
    } else {
      setInputValue("");

      setFlag("./country-flag-icons/WoF.svg");
    }
  };

  const handlePhone = (event: any) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const DropdownIndicator = () => (
    <div>
      <img className="" src={flag} alt="" width="60" height="60"></img>
    </div>
  );

  return (
    <div className="">
      <span className="">
        <div className="" style={{ display: "flex" }}>
          <Select
            onChange={handleChange}
            options={listCountries}
            defaultValue={countryDefault[0]}
            isClearable
            isSearchable
            placeholder="Buscar por pais..."
            className=""
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "hotpink",
                primary: "#212b46",
              },
            })}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "#fff",
                width: "250px",
              }),
            }}
            components={{ DropdownIndicator, IndicatorSeparator: null }}
          />
          <InputTelefone
            name="phoneDDI"
            id="phoneDDI"
            type="text"
            mask={
              countryMask === "+49"
                ? "telefoneDE"
                : countryMask === "+44"
                ? "telefoneGB"
                : countryMask === "+355"
                ? "telefoneAL"
                : countryMask === "+93" || countryMask === "+27"
                ? "telefoneGeralDdi02"
                : countryMask === "+376"
                ? "telefoneAD"
                : countryMask === "+244"
                ? "telefoneAO"
                : countryMask === "+1" ||
                  countryMask === "+1264" ||
                  countryMask === "+1268" ||
                  countryMask === "+1242" ||
                  countryMask === "+1246" ||
                  countryMask === "+1441" ||
                  countryMask === "+1767" ||
                  countryMask === "+1473" ||
                  countryMask === "+1671" ||
                  countryMask === "+1345" ||
                  countryMask === "+1670" ||
                  countryMask === "+1649" ||
                  countryMask === "+1340" ||
                  countryMask === "+1284" ||
                  countryMask === "+1876" ||
                  countryMask === "+1664" ||
                  countryMask === "+1939" ||
                  countryMask === "+1809" ||
                  countryMask === "+1684" ||
                  countryMask === "+1869" ||
                  countryMask === "+1758" ||
                  countryMask === "+1599" ||
                  countryMask === "+1784" ||
                  countryMask === "+1868" ||
                  countryMask === "+"
                ? "telefoneAmericaNorte"
                : countryMask === "+599"
                ? "telefoneAN"
                : countryMask === "+54"
                ? "telefoneAR"
                : countryMask === "+213"
                ? "telefoneDZ"
                : "telefoneBR"
            }
            onChange={handlePhone}
            value={value || inputValue}
            defaultValue={defaultValue}
            placeholder="Telefone"
            className=""
            countryLanguage={countryLanguage}
          />
        </div>
      </span>
    </div>
  );
};

export default PhoneDDI;
