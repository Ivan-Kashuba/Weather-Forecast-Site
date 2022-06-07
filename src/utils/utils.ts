export const getTimefromDate = (date: Date) => {
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (minutes.toString().length === 1) {
    return hour + ":0" + minutes;
  }

  return hour + ":" + minutes;
};

const colorArr = [
  "#2b5bb8",
  "lightblue",
  "#f1f3c5",
  "#fbebc4",
  "#fae3c3",
  "#f48f63",
];

export const chooseColor = (temp: number) => {
  let color;
  if (temp <= 0) {
    color = colorArr[0];
  } else if (temp > 0 && temp < 5) {
    color = colorArr[1];
  } else if (temp >= 5 && temp < 10) {
    color = colorArr[1];
  } else if (temp >= 10 && temp < 15) {
    color = colorArr[2];
  } else if (temp >= 15 && temp < 20) {
    color = colorArr[3];
  } else if (temp >= 20 && temp < 25) {
    color = colorArr[4];
  } else if (temp >= 25) {
    color = colorArr[5];
  }
  return color;
};
