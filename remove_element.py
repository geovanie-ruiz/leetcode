from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        """ Remove elements from nums that matches val

        Returns k which represents count of non-matching values
        """
        k: int = 0        
        for i in range(len(nums)):
            print(i, nums[k])
            if (nums[i] != val):
                nums[k] = nums[i]
                k += 1
        return k
