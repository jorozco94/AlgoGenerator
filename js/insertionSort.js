export default function insertion(arr) {
  // start iterating from the second value (because we always want to compare against the sorted side - we always assume our first value is "sorted" when starting)
  for (let i = 1; i < arr.length; i++) {
    // save our current value into a variable (we don't do swapping with insertion sort, what we do is shift larger values to the right, and when we're doing going through the sorted part i.e. when we hit a value that's smaller than our current value, we then use the value saved into this variable to place that number into the position just ahead of that smaller value)
    let currVal = arr[i];
    // j helps us keep track of our sorted array - at first iteration the only "sorted" part of our array is the 0th element so we start with i - 1
    let j = i - 1;
    // we loop through our "sorted array" using this inner loop, it's a backwards loop
    while (j >= 0 && arr[j] > currVal) {
      // due to the conditions above, the next line helps us move larger values to the right
      arr[j + 1] = arr[j]
      // decrement j since we're looking backwards thru the sorted part of ourarray
      j--;
    }
    // after looping through the sorted part of our array, we break out when we hit something that's smaller than our current value, this signals to us that we need to move our currVal to one ahead of where that smaller value is indexed
    arr[j + 1] = currVal;
  }
  return arr
}