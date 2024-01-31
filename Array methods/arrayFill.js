const num = [1,2,3,4,5,6]

// const num2 = num.fill(0)
// modifies original array

// console.log(num)

// you can specify start and ending index for filling

// num.fill(0, 1,4)
// console.log(num)
 


// //////////////////////////////////////////////

// getting an value upto n using fill 

function fillInNumbers(n)
{
    return Array(n)
            .fill(0)
            .map((_, idx) => {
                return idx + 1;
            })
}

const numUpto10 = fillInNumbers(10)
console.log(numUpto10)