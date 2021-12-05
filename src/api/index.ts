const api = process.env.REACT_APP_API;

export const getBooks = async () => {
  const response = await fetch(`${api}/books`);

  const data = await response.json();

  return data;
};
