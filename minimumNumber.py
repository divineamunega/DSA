# THere are some people in a meeting hall
# , everyone is wearing t-shirt 
# in which a number is written on his t-shirt
# We asked some of these people how many people other 
# than themselves are wearing a T-Shirt with the same number.
# In the arrray asked[i] means from ith person has been asked and 
# that person gave answer for that
# Given the array return the minimum number of people in the meeting hall


def minimumNumber (askedList):
    removeDuplicates = list(set(askedList))
    minimumNumber = 0;

    for num in removeDuplicates:
        minimumNumber += num 

    minimumNumber += len(removeDuplicates)
    print(minimumNumber)
    return minimumNumber
