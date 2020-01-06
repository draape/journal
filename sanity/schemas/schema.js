const createSchema = require("part:@sanity/base/schema-creator");
const schemaTypes = require("all:part:@sanity/base/schema-type");
import post from "./post";
import person from "./person";
import comment from "./comment";
import postImage from "./postImage";

module.exports = createSchema({
  name: "default",
  types: schemaTypes.concat([post, person, comment, postImage])
});
