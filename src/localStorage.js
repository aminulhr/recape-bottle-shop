const getStroeCard = () => {
  const StroeCardString = localStorage.getItem("addTOcard");
  if (StroeCardString) {
    return JSON.parse(StroeCardString);
  }
  return [];
};

const saveCardToLS = (addTOcard) => {
  const cartSrring = JSON.stringify(addTOcard);
  localStorage.setItem("cart", cartSrring);
};

const addTOLS = (id) => {
  const addTOcard = getStroeCard();
  addTOcard.push(id);
  saveCardToLS(addTOcard);
};
export { addTOLS };
