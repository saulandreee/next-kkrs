import { client } from "./contenful";

const CtfArticle = {
  getAllPosts: async (slug, id, limit, page) => {
    var res = await client.getEntries({ content_type: "posts" });

    return res;
  },
};

export default CtfArticle;
