import { MdComment } from "react-icons/md";

export default {
  name: "comment",
  title: "Comment",
  type: "object",
  MdComment,
  fields: [
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "person" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Published",
      name: "published",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
  ],
};
