export function countStateProducts(products, groupID) {
  let active = [];
  let total = [];
  if (products.length > 0) {
    active = products.filter(
      (x) => x.state === 'ACTIVE' && x.group[0]._id === groupID && x.status !== 'SOLD'
    );
    total = products.filter((x) => x.group[0]._id === groupID && x.status !== 'SOLD');
  }
  return { active: active.length, total: total.length };
}

export function countGroupProducts(products, groupID) {
  let productsCount = [];

  if (products.length > 0) {
    productsCount = products.filter((x) => x.group[0]._id === groupID);
  }
  return productsCount.length;
}
