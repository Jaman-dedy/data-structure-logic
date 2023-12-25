console.log('1. ***** Reversed Linked list ***** ',);

class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null
    }
}

const reverseLink = (head: ListNode): ListNode | null => {

    let prev = null;
    let next = null;
    let current = head;

    while (current !== null) {
        next = current.next;
        current.next = prev
        prev = current
        current = next
    }

    return prev
}

const originalList = new ListNode(1)
originalList.next = new ListNode(2)
originalList.next.next = new ListNode(3)
originalList.next.next.next = new ListNode(4)
originalList.next.next.next = new ListNode(5)

const result = reverseLink(originalList)

console.log('reverse link example == ', result);

console.log('--------------------------------- ',);

// a function that return a linked list

class LinkedList {
    value: number;
    next: LinkedList | null;

    constructor(value: number) {
        this.value = value;
        this.next = null
    }
}

const myLinkedList = (head: LinkedList | null): LinkedList => {
    return head
}

let olist = new LinkedList(1)
olist.next = new LinkedList(2)
olist.next.next = new LinkedList(3)
olist.next.next.next = new LinkedList(4)
olist.next.next.next.next = new LinkedList(5)

const res = myLinkedList(olist)

console.log('S. Linked list :>> ', res);

console.log('---------------------------------------',);

console.log('2. ******** Find the Missing Number ******* ',);

const findMissingNumber = (list: number[]): number[] => {
    list.sort((a, b) => a - b)
    let missingNumber: number[] = null
    let difference: number = null

    for (let i = 0; i < list.length - 1; i++) {
        difference = list[i + 1] - list[i]
        if (difference > 1) {
            for (let j = 1; j < difference; j++) {
                missingNumber.push(list[i] + j)
            }
        }
    }

    return missingNumber
}

console.log(' 3. ***** Detect a Cycle in a Linked List ***** ');

class ListNode {
    value: number;
    next: ListNode | null

    constructor(value: number) {
        this.value = value;
        this.next = null
    }
}

const hasCycle = (head: ListNode): boolean => {
    if (head === null || head.next === null) {
        return false
    }

    let fasterpointer = head
    let slowerpointer = head

    while (fasterpointer !== null && fasterpointer.next !== null) {
        fasterpointer = fasterpointer.next.next
        slowerpointer = slowerpointer.next

        if (slowerpointer === fasterpointer) {
            return true
        }

    }
    return false
}

console.log('4. ********** Two Sum Problem ******************');

const TwoSum = (nums: number[], target: number): number[] => {
    let left = 0;
    let right = nums.length - 1;
    let sum = 0;
    let index: number[] = [];

    while (left < right) {
        sum = nums[left] + nums[right]
        if (sum === target) {
            index = [left, right]
            left++;
            right--;
        }
        else if (sum < target) {
            left++
        } else {
            right--
        }

    }
    return index
}

console.log('5 ********** Binary Search Tree Validation **********\n\n\n');

console.log('5.1 ******* A Simple binary search tree *******\n\n\n',);

class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: number): void {
        this.root = this._insert(this.root, value)
    }

    private _insert(root: TreeNode, value: number): TreeNode {
        if (root === null) {
            return new TreeNode(value)
        }

        if (value < root.value) {
            root.left = this._insert(root.left, value)
        }
        else if (value > root.value) {
            root.right = this._insert(root.right, value)
        }

        return root
    }

    search(value: number): boolean {
        return this._search(this.root, value)
    }

    private _search(root: TreeNode, value: number): boolean {

        if (root === null) {
            return false
        }

        if (root.value === value) {
            return true
        }
        else if (value < root.value) {
            return this._search(root.left, value)
        }
        else {
            return this._search(root.right, value)
        }
    }

    delete(value: number): void {
        this.root = this._delete(this.root, value)
    }

    private _delete(root: TreeNode | null, value: number): TreeNode | null {
        if (root === null) {
            return null
        }

        if (value < root.value) {
            root.left = this._delete(root.left, value)
        }
        if (value > root.value) {
            root.right = this._delete(root.right, value)
        }

        else {

            if (root.left === null) {
                return root.right
            }
            else if (root.right === null) {
                return root.left
            }

            root.value = this._minValue(root.right)

            root.right = this._delete(root.right, value)
        }

        return root
    }

    private _minValue(node: TreeNode): number {
        let minValue = node.value
        while (node.left !== null) {
            minValue = node.left.value
            node = node.left
        }

        return minValue
    }
}

const bst = new BinarySearchTree();

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(20)
console.log(bst.search(5)); // true
console.log(bst.search(8)); // false

bst.delete(5);
console.log(bst.search(5)); // false
console.log('bst :>> \n\n', JSON.stringify(bst, null, 2));

console.log('5. 1***** Implement a function to check if a binary tree is a valid binary search tree');

class TreeNodes {
    value: number;
    left: TreeNodes | null;
    right: TreeNodes | null

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BST {
    root: TreeNodes | null

    constructor() {
        this.root = null
    }

    insert(value: number): void {
        this.root = this._insert(this.root, value)
    }

    private _insert(root: TreeNodes | null, value: number): TreeNodes {
        if (root === null) {
            return new TreeNodes(value)
        }

        if (value < root.value) {
            root.left = this._insert(root.left, value)
        }
        else if (value > root.value) {
            root.right = this._insert(root.right, value)
        }
        return root
    }

    isValidBST(): boolean {
        return this._isValidBST(this.root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    }

    private _isValidBST(node: TreeNodes | null, min: number, max: number,) {
        if (node === null) {
            return true
        }

        if (node.value <= min || node.value >= max) {
            return false
        }
        else {
            return (
                this._isValidBST(node.left, min, node.value) &&
                this._isValidBST(node.right, node.value, max)
            );
        }
    }
}

const binarySearchTree = new BST();
binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(15);
binarySearchTree.insert(2);
binarySearchTree.insert(8);
binarySearchTree.insert(20);

console.log('BST :>> ', JSON.stringify(binarySearchTree, null, 2));

console.log('is valid BST ?\n\n\n ', binarySearchTree.isValidBST());

console.log('6. ******** Merge Intervals *******\n\n\n');

interface Interval {
    start: number;
    end: number
}

const mergeIntervals = (intervals: Interval[]): Interval[] => {

    if (intervals.length <= 1) {
        return intervals;
    }

    let mergedIntervals: Interval[] = [intervals[0]]
    intervals.sort((a, b) => a.start - b.start);

    for (let i = 1; i < intervals.length; i++) {
        let lastMergedInterval = mergedIntervals[mergedIntervals.length - 1]

        const currentInterval = intervals[i]

        if (currentInterval.start <= lastMergedInterval.end) {
            lastMergedInterval.end = Math.max(currentInterval.end, lastMergedInterval.end)
        }
        else {
            mergedIntervals.push(currentInterval)
        }
    }

    return mergedIntervals;
}

const intervals: Interval[] = [
    { start: 1, end: 3 },
    { start: 2, end: 6 },
    { start: 8, end: 10 },
    { start: 15, end: 18 },
]

const results = mergeIntervals(intervals);
console.log('Merged intervals ===>> ', results);
console.log('\n\n');

console.log('7. ****** Longest Substring Without Repeating Characters **** \n\n ');

const longString = (s: string): number => {
    // let end:number = 0;
    let start: number = 0;
    let mapStrinIndex: Record<string, number> = {}
    let maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        const currenChar = s[end]
        if (mapStrinIndex[currenChar] !== undefined && mapStrinIndex[currenChar] >= start) {
            start = mapStrinIndex[currenChar] + 1
        }
        mapStrinIndex[currenChar] = end

        maxLength = Math.max(maxLength, end - start + 1)
    }

    return maxLength
}

console.log('8. ********* Anagram Detection ******** ');

const checkAnagram = (s1: string, s2: string): boolean => {


    let isAnagram = false;
    let sortedS1 = s1.split('').sort().join('')
    let sorteds2 = s2.split('').sort().join('')

    if (s1.length !== s2.length) {
        return false
    }

    for (let i = 0; i < sortedS1.length; i++) {
        if (sortedS1[i] !== sorteds2[i]) {
            isAnagram = false
        }
        else isAnagram = true
    }

    return isAnagram
}

console.log('is it an anagram ? :>> ', checkAnagram('iceman', 'cinema'));

console.log('object :>> \n\n');

console.log('9. ********Maximum Subarray Sum ******* \n\n');

console.log('9.1 ***** Find different subarrays in an array ****** \n\n',);

const finSubArrays = (arr: number[]): number[] => {
    let subArrays: number[] = []
    let sum: number = 0;
    let maxSum: number = 0;

    for (let start = 0; start < arr.length; start++) {

        for (let end = start; end < arr.length; end++) {
            const result: number[] = arr.slice(start, end + 1)
            subArrays.push(result)
            sum = result.reduce((acc, current) => acc + current, 0)
            maxSum = Math.max(maxSum, sum)
        }
    }

    return subArrays
}

const array: number[] = [1, 2, 3]
console.log('sub arrays :>> ', finSubArrays(array));

console.log('\n');

const findSubArraySum = (arr: number[]): number => {
    let currentSum: number = arr[0]
    let maxSum: number = arr[0]

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i])
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
}

const myArray: number[] = [1, -2, 3, 10, -4, 7, 2, -5];

console.log('sub array sum ', findSubArraySum(myArray));

console.log('\n\n');
console.log('10. ******* Implement a LRU Cache ******\n');
console.log('11. ******* Topological Sorting ******** \n');
console.log('12. ******* Serialize and Deserialize a Binary Tree\n');
console.log('13. ******* *Calculate the Power of a Number *******\n');

const powerFunction = (x: number, n: number): number => {
    if (n === 0) {
        return 1.0
    }

    if (n > 0) {
        const temp = powerFunction(x, Math.floor(n / 2));

        if (n % 2 === 0) {
            return temp * temp
        }
        else {
            return x * temp * temp
        }
    }
    else {
        return 1.0 / powerFunction(x, -n)
    }

}

// Example usage:
const result1 = powerFunction(2.0, 10);
console.log(result1); // Output: 1024.0

const result2 = powerFunction(3.0, 5);
console.log(result2); // Output: 243.0

const result3 = powerFunction(2.5, -3);
console.log(result3); // Output: 0.064

console.log('\n',);

console.log('14. ********Implement a Trie (Prefix Tree) ******\n');
console.log('15. ******** Find the Median of Two Sorted Arrays ******\n');

const finMedianTwoArrays = (arr1: number[], arr2: number[]): number => {

    let mergedArray: number[] = [...arr1, ...arr2]
    mergedArray.sort((a, b) => a - b)
    const maxLength: number = mergedArray.length;
    let median: number = 0

    if (maxLength % 2 === 0) {
        const mid = maxLength / 2
        median = (mergedArray[mid - 1] + mergedArray[mid]) / 2
    } else {
        median = mergedArray[Math.floor(maxLength / 2)]
    }

    return median
}

console.log('median1 :>> ', finMedianTwoArrays([1, 3], [2]));
console.log('median2 :>> ', finMedianTwoArrays([1, 2], [3, 4]));
console.log('median2 :>> ', finMedianTwoArrays([0, 0], [0, 0]));
console.log('\n\n');

console.log('16. ******* Factoriel *********\n');

const factoriel = (n: number): number => {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * factoriel(n - 1)
    }
}

console.log('factoriel :>> ', factoriel(5));
