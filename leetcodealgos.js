//Roman to Integer Leet code
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let numerals = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M": 1000
    }, totalNumber = 0;
    
    for(let i=0;i<s.length;i++){
        console.log(s[i])
        switch(s[i]) {
            case "I":
                if(s[i+1] === "X" || s[i+1] === "V"){
                    totalNumber += numerals[s[i+1]] - numerals[s[i]]
                    i++
                }else{
                    totalNumber += numerals[s[i]]
                }
                break;
            case "X":
                if(s[i+1] === "C" || s[i+1] === "L"){
                    totalNumber += numerals[s[i+1]] - numerals[s[i]]
                    i++
                }else{
                    totalNumber += numerals[s[i]]
                }
                
                break;
            case "L":
                if(s[i+1] === "D" || s[i+1] === "M"){
                    totalNumber += numerals[s[i+1]] - numerals[s[i]]
                    i++
                }else{
                    totalNumber += numerals[s[i]]
                }
                
                break;
            case "C":
                if(s[i+1] === "D" || s[i+1] === "M"){
                    totalNumber += numerals[s[i+1]] - numerals[s[i]]
                    i++
                }else{
                    totalNumber += numerals[s[i]]
                }
                
                break; 
            default:
                totalNumber += numerals[s[i]]
                
        }
    }

    return totalNumber
};

// console.log(romanToInt("IV"))


//Twitter hacker rank question

/*
 * Complete the 'numPlayers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY scores
 */

//Sort by descending
function sort( a , b){
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
}

function numPlayers(k, scores) {
    //edge case handler
    if(k <= 0 ) return 0;

    //sorting array. problem does not mention that data will be sorted
    scores.sort(sort)

    let rank = 1, leveledUp = 0;
    for(let i = 0; i<scores.length;i++){
        if(i == 0){
            // The first index is automatically the highest rank due to the sorting method above
            rank = 1
        }else if(scores[i] != scores[i-1]){
            //if the element at the current index is not a duplicate score than assign the score a rank
            rank = i+1;
        }
        //validate if rank allows player to level up
        if(rank <= k && scores[i] > 0) leveledUp++
    }
    return leveledUp
}

// console.log(numPlayers(4,[20,40,60,80,100]))

//Twitter hacker rank question

/*
 * Complete the 'minMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

 
function minMoves(arr) {
    //base case for empty array or array with only 1 element
    if(arr.length == 0 || arr.length == 1) return 0

    //using start element variable as a start point for shifts
    let startElement = arr[0], swaps = 0

    for(let i = 0;i<arr.length;i++){
        //if the element is not == to the start point number then we will pass on that element
        if(arr[i] == startElement && i!=0){
            let j = i;
            //move element forward until the element at the index preceding it is the same as the start element
            while(arr[j-1] != startElement){
                let temp = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = temp
                j--
                swaps++
            }
        }
    }

    return swaps
}

function minMoves(arr){
    let swaps = 0, swapCounter = 0;
  for (let p = 0; p < arr.length; ++p)
    if (arr[p] == 1) {
      swaps += p - swapCounter;
      ++swapCounter;
    }
  return swaps;
}


// console.log(minMoves([1, 0, 1, 0, 0, 0, 0, 1]))


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var returnList;
    if(l1.val < l2.val){
        returnList = new ListNode(l1.val)
        l1 = l1.next
    }else if(l1.val === l2.val){
        returnList = new ListNode(l1.val, new ListNode(l2.val))
    }else{
        returnList = new ListNode(l2.val)
        l2 = l2.next
    }
    runner3 = returnList
    while(l1.next != null && l2.next != null){
        if(l1.val < l2.val){
            runner3.next = new ListNode(l1.val)
            runner3 = runner3.next
            l1 = l1.next
        }else if(l1.val === l2.val){
            runner3.next = new ListNode(l1.val, new ListNode(l2.val))
            runner3 = runner3.next
            l1 = l1.next
            l2 = l2.next
        }
        else{
            runner3.next = new ListNode(l1.val)
            runner3 = runner3.next
            l2 = l2.next
        }
    }

    if(l1 == null && l2 == null) return returnList
    runner3.next = l2 == null ? new ListNode(l1.val) : new ListNode(l2.val)
    console.log(runner3)
    return returnList
};