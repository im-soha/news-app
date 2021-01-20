import { token } from "./config";

const url = 'https://webhose.io/nseFilter';

export const getArticles = async (topic) => {
    const response = await fetch(
      `${url}?token=${token}&format=json&q=${topic}`
    );
    const json = await response.json();
    console.log(json);
    return json;
  };