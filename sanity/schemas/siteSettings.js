export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  liveEdit: false,
  fields: [
    {
      name: "siteName",
      title: "Site name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "siteUrl",
      title: "Site URL",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      description: "File format must be SVG",
      validation: (Rule) => Rule.required(),
      options: {
        accept: ["image/svg+xml"],
      },
    },
  ],
  preview: {
    prepare: () => ({
      title: "Site Settings",
    }),
  },
};
