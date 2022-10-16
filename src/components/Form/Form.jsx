import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import "./Form.css";

const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject,
    };
    tg.sendData(JSON.stringify(data));
  }, [country, street, subject]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, []);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Відправити дані",
    });
  }, []);

  useEffect(() => {
    if (!country || !street) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className="form">
      <h3>Введіть Ваші дані</h3>
      <input
        type="text"
        value={country}
        onChange={onChangeCountry}
        placeholder="Країна"
        className="input"
      />
      <input
        type="text"
        value={street}
        onChange={onChangeStreet}
        placeholder="Вулиця"
        className="input"
      />
      <select className="select" value={subject} onChange={onChangeSubject}>
        <option value={"physical"}>Фіз. особа</option>
        <option value={"legal"}>Юр. особа</option>
      </select>
    </div>
  );
};

export default Form;
