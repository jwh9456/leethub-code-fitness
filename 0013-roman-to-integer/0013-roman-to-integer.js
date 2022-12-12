/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function (s) {
    var answer = 0;
    var arr = s.split("")
    for (var idx=0; idx<arr.length; idx++) {
        if (arr[idx] == "I") {
            if(arr[idx+1] == "V"){
                arr[idx+1] = ""
                answer +=4
            }
            else if (arr[idx+1] == "X"){
                arr[idx+1] = ""
                answer +=9
            }
            else answer += 1
        }
        else if (arr[idx] == "X") {
            if(arr[idx+1] == "L"){
                arr[idx+1] = ""
                answer +=40
            }
            else if (arr[idx+1] == "C"){
                arr[idx+1] = ""
                answer +=90
            }
            else answer += 10
        }
        else if (arr[idx] == "C"){
            if(arr[idx+1] == "D"){
                arr[idx+1] = ""
                answer +=400
            }
            else if (arr[idx+1] == "M"){
                arr[idx+1] = ""
                answer +=900
            }
            else answer += 100
        }
        else if (arr[idx] == "V"){
            answer += 5
        }
        else if (arr[idx] == "L"){
            answer += 50
        }
        else if (arr[idx] == "D"){
            answer += 500
        }
        else if (arr[idx] == "M"){
            answer += 1000
        }
        else continue
    }
    return answer
};