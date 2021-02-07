## Problem #1

### Description

Given an integer array, all items repeat 5 times except for just one item that appears once. Please
find this single item.

### Solution

Just simply count the number of appearance of each number in the input array and then find the number that appear only once.

This solution assume that the input is correct e.g. there are no number that appear 2 times or 3 times and there are only 1 number that appear 1 time.

---

_Time complexity: O(n)_

_Space complexity: O(n)_

With n is the length of the array.

_The basic for this Big O calculation is each item of the array get processed once for counting and at maximum once more to get the result._

---

## Problem #2

Given a grid as input, each item is one of the below things.

- 0: empty item

- 1: white item

- 2: black item

Every 2 seconds, white items that are adjacent (up, down, left, right) to black item become black.

Please return minimum seconds until there is no white item. If it is not possible, return -1.

### Solution

1. First, find all the black items and list them as unprocessed black item.

2. Then process black items, as follow:

- Convert all the adjections white item of that the unprocessed black item which was identified

- Add those new black items into a list of new unprocessed black item.

- Count this step as adding 2 seconds into the timer

3. Repeat processing with the list of new unprocessed black item (from step 2) until there are no unprocessed black items.

4. Check if the white item is still exist in the grid. If yes, return -1. Otherwise return the timer time.

---

_Time complexity: O(m\*n)_

_Space complexity: O(m\*n)_

With m, n is the size of the grid.

_The basic for this Big O calculation is each initial black or white item only get processed once and the processing cost O(1)._
