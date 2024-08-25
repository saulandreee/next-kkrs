import { articleAxios } from "./axiosConfig";

export const graphqlRequest = async (query) => {
  var res = await articleAxios
    .post("", query)
    .then((resgraphql) => {
      // console.log(resgraphql);
      return { ...resgraphql, data: resgraphql.data };
    })
    .catch((err) => {
      return err;
    });
  return res;
};
