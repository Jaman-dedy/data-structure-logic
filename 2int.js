var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log('1. ***** Reversed Linked list ***** ');
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var reverseLink = function (head) {
    var prev = null;
    var next = null;
    var current = head;
    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};
var originalList = new ListNode(1);
originalList.next = new ListNode(2);
originalList.next.next = new ListNode(3);
originalList.next.next.next = new ListNode(4);
originalList.next.next.next = new ListNode(5);
var result = reverseLink(originalList);
console.log('reverse link example == ', result);
console.log('--------------------------------- ');
// a function that return a linked list
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.value = value;
        this.next = null;
    }
    return LinkedList;
}());
var myLinkedList = function (head) {
    return head;
};
var olist = new LinkedList(1);
olist.next = new LinkedList(2);
olist.next.next = new LinkedList(3);
olist.next.next.next = new LinkedList(4);
olist.next.next.next.next = new LinkedList(5);
var res = myLinkedList(olist);
console.log('S. Linked list :>> ', res);
console.log('---------------------------------------');
console.log('2. ******** Find the Missing Number ******* ');
var findMissingNumber = function (list) {
    list.sort(function (a, b) { return a - b; });
    var missingNumber = null;
    var difference = null;
    for (var i = 0; i < list.length - 1; i++) {
        difference = list[i + 1] - list[i];
        if (difference > 1) {
            for (var j = 1; j < difference; j++) {
                missingNumber.push(list[i] + j);
            }
        }
    }
    return missingNumber;
};
console.log(' 3. ***** Detect a Cycle in a Linked List ***** ');
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false;
    }
    var fasterpointer = head;
    var slowerpointer = head;
    while (fasterpointer !== null && fasterpointer.next !== null) {
        fasterpointer = fasterpointer.next.next;
        slowerpointer = slowerpointer.next;
        if (slowerpointer === fasterpointer) {
            return true;
        }
    }
    return false;
};
console.log('4. ********** Two Sum Problem ******************');
var TwoSum = function (nums, target) {
    var left = 0;
    var right = nums.length - 1;
    var sum = 0;
    var index = [];
    while (left < right) {
        sum = nums[left] + nums[right];
        if (sum === target) {
            index = [left, right];
            left++;
            right--;
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }
    return index;
};
console.log('5 ********** Binary Search Tree Validation **********\n\n\n');
console.log('5.1 ******* A Simple binary search tree *******\n\n\n');
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (value) {
        this.root = this._insert(this.root, value);
    };
    BinarySearchTree.prototype._insert = function (root, value) {
        if (root === null) {
            return new TreeNode(value);
        }
        if (value < root.value) {
            root.left = this._insert(root.left, value);
        }
        else if (value > root.value) {
            root.right = this._insert(root.right, value);
        }
        return root;
    };
    BinarySearchTree.prototype.search = function (value) {
        return this._search(this.root, value);
    };
    BinarySearchTree.prototype._search = function (root, value) {
        if (root === null) {
            return false;
        }
        if (root.value === value) {
            return true;
        }
        else if (value < root.value) {
            return this._search(root.left, value);
        }
        else {
            return this._search(root.right, value);
        }
    };
    BinarySearchTree.prototype.delete = function (value) {
        this.root = this._delete(this.root, value);
    };
    BinarySearchTree.prototype._delete = function (root, value) {
        if (root === null) {
            return null;
        }
        if (value < root.value) {
            root.left = this._delete(root.left, value);
        }
        if (value > root.value) {
            root.right = this._delete(root.right, value);
        }
        else {
            if (root.left === null) {
                return root.right;
            }
            else if (root.right === null) {
                return root.left;
            }
            root.value = this._minValue(root.right);
            root.right = this._delete(root.right, value);
        }
        return root;
    };
    BinarySearchTree.prototype._minValue = function (node) {
        var minValue = node.value;
        while (node.left !== null) {
            minValue = node.left.value;
            node = node.left;
        }
        return minValue;
    };
    return BinarySearchTree;
}());
var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(20);
console.log(bst.search(5)); // true
console.log(bst.search(8)); // false
bst.delete(5);
console.log(bst.search(5)); // false
console.log('bst :>> \n\n', JSON.stringify(bst, null, 2));
console.log('5. 1***** Implement a function to check if a binary tree is a valid binary search tree');
var TreeNodes = /** @class */ (function () {
    function TreeNodes(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNodes;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.insert = function (value) {
        this.root = this._insert(this.root, value);
    };
    BST.prototype._insert = function (root, value) {
        if (root === null) {
            return new TreeNodes(value);
        }
        if (value < root.value) {
            root.left = this._insert(root.left, value);
        }
        else if (value > root.value) {
            root.right = this._insert(root.right, value);
        }
        return root;
    };
    BST.prototype.isValidBST = function () {
        return this._isValidBST(this.root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    };
    BST.prototype._isValidBST = function (node, min, max) {
        if (node === null) {
            return true;
        }
        if (node.value <= min || node.value >= max) {
            return false;
        }
        else {
            return (this._isValidBST(node.left, min, node.value) &&
                this._isValidBST(node.right, node.value, max));
        }
    };
    return BST;
}());
var binarySearchTree = new BST();
binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(15);
binarySearchTree.insert(2);
binarySearchTree.insert(8);
binarySearchTree.insert(20);
console.log('BST :>> ', JSON.stringify(binarySearchTree, null, 2));
console.log('is valid BST ?\n\n\n ', binarySearchTree.isValidBST());
console.log('6. ******** Merge Intervals *******\n\n\n');
var mergeIntervals = function (intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    var mergedIntervals = [intervals[0]];
    intervals.sort(function (a, b) { return a.start - b.start; });
    for (var i = 1; i < intervals.length; i++) {
        var lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
        var currentInterval = intervals[i];
        if (currentInterval.start <= lastMergedInterval.end) {
            lastMergedInterval.end = Math.max(currentInterval.end, lastMergedInterval.end);
        }
        else {
            mergedIntervals.push(currentInterval);
        }
    }
    return mergedIntervals;
};
var intervals = [
    { start: 1, end: 3 },
    { start: 2, end: 6 },
    { start: 8, end: 10 },
    { start: 15, end: 18 },
];
var results = mergeIntervals(intervals);
console.log('Merged intervals ===>> ', results);
console.log('\n\n');
console.log('7. ****** Longest Substring Without Repeating Characters **** \n\n ');
var longString = function (s) {
    // let end:number = 0;
    var start = 0;
    var mapStrinIndex = {};
    var maxLength = 0;
    for (var end = 0; end < s.length; end++) {
        var currenChar = s[end];
        if (mapStrinIndex[currenChar] !== undefined && mapStrinIndex[currenChar] >= start) {
            start = mapStrinIndex[currenChar] + 1;
        }
        mapStrinIndex[currenChar] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};
console.log('8. ********* Anagram Detection ******** ');
var checkAnagram = function (s1, s2) {
    var isAnagram = false;
    var sortedS1 = s1.split('').sort().join('');
    var sorteds2 = s2.split('').sort().join('');
    if (s1.length !== s2.length) {
        return false;
    }
    for (var i = 0; i < sortedS1.length; i++) {
        if (sortedS1[i] !== sorteds2[i]) {
            isAnagram = false;
        }
        else
            isAnagram = true;
    }
    return isAnagram;
};
console.log('is it an anagram ? :>> ', checkAnagram('iceman', 'cinema'));
console.log('object :>> \n\n');
console.log('9. ********Maximum Subarray Sum ******* \n\n');
console.log('9.1 ***** Find different subarrays in an array ****** \n\n');
var finSubArrays = function (arr) {
    var subArrays = [];
    var sum = 0;
    var maxSum = 0;
    for (var start = 0; start < arr.length; start++) {
        for (var end = start; end < arr.length; end++) {
            var result_1 = arr.slice(start, end + 1);
            subArrays.push(result_1);
            sum = result_1.reduce(function (acc, current) { return acc + current; }, 0);
            maxSum = Math.max(maxSum, sum);
        }
    }
    return subArrays;
};
var array = [1, 2, 3];
console.log('sub arrays :>> ', finSubArrays(array));
console.log('\n');
var findSubArraySum = function (arr) {
    var currentSum = arr[0];
    var maxSum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};
var myArray = [1, -2, 3, 10, -4, 7, 2, -5];
console.log('sub array sum ', findSubArraySum(myArray));
console.log('\n\n');
console.log('10. ******* Implement a LRU Cache ******\n');
console.log('11. ******* Topological Sorting ******** \n');
console.log('12. ******* Serialize and Deserialize a Binary Tree\n');
console.log('13. ******* *Calculate the Power of a Number *******\n');
var powerFunction = function (x, n) {
    if (n === 0) {
        return 1.0;
    }
    if (n > 0) {
        var temp = powerFunction(x, Math.floor(n / 2));
        if (n % 2 === 0) {
            return temp * temp;
        }
        else {
            return x * temp * temp;
        }
    }
    else {
        return 1.0 / powerFunction(x, -n);
    }
};
// Example usage:
var result1 = powerFunction(2.0, 10);
console.log(result1); // Output: 1024.0
var result2 = powerFunction(3.0, 5);
console.log(result2); // Output: 243.0
var result3 = powerFunction(2.5, -3);
console.log(result3); // Output: 0.064
console.log('\n');
console.log('14. ********Implement a Trie (Prefix Tree) ******\n');
console.log('15. ******** Find the Median of Two Sorted Arrays ******\n');
var finMedianTwoArrays = function (arr1, arr2) {
    var mergedArray = __spreadArray(__spreadArray([], arr1, true), arr2, true);
    mergedArray.sort(function (a, b) { return a - b; });
    var maxLength = mergedArray.length;
    var median = 0;
    if (maxLength % 2 === 0) {
        var mid = maxLength / 2;
        median = (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    }
    else {
        median = mergedArray[Math.floor(maxLength / 2)];
    }
    return median;
};
console.log('median1 :>> ', finMedianTwoArrays([1, 3], [2]));
console.log('median2 :>> ', finMedianTwoArrays([1, 2], [3, 4]));
console.log('median2 :>> ', finMedianTwoArrays([0, 0], [0, 0]));
console.log('\n\n');
console.log('16. ******* Factoriel *********\n');
var factoriel = function (n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factoriel(n - 1);
    }
};
console.log('factoriel :>> ', factoriel(5));
