export default {
  name: "post",
  title: "Posts",
  type: "document",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "person" }],
      validation: Rule => Rule.required()
    },
    {
      title: "Tag people",
      name: "taggedPersons",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "person" }]
        }
      ]
    },
    {
      title: "Published",
      name: "published",
      type: "datetime",
      validation: Rule => Rule.required()
    },
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [{ type: "postImage" }]
    },
    {
      title: "Likes",
      name: "likes",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "person" }]
        }
      ]
    },
    {
      title: "Comments",
      name: "comments",
      type: "array",
      of: [
        {
          type: "comment"
        }
      ]
    }
  ],
  initialValue: () => ({
    published: new Date().toISOString()
  }),
  preview: {
    select: { author: "author.name", date: "published" },
    prepare(selection) {
      const { author, date } = selection;
      const [year, month, day] = date.split("T")[0].split("-");

      return {
        title: `${day}.${month}.${year}`,
        subtitle: `By: ${author ? author : "unknown"}`
      };
    }
  }
};
