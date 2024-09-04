import moment from "moment";
import { client } from "./contenful";

const CtfArticle = {
  getAllPosts: async (slug, id, limit, page) => {
    console.log(moment().toISOString(true));
    var res = await client.getEntries({
      content_type: "sate",
      "fields.slug[match]": slug,
      "fields.date[lte]": moment().add(7, "hour").toISOString(true),
      include: limit,
    });
    return res;
  },
};

export default CtfArticle;
