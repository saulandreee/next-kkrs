const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENFUL_ENVIRONMENT,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

function isPublished(entity) {
  return !!entity.sys.publishedVersion && entity.sys.version == entity.sys.publishedVersion + 1;
}

export { client };
