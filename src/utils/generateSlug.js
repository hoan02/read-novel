import slugify from "slugify";

export const generateSlug = (name) => {
  const slug = slugify(name, { replacement: "-", lower: true });
  return slug;
};
