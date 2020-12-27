import MdPerson from "react-icons/md";

export default {
  name: "person",
  title: "Person",
  type: "document",
  MdPerson,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};
