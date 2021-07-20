//Roman to Integer Leet code
/**
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function(s) {
//     let numerals = {
//         "I":1,
//         "V":5,
//         "X":10,
//         "L":50,
//         "C":100,
//         "D":500,
//         "M": 1000
//     }, totalNumber = 0;
    
//     for(let i=0;i<s.length;i++){
//         console.log(s[i])
//         switch(s[i]) {
//             case "I":
//                 if(s[i+1] === "X" || s[i+1] === "V"){
//                     totalNumber += numerals[s[i+1]] - numerals[s[i]]
//                     i++
//                 }else{
//                     totalNumber += numerals[s[i]]
//                 }
//                 break;
//             case "X":
//                 if(s[i+1] === "C" || s[i+1] === "L"){
//                     totalNumber += numerals[s[i+1]] - numerals[s[i]]
//                     i++
//                 }else{
//                     totalNumber += numerals[s[i]]
//                 }
                
//                 break;
//             case "L":
//                 if(s[i+1] === "D" || s[i+1] === "M"){
//                     totalNumber += numerals[s[i+1]] - numerals[s[i]]
//                     i++
//                 }else{
//                     totalNumber += numerals[s[i]]
//                 }
                
//                 break;
//             case "C":
//                 if(s[i+1] === "D" || s[i+1] === "M"){
//                     totalNumber += numerals[s[i+1]] - numerals[s[i]]
//                     i++
//                 }else{
//                     totalNumber += numerals[s[i]]
//                 }
                
//                 break; 
//             default:
//                 totalNumber += numerals[s[i]]
                
//         }
//     }

//     return totalNumber
// };

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
// function sort( a , b){
//     if(a > b) return -1;
//     if(a < b) return 1;
//     return 0;
// }

// function numPlayers(k, scores) {
//     //edge case handler
//     if(k <= 0 ) return 0;

//     //sorting array. problem does not mention that data will be sorted
//     scores.sort(sort)

//     let rank = 1, leveledUp = 0;
//     for(let i = 0; i<scores.length;i++){
//         if(i == 0){
//             rank = 1
//         }else if(scores[i] != scores[i-1]){
//             rank = i+1;
//         }
//         if(rank <= k && scores[i] > 0) leveledUp++
//         else break
//     }
//     return leveledUp
// }

