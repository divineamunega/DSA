#Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

# Example 1:

# Input: nums = [1,2,3,1]
# Output: true
# Example 2:

# Input: nums = [1,2,3,4]
# Output: false
# Example 3:

# Input: nums = [1,1,1,3,3,4,3,2,4,2]
# Output: true



def containsDuplicate1 (nums: list[int]):
    arr = []
    for number in nums:
        if number not in arr:
            arr.append(number)
        else: return True
    
    return False


# THis method is quite slow in leetcode and did'nt 
# get acccepted cause I used an array.. Finding out it was more
# efficient to use a set.


def containsDuplicate2 (nums: list[int]):
    numSet = set(nums)
    return bool(len(numSet) != len(nums))

# A funny two line method that uses the fact that a set does'nt store double intergers.
# It is the fastest solution I did


## Other intresting methods
def containsDuplicate3 (nums: list[int]):
     sortedNums = sorted(nums)
     for i in range(0, len(sortedNums)):
         if (i + 1) != len(sortedNums):
            if sortedNums[i] == sortedNums[i + 1]: 
             return True
 
     return False


## here the list is sorted and adjacent elements 
# are compared one by one if they are equal if they are we return tre else
# We return false
