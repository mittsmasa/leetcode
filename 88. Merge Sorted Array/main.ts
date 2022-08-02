function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const res = nums1
    .concat(nums2)
    .filter((n) => n !== 0)
    .sort((a, b) => a - b);
  console.log(res);
  for (let i = 0; i < res.length; i++) {
    nums1[i] = res[i];
  }
}
