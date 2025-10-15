
//--------------------------------------------------------
// supprime un element d'un tableau en fonction de son id

export function deleteItem(array, li_Id) {
  console.log(array.filter((item) => item.id !== li_Id)); //garde les items differents de li_Id
  return array.filter((item) => item.id !== li_Id); //renvoie ce tableau
}
