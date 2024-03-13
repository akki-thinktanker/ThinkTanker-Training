// indexof returns first index for given element

const names = ["akki", "vvk", "pri", "raj", "hom","vvk", "pri",];

console.log(names.indexOf("4")); // if something not found it return -1

const idx = names.indexOf("vvk");
// it returns first occurance of element as index from given arr

names[idx] = "vivek";

if (idx > -1) console.log(names);


// ////////////////////////////

// for finding indexOf at end 

// lastIndexOf

const lastIdx = names.lastIndexOf('pri')

console.log(lastIdx)

