/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1 = nums1
    .concat(nums2)
    .filter((n) => n !== 0)
    .sort((a, b) => a - b);
  console.log(nums1);
}
