import React, { ChangeEvent, useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { Alert, Button, Input } from "@mui/material";

const InputSearchItem = () => {
  const { addNewCityCard, cityCardError } = useWeather();

  const [inputText, setInputText] = useState("");

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInputText(event.target.value);
  };

  const onAddCityCard = () => {
    addNewCityCard(inputText);
    setInputText("");
  };

  return (
    <div className="searchContainer">
      <Input
        placeholder="Add your city card"
        type="text"
        value={inputText}
        onChange={(event) => onInputChange(event)}
      />

      <Button onClick={() => onAddCityCard()} size="small" variant="contained">
        Add city
      </Button>

      <div className="error">
        {cityCardError ? <Alert severity="error">{cityCardError}</Alert> : null}
      </div>
    </div>
  );
};

export default InputSearchItem;
