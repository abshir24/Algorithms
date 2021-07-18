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

console.log(romanToInt("IV"))
