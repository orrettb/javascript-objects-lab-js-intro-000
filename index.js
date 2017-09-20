var recipes = {
  flour: "3 cups",
  sugar: "2 cups",
  butter: "1 stick"
}

function updateObjectWithKeyAndValue(obj, key, value){
  // obj[key] = value;
  // return obj;
  return obj.assign({}, obj, { [key]: value});
}
