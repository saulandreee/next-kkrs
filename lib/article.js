import moment from "moment";
import { client } from "./contenful";

const CtfArticle = {
  getAllSate: async (slug, id, limit = 10, page = 1) => {
    console.log(moment().toISOString(true));
    var res = await client.getEntries({
      content_type: "sate",
      "fields.slug[match]": slug,
      "fields.date[lte]": moment().add(7, "hour").toISOString(true),
      limit: limit,
      order: "-fields.date",
      skip: (page - 1) * limit,
    });
    return res;
  },
};

export default CtfArticle;
