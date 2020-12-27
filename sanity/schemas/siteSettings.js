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
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
  ],
  preview: {
    prepare: () => ({
      title: "Site Settings",
    }),
  },
};
