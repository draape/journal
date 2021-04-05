import { MdPhotoLibrary } from "react-icons/md";

export default {
  name: "post",
  title: "Posts",
  type: "document",
  icon: MdPhotoLibrary,
  fields: [
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Tag people",
      name: "taggedPersons",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "person" }],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      title: "Published",
      name: "published",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [{ type: "postImage" }],
    },
  ],
  initialValue: () => ({
    published: new Date().toISOString(),
  }),
  preview: {
    select: {
      person1: "taggedPersons.0.name",
      person2: "taggedPersons.1.name",
      person3: "taggedPersons.2.name",
      taggedPersons: "taggedPersons",
      date: "published",
    },
    prepare(selection) {
      const { taggedPersons, date } = selection;
      const [year, month, day] = date.split("T")[0].split("-");

      const persons =
        taggedPersons && Object.values(taggedPersons).filter((x) => x);
      const unmapped = persons?.filter((x) => !x.name).length ?? 0;

      const moreText = unmapped > 0 ? ` and ${unmapped} more` : "";

      return {
        title: `${day}.${month}.${year}`,
        subtitle: `${
          persons
            ?.filter((x) => x.name)
            .map((x) => x.name)
            .join(", ") ?? ""
        } ${moreText}`,
      };
    },
  },
};
