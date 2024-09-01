import moment from "moment";
import { client } from "./contenful";

const CtfArticle = {
  getAllPosts: async (slug, id, limit, page) => {
    var res = await client.getEntries({
      content_type: "sate",
      "fields.slug[match]": slug,
      "fields.date[lte]": moment().toISOString(),
      include: limit,
    });
    return res;
  },
};

export default CtfArticle;
