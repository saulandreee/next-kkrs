const { default: axios } = require("axios");

const articleConfig = {
  baseURL: process.env.GRAPHQL_HOST,
  heconstaders: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
};

const articleAxios = axios.create(articleConfig);

const errorHandler = (response) => {
  // console.log(response);
  return response;
};

articleAxios.interceptors.request.use(async (request) => {
  // for future use
  // console.log(request);
  return request;
});

export { articleAxios };
