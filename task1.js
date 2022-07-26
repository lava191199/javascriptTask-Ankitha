const evenOrPrime = (number) =>{
    return number % 2 === 0 ? `${number} is  Even` : `${number} is Odd`
}
let result = evenOrPrime(3);
console.log(result);

let data = [{ name:'abc', age: 50}, {name: 'xyzzy', age: 40}];
const retiredAge = (arr)=>{
    return arr?.map((item) => ({...item, retired: item?.age > 49}));
}
let res = retiredAge(data);
console.log(res);