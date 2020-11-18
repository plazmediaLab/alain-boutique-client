export function countStateProducts(products, groupID) {
  let active = [];
  let stock = [];
  if (products.length > 0) {
    active = products.filter((x) => x.state === 'ACTIVE' && x.group[0]._id === groupID);
    stock = products.filter((x) => x.state === 'STOCK' && x.group[0]._id === groupID);
  }
  return { active: active.length, stock: stock.length };
}

export function countGroupProducts(products, groupID) {
  let productsCount = [];

  if (products.length > 0) {
    productsCount = products.filter((x) => x.group[0]._id === groupID);
  }
  return productsCount.length;
}
