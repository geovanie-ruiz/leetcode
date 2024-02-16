function searchInsert(nums, target) {
    let smallIndex = 0;
    let largeIndex = nums.length - 1;
    let checkingIndex = largeIndex;
    if (nums[checkingIndex] < target)
        return largeIndex + 1;
    while (smallIndex < largeIndex) {
        checkingIndex = Math.floor((smallIndex + largeIndex) / 2);
        if (nums[checkingIndex] === target)
            return checkingIndex;
        if (nums[checkingIndex] < target) {
            smallIndex = checkingIndex + 1;
        }
        if (nums[checkingIndex] > target) {
            largeIndex = checkingIndex;
        }
    }
    return smallIndex;
}
;
//# sourceMappingURL=searchInsertPosition.js.map