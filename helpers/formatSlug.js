const formatSlug = (slug) => {
  let newSlug = slug.replace(/[-]/gi, ' ');
  let upper = newSlug[0].toUpperCase() + newSlug.slice(1);
  return upper;
};

export default formatSlug;
