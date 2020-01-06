import icon from "react-icons/lib/md/comment";

export default {
  name: "comment",
  title: "Comment",
  type: "object",
  icon,
  fields: [
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => Rule.required()
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "person" }],
      validation: Rule => Rule.required()
    }
  ]
};
