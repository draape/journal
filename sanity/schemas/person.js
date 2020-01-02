import icon from "react-icons/lib/md/person";

export default {
  name: "person",
  title: "Person",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: { title: "name", media: "image" }
  }
};
