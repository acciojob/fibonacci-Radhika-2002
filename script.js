function fibonacci1(num) {
  let arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[num];
}

module.exports = fibonacci;
