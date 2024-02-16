# Leetcode interview Questions

## LC Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.

**Custom Judge:**

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be **accepted**.

## Examples

### Example 1

```
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Example 2

```
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Constraints

- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

Please use python3 for your Solution.

### Your Solution

```python3
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
```

## LC Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

Bonus, write an algorithm with O(log n) runtime complexity.

## Examples

### Example 1

```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

### Example 2

```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

### Example 3

```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

### Constraints

- `1 <= nums.length <= 104`
- `-104 <= nums[i] <= 104`
- `nums` contains **distinct** values sorted in **ascending** order.
- `-104 <= target <= 104`

Please use TypeScript or JavaScript for your Solution.

### Your Solution

```Typescript
function searchInsert(nums: number[], target: number): number {
};
```

## React name and age form

- Create a form with a text input box to allow the user to input a name. The name can only include letters, and the maximum name size is 20 characters
- Add buttons below the text input box to allow the user to increase and decrease the age of this person. Their age should not be able to be decreased lower than 1
- You should inform the user when the name field has reached the max name size, and when the user attempts to add in a non letter
- The name and age of the user should be displayed below the form.
- Please use functional components in your answer

### Your Solution

```jsx
import { StrictMode } from "react";
import ReactDOM from "react-dom";

const App = () => {
 return (
  <div className="App">
  </div>
 );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
 <StrictMode>
  <App />
 </StrictMode>,
 rootElement
); 
```

## LC Duplicate Emails

Table: Person
```
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
```
id is the primary key (column with unique values) for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.

Write a solution to report all the duplicate emails. Note that it's guaranteed that the email field is not NULL.

Return the result table in **any order**.

The result format is in the following example.

### Example 1

```
Input:
Person table:
+----+-----------+
| id | email     |
+----+-----------+
| 1  | <a@b.com> |
| 2  | <c@d.com> |
| 3  | <a@b.com> |
+----+-----------+

Output:
+-----------+
| Email     |
+-----------+
| <a@b.com> |
+-----------+
```
**Explanation**: <a@b.com> is repeated two times.


### Your Solution
```MySQL
```
![image](https://github.com/geovanie-ruiz/leetcode/assets/58946656/5cded712-6c73-4d5b-85a9-152020f96913)
