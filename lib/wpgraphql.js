const { graphqlRequest } = require("./graphql");

export const WPArticle = {
  getPosts: async (limit = 6, offset = undefined) => {
    var query = {
      query: `query AllPosts {
        posts(${limit ? `first:${limit},` : ""} ${offset ? `after:"${offset}",` : ""}) {
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          nodes {
            date
            slug
            title
            content
            featuredImage {
              node {
                sourceUrl
                srcSet
                caption
                altText
              }
            }
          }
        }
      }`,
    };

    var res = await graphqlRequest(query);
    console.log("==============================");
    console.log(res.data);
    return res.data;
  },
};
