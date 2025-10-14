
//--------------------------------------------------------
// supprime un element d'un tableau en fonction de son id

export function deleteItem(array, li_Id) {
  console.log(array.filter((item) => item.id !== li_Id));
  return array.filter((item) => item.id !== li_Id);
}


// export function dealInputId(inputValue) {
//   const cleaned = inputValue.trim();
//   let ok;

//   if (!cleaned || Number.isNaN(cleaned)) {
//     return;
//   }

//   ok = Number(cleaned);
//   return ok;
// }
