import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./style.css";

const Application = ({ handleLogout }) => {
  const [text1, setText1] = useState();
  const [text2, setText2] = useState();
  const [text3, setText3] = useState();
  const [country1, setCountry1] = useState([]);
  const [country2, setCountry2] = useState([]);
  const [country3, setCountry3] = useState([]);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(1);
  useEffect(() => {
    getdata();
  }, []);
  async function getdata() {
    const result = await Axios.get(
      "http://data.fixer.io/api/latest?access_key=29d8451e7127c1eab9d09ff5ae7d8412"
    );
    console.log(result.data.rates);
    setCountry1(result.data.rates);
    setCountry2(result.data.rates);
    setCountry3(result.data.rates);
    console.log(Object.keys(country1));
  }
  const convert = () => {
    const num = (value2 / value1) * text1;
    setText2(num);
    const num2 = (value3 / value1) * text1;
    setText3(num2);
  };
  return (
    <section className="hero">
      <nav>
        <h2>Currency Conveter</h2>
        <button className="logoutbtn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <section className="login">
        <div className="loginContainer">
          <div className="field1">
            <input
              type="text"
              value={text1 || ""}
              onChange={(e) => setText1(e.target.value)}
            />
            <select onChange={(e) => setValue1(e.target.value)}>
              {Object.keys(country1).map((value, i) => (
                <option key={i} value={country1[value]}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="box">
            <div className="field2">
              <input
                type="text"
                value={text2 || ""}
                onChange={(e) => setText2(e.target.value)}
              />
              <select onChange={(e) => setValue2(e.target.value)}>
                {Object.keys(country2).map((value, i) => (
                  <option key={i} value={country1[value]}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="field3">
              <input
                type="text"
                value={text3 || ""}
                onChange={(e) => setText3(e.target.value)}
              />
              <select onChange={(e) => setValue3(e.target.value)}>
                {Object.keys(country3).map((value, i) => (
                  <option key={i} value={country1[value]}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="btn">
            <button onClick={convert}>Convert</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Application;
