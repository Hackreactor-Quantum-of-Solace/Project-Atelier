const axios = require('axios');

const rerouteToAPI = (req, res) => {
  axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${req.url}`, {
    method: req.method,
    headers: { Authorization: req.headers.Authorization }
  })
  .then(response => res.status(200).send(response.data))
  .catch(err => console.log(`error getting data from api`, err));
}

module.exports = rerouteToAPI;