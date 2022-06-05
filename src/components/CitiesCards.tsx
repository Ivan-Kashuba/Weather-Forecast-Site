import React from "react";
import CityCardItem from "./CityCardItem";
import { Grid } from "@mui/material";

type props_T = {
  citiesNameArr: Array<string>;
};

const CitiesCards = ({ citiesNameArr }: props_T) => {
  return (
    <Grid container spacing={2}>
      {citiesNameArr.length > 0
        ? citiesNameArr.map((cityName: string, index: number) => {
            return (
              <Grid item xs={4} key={index}>
                <CityCardItem cityName={cityName} />
              </Grid>
            );
          })
        : null}
    </Grid>
  );
};

export default CitiesCards;
