const Validate = (newPokemon) => {
  const checkUndefined = (newPokemon) => {
    if (!newPokemon?.length) return true;
    for (let el in newPokemon) {
      if (newPokemon[el] === undefined) {
        return true;
      }
      return false;
    }
  };
  const regexUrl =
    /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i;
  const regexName = /^[a-zA-Z ]+$/;
  const checkNaN = (arr) => {
    return arr.filter((el) => isNaN(Number(el))).length; // comprueba si es NaN
  };
  const { name, img, hp, attack, defense, speed, height, weight, types } =
    newPokemon;
  const numbers = [hp, attack, defense, speed, height, weight];

  let errors = {};
  if (checkUndefined(types)) {
    errors.types = "Types are required";
  }
  if (!regexName.test(name)) {
    errors.name = "Invalid name format";
  } else if (name?.length < 4) {
    errors.name = "Name must be at least 4 characters";
  }
  

 if (checkNaN(numbers)) {
    errors.lim = "Please enter a valid number";
 }
  if (img && !regexUrl.test(img)) {
    // test
    errors.url = "Only jpg, jpeg, and png urls are allowed";
  } else if(!img){
    errors.url = "Please enter image"
  }

  return errors;
};

export default Validate;
