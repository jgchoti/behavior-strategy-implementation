export const loop = (n) => {
let arr = []
for(let i = 0; i < n; i++){
  arr.push(i === 0 ? 0 : i === 1? 1 : arr[i-2] + arr[i-1])
}
return arr
};
