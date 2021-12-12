import { languages, ILanguage } from "./Language";

const getLanguage = (defaultLanguage: string | undefined) => {
  const storedLanguage = localStorage.getItem("language");

  const browserLanguage = navigator.language.toLowerCase();

  const fallbackLanguage = Object.values(languages)[0].value;

  const claculatedLanguage = Object.values(languages).find(
    (language: ILanguage) => language.value.includes(browserLanguage)
  )?.value;

  const iLanguage =
    storedLanguage || defaultLanguage || claculatedLanguage || fallbackLanguage;

  return { iLanguage };
};

export default getLanguage;
