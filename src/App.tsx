import { memory } from "console";
import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";

import icon from "./assets/agrotis-developers.png";

const Container = styled.div`
  font-family: "Courier New", Courier, monospace;
  background: red;
  display: flex;
  max-width: 1280px;
  min-height: 640px;
  margin: 0 auto;
  background: gray;
  border: 1px solid #d3d3d3;
  .white {
    color: white;
  }

  .bold {
    font-weight: bold;
  }

  .display-flex {
    display: flex;
  }

  .flex-direction-column {
    flex-direction: column;
  }

  .flex-1 {
    flex: 1;
  }

  .justify-content-flex-end {
    justify-content: flex-start;
    text-align: left !important;
  }

  .text-left {
    text-align: left !important;
  }

  section {
    background: whitesmoke;
    flex: 1;

    .header {
      background: white;
      border-bottom: 1px solid #d3d3d3;
      text-align: center;

      img {
        height: 30px;
      }

      h1 {
        text-align: center;
        font-weight: bold;
        font-family: sans-serif;
      }
    }
  }
`;

const Aside = styled.aside`
  background: red;
  background: linear-gradient(
    to left,
    #29323c,
    #485563
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  /* display: flex;
  flex-direction: column; */

  div {
    opacity: 0.5;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    display: flex;
    align-self: center;
    padding: 8px;

    justify-content: center;

    &:hover {
      opacity: 1;
      cursor: pointer;
      border-left: 5px solid green;
    }

    i {
      font-size: 20px;
      color: white;
      position: relative;
    }
  }
`;

const HomeView = styled.div`
  background: red;
  padding: 30px;
  background: whitesmoke;
  height: auto;

  .content-main {
    display: flex;

    .item {
      width: 300px;
      background: white;
      border: 1px solid #d3d3d3;
      margin: 10px 10px 10px 0px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      text-align: center;
      cursor: pointer;

      &:hover {
        border-bottom: 1px solid gray;
      }

      i {
        font-size: 5em;
        color: gray;
      }

      span:nth-child(2) {
        margin-top: 20px;
        font-weight: bold;
        font-family: sans-serif;
      }
    }
  }
`;

const CadasterView = styled.div`
  padding: 0 90px;

  .border-red {
    border: 1.5px solid red !important;
  }

  header {
    padding: 20px;

    background: linear-gradient(to right, #605c3c, #3c3b3f);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .button-back {
      color: white;
      font-size: 1.5em;

      &:hover {
        color: wheat;
        cursor: pointer;
      }
    }

    span:nth-child(2) {
      display: flex;
      flex: 1;
      margin: 0 15px;

      justify-content: flex-start;
    }

    button {
      background: #3c3b3f;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;

      &:hover {
        background: white;
        color: black;
      }
    }
  }

  .section-cadaster__middler {
    background: white;
    display: flex;

    box-shadow: 10px 3px 15px -7px #d3d3d3,
      3px 0px 27px -5px rgba(0, 0, 0, 0.64);

    .col {
      span {
        display: flex;
        margin: 5px;
        background: #d3d3d3;
        padding: 20px;
        border-radius: 50%;
        font-size: 1.5em;
        box-shadow: 0px 10px 13px -7px #000000,
          5px 5px 15px 5px rgba(0, 0, 0, 0);

        transition: 0.2s;

        i {
          color: gray;
        }

        &:hover {
          box-shadow: 0px 10px 13px -7px gray, 5px 5px 15px 5px rgba(0, 0, 0, 0);
        }
      }
    }

    .col-6 {
      flex: 10;

      select {
        width: 230px;

        padding: 5px;
        border: 1px solid #d3d3d3;

        &:focus {
          outline: none;
        }
      }

      input {
        width: 230px;
        padding: 5px;
        border: 1px solid #d3d3d3;
      }

      input:focus {
        border-bottom: 1px solid #3c3b3f;
        outline: none;
      }

      .flex {
        display: flex;
      }

      .flex-1 {
      }

      .flex-2 {
      }

      .i {
        align-items: flex-end;
      }

      .margin-5 {
        margin: 10px 10px 10px 0px;
      }

      .flex-direction-column {
        flex-direction: column;
      }
    }
  }

  .section-cadaster__bottom {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 10px;
    border: 1px solid #d3d3d3;
    box-shadow: 10px 3px 15px -7px #d3d3d3,
      3px 14px 27px -5px rgba(0, 0, 0, 0.64);

    h3 {
      margin: 5px 0px;
    }

    .col {
      align-items: flex-end;
    }

    input {
      padding: 5px;
      border: 1px solid #d3d3d3;
    }

    input:focus {
      border-bottom: 1px solid #3c3b3f;
      outline: none;
    }

    .flex {
      display: flex;
    }

    .flex-2 {
      flex: 1;
    }

    .margin-5 {
      margin: 10px 10px 10px 0px;
    }
  }
`;

const ListCompanieView = styled.div`
  padding: 30px;

  header {
    padding: 20px;

    background: linear-gradient(to right, #605c3c, #3c3b3f);

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .button-back {
      color: white;
      margin: 0px 15px 0px 0px;
    }
  }

  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
  }

  table {
    border-collapse: collapse;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
    border: 1px solid #d3d3d3;

    thead {
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
      background: white;

      tr {
        th {
          vertical-align: bottom;
          border-bottom: 2px solid #dee2e6;

          padding: 0.75rem;
          vertical-align: top;
          border-top: 1px solid #dee2e6;
        }
      }
    }

    tbody {
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;

      &:nth-child(2n + 0) {
        background: whitesmoke !important;
      }

      &:hover {
        background: wheat !important;
      }

      tr {
        background: white;

        &:nth-child(2n + 0) {
          background: whitesmoke !important;
        }

        &:hover {
          background: wheat !important;
        }

        td {
          vertical-align: bottom;
          border-bottom: 2px solid #dee2e6;

          padding: 0.75rem;
          vertical-align: top;
          border-top: 1px solid #dee2e6;
          cursor: pointer;
          text-align: center;
        }
      }
    }
  }
`;

interface Data {
  select: string;
  myDocument: string;
  nameCompleteOrCompanyName: string;
  email: string;
  cep: string;
  address: string;
  number: string;
  complement: string;
  district: string;
  uf: string;
  city: string;
  openingDate: string;
}

function App() {
  const [page, setPage] = useState("HOME");
  const [dataSaved, setDataSaved] = useState<Data[]>();
  const [cpf, setCpf] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [myDoc, setMyDoc] = useState("");
  const [myDocError, setMyDocError] = useState("");
  const [nameOrCompany, setNameOrCompany] = useState("");
  const [nameOrCompanyError, setNameOrCompanyError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cep, setCep] = useState("");
  const [cepError, setCepError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [numbers, setNumbers] = useState("");
  const [numbersError, setNumbersError] = useState("");
  const [complement, setComplement] = useState("");
  const [complementError, setComplementError] = useState("");
  const [district, setDistrict] = useState("");
  const [districtError, setDistrictError] = useState("");
  const [uf, setUf] = useState("");
  const [ufError, setUfError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [openingDate, setOpeningDate] = useState("");
  const [openingDateError, setOpeningDateError] = useState("");

  useEffect(() => {
    async function init() {
      console.log("testando");

      //pega item do localstorage
      const dataStorage = localStorage.getItem("item");
      //converte, caso exista não vira um objeto vazio
      const getData = JSON.parse(dataStorage || "[]");

      setDataSaved(getData);
    }
    init();
  }, []);

  function handleSaved() {
    if (cpf === "Escolha" || cpf.length === 0) {
      setCpfError("border-red");
      return;
    } else {
      setCpfError("");
    }

    if (myDoc.length === 0) {
      setMyDocError("border-red");
      return;
    } else {
      setMyDocError("");
    }

    if (nameOrCompany.length === 0) {
      setNameOrCompanyError("border-red");
      return;
    } else {
      setNameOrCompanyError("");
    }

    if (email.length === 0) {
      setEmailError("border-red");
      return;
    } else {
      setEmailError("");
    }

    if (openingDate.length === 0) {
      setOpeningDateError("border-red");
      return;
    } else {
      setOpeningDateError("");
    }

    if (cep.length === 0) {
      setCepError("border-red");
      return;
    } else {
      setCepError("");
    }

    if (address.length === 0) {
      setAddressError("border-red");
      return;
    } else {
      setAddressError("");
    }

    if (numbers.length === 0) {
      setNumbersError("border-red");
      return;
    } else {
      setNumbersError("");
    }

    if (complement.length === 0) {
      setComplementError("border-red");
      return;
    } else {
      setComplementError("");
    }

    if (district.length === 0) {
      setDistrictError("border-red");
      return;
    } else {
      setDistrictError("");
    }

    if (uf.length === 0) {
      setUfError("border-red");
      return;
    } else {
      setUfError("");
    }

    if (city.length === 0) {
      setCityError("border-red");
      return;
    } else {
      setCityError("");
    }

    const item = [];

    item.push({
      select: cpf,
      myDocument: myDoc,
      nameCompleteOrCompanyName: nameOrCompany,
      email: email,
      cep: cep,
      address: address,
      number: numbers,
      complement: complement,
      district: district,
      uf: uf,
      city: city,
      openingDate: openingDate,
    });

    //pega item do localstorage
    const dataStorage = localStorage.getItem("item");
    //converte, caso exista não vira um objeto vazio
    const getData = JSON.parse(dataStorage || "[]");
    //junta os dois array, do localstorage e o novo da data
    const dataFinal = getData.concat(item);
    //converte para ser inserido no localstorage
    const dataStringfy = JSON.stringify(dataFinal);
    setDataSaved(dataFinal);
    localStorage.setItem("item", dataStringfy);
    alert("salvo com sucesso");
  }

  function handleOnchangeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setCpf(event.target.value);
  }

  const ComponentHome = () => {
    return (
      <HomeView>
        <div>
          <h1>Inicio</h1>
        </div>
        <div className="content-main">
          <div
            className="item"
            id="list-companies"
            onClick={() => setPage("LIST_COMPANIES")}
          >
            <span>
              <i className="fas fa-building"></i>
            </span>
            <span>Listar empresas</span>
          </div>
          <div
            className="item"
            id="register-companies"
            onClick={() => setPage("CADASTER")}
          >
            <span>
              <i className="fas fa-store"></i>
            </span>
            <span>Cadastrar empresas</span>
          </div>
        </div>
      </HomeView>
    );
  };

  const ComponentListCompanies = () => {
    return (
      <ListCompanieView>
        <header>
          <span className="button-back">
            <i className="fas fa-arrow-left"></i>
          </span>
          <span className="white bold">Empresas </span>
        </header>
        <table className="table">
          <thead>
            <tr>
              <th className="display-flex flex-direction-column text-left">
                Indentificação
              </th>
              <th>Cidade/UF</th>
              <th>CEP</th>
              <th>Data de abertura</th>
            </tr>
          </thead>
          {dataSaved &&
            dataSaved.map((i: Data, key: number) => {
              return (
                <tbody key={key}>
                  <tr>
                    <td className="display-flex flex-direction-column text-left">
                      <span>${i.select}</span>
                      <span className="gray">${i.city}</span>
                    </td>
                    <td>${i.city}/PR</td>
                    <td>${i.cep}</td>
                    <td>${i.openingDate}</td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </ListCompanieView>
    );
  };

  return (
    <Container>
      <Aside>
        <div id="home" onClick={() => setPage("HOME")}>
          <i className="fas fa-arrow-alt-circle-up"></i>
        </div>
        <div id="list-companies" onClick={() => setPage("LIST_COMPANIES")}>
          <i className="fas fa-building"></i>
        </div>
        <div id="register-companies" onClick={() => setPage("CADASTER")}>
          <i className="fas fa-store"></i>
        </div>
      </Aside>
      <section>
        <header className="header">
          <img src={icon} alt="agrotis icone" />
        </header>
        <div className="container">
          {page === "HOME" ? <ComponentHome /> : null}
          {page === "LIST_COMPANIES" ? <ComponentListCompanies /> : null}
          {page === "CADASTER" ? (
            <CadasterView className="section-cadaster">
              <header>
                <span className="button-back">
                  <i className="fas fa-arrow-left"></i>
                </span>
                <span className="white">
                  Empresas / <span className="bold">Cadastrar Empresa</span>
                </span>
                <button onClick={handleSaved}>Salvar</button>
              </header>

              <div className="section-cadaster__middler">
                <div className="col">
                  <span>
                    <i className="fas fa-camera"></i>
                  </span>
                </div>
                <div className="col-6">
                  <div className="flex i">
                    <div className="flex flex-direction-column margin-5 flex-1">
                      <label htmlFor="cpf" className="bold">
                        Tipo de documento
                      </label>
                      <select
                        className={`${cpfError}`}
                        id="cpf"
                        onChange={handleOnchangeSelect}
                      >
                        <option>Escolha</option>
                        <option value="cpf">CPF</option>
                        <option value="cnpj">CNPJ</option>
                      </select>
                    </div>
                    <div className="margin-5 flex-2">
                      <input
                        className={`${myDocError}`}
                        placeholder="Documento"
                        type="text"
                        id="document"
                        onChange={(event) => setMyDoc(event.target.value)}
                      />
                    </div>
                    <div className="margin-5 flex-2">
                      <input
                        className={`${nameOrCompanyError}`}
                        placeholder="Nome completo/razão social"
                        type="text"
                        id="name-complete-or-company-name"
                        onChange={(event) =>
                          setNameOrCompany(event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="flex margin-5">
                    <div className="margin-5 flex-2">
                      <input
                        className={`${emailError}`}
                        placeholder="E-mail"
                        type="email"
                        id="email"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <div className="margin-5 flex-2">
                      <input
                        className={`${openingDateError}`}
                        placeholder="Data de abertura"
                        type="text"
                        id="opening-date"
                        onChange={(event) => setOpeningDate(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-cadaster__bottom">
                <div className="flex margin-5 col">
                  <div className="margin-5">
                    <h3 className="bold">Endereço</h3>
                    <input
                      className={`${cepError}`}
                      placeholder="CEP"
                      type="text"
                      id="cep"
                      onChange={(event) => setCep(event.target.value)}
                    />
                  </div>
                  <div className="margin-5">
                    <input
                      className={`${addressError}`}
                      placeholder="Endereço"
                      id="address"
                      type="text"
                      onChange={(event) => setAddress(event.target.value)}
                    />
                  </div>
                </div>

                <div className="flex margin-5">
                  <div className="margin-5 flex-2">
                    <input
                      className={`${numbersError}`}
                      placeholder="Número"
                      type="number"
                      id="number"
                      onChange={(event) => setNumbers(event.target.value)}
                    />
                  </div>
                  <div className="margin-5 flex-2">
                    <input
                      className={`${complementError}`}
                      placeholder="Complemento"
                      type="text"
                      id="complement"
                      onChange={(event) => setComplement(event.target.value)}
                    />
                  </div>
                  <div className="margin-5 flex-2">
                    <input
                      placeholder="Bairro"
                      className={`${districtError}`}
                      type="text"
                      id="district"
                      onChange={(event) => setDistrict(event.target.value)}
                    />
                  </div>
                  <div className="margin-5 flex-2">
                    <input
                      className={`${ufError}`}
                      placeholder="UF"
                      type="text"
                      id="uf"
                      onChange={(event) => setUf(event.target.value)}
                    />
                  </div>
                  <div className="margin-5 flex-2">
                    <input
                      className={`${cityError}`}
                      placeholder="Cidade"
                      type="text"
                      id="city"
                      onChange={(event) => setCity(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CadasterView>
          ) : null}
        </div>
      </section>
    </Container>
  );
}

export default App;
