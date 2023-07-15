export default function bubble(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        nowSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}