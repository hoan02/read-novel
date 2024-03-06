import slugify from "slugify";

const generateSlug = (name) => {
  const slug = slugify(name, { replacement: "-", lower: true });
  return slug;
};

export default generateSlug;
