# In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

# Function Description

# Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

# aVeryBigSum has the following parameter(s):

# int ar[n]: an array of integers .
# Return

# long: the sum of all array elements
# Input Format

# The first line of the input consists of an integer .
# The next line contains  space-separated integers contained in the array.

# Output Format

# Return the integer sum of the elements in the array.

def aVeryBigSum(arr: list[int]):
    sum = 0;
    for num in arr: 
        sum += num
    print(sum)    
    return sum

aVeryBigSum([1,2,4,5,6,7,7,7,4,34,66])



