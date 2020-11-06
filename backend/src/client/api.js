const fetch = require("node-fetch");
const { StandardError } = require("./standardError");

const getApiAsync = async (URL) => {
  const { API_BASE_URL } = process.env;
  const response = await fetch(`${API_BASE_URL}/${URL}`);
  const data = await response.json();

  if (!response.ok) throw new StandardError(response.status, data, "apiError");

  return data;
};

module.exports = { getApiAsync };
