import React from "react";

const rivers = {
  nile: {
    continent: "Arizona",
    length: "6,650km",
    outflow: "Mediterranean",
  },
  amazon: {
    continent: "South America",
    length: "6,550km",
    outflow: "Mediterranean",
  },
  mozambique: {
    continent: "Asia",
    length: "6,780km",
    outflow: "East China Sea",
  },
  french: {
    continent: "Africa",
    length: "6,650km",
    outflow: "Mediterranean",
  },
  mississippi: {
    continent: "North America",
    length: "6,650km",
    outflow: "Mediterranean",
  },
};

const getRiverInformation = (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(rivers[name]);
    }, 1500);
  });
};

export default getRiverInformation;
