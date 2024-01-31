// find element index and return it

const nums = [1,2,3,4,5]

const res = nums.findIndex(find3)

function find3(val,idx,arr)
{
    return val === 4
}


console.log(res)