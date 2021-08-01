const axios = require("axios");
const { SERVER_URL } = require("../configs");

exports.getPricesForItems = async (items) => {
  try {
    console.log(`${SERVER_URL}/prices `);
    const res = await axios.get(`${SERVER_URL}/prices`, {
      params: {
        codes: items.join(',')
      },
    });
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};
