console.log("Products js file")


// named export
export let order = function(buyer, item){
    console.log(`${buyer} ordered this ${item}`)
}

// Multiple values

let laptopPrice = 50000
let quantity = 25;

// you can rename using as keyword
// export {laptopPrice, quantity as quant};


// default exports

export default order