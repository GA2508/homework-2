//                          exercises 1
function displayTheSpecifiedSign(a, b, c,) {
    let result;
   
    if(a && b && c) {
        if (a > 0 && b > 0 && c > 0) {
            result = "+"
        } else if ((a > 0 && b > 0) || (a > 0 && c > 0) || (b > 0 && c > 0)) {
            result = "-"
        } else {
            result = "+"
        }
    } else result = "0"

    return result;
}
 console.log("exercises 1")
console.log(displayTheSpecifiedSign(-14, 5, 0));
console.log(displayTheSpecifiedSign(-8, 9, -6));
console.log(displayTheSpecifiedSign(4, 19, -2));

//                          exercises 2
function f(x, y) {
    let str = String(y);
    for (let i = 0; i< str.length; i++) {
        if (x === Number(str[i])) {
            return "Ayo";
        }
    }
    return "Voch";
}
console.log("exercises 2")
console.log(f(5, 2463))
console.log(f(4, 6))
console.log(f(8, 45689))

//                          exercises 3
let tiv = (num) => {
    let stringNum = String(num);
    let result = stringNum[stringNum.length - 1];
    if (stringNum.length > 1) {
        for (let i = 1; i < stringNum.length - 1; i++) {
            result += stringNum[i];
        }
        result += stringNum[0];
    } else result = num

    return Number(result);
}
console.log("exercises 3")
console.log(tiv(2));
console.log(tiv(13));
console.log(tiv(895796));

//                          exercises 4
sortingNum = (m, n, z) => {
let result = [];
if ((m<n) && (m<z)) {
result[1]=m;
if(n<z) {
result[2]=n;
result[3]=z;
} else{
    result[2]=z;
    result[3]=n;   
}
} else if ((n<m) && (n<z)) {
    result[1]=n;
    if (m < z) {
        result[2] = m;
        result[3] = z;
    } else {
        result[2] = z;
        result[3] = m;
    }
} else {
    result[0] = z;
    if (m < n) {
        result[2] = m;
        result[3] = n;
    } else {
        result[2] = n;
        result[3] = m;
    }
}
return result;
}
console.log("exercises 4")
console.log(sortingNum(45 , 26, 78));
console.log(sortingNum(-23, -456, 0));

//                      exercises 5
function tiv1 (p) {
	let str = String(p);
	let poqr = Number(str[0]);
	let mec = Number(str[0]);
	
	for (let i = 1; i < str.length; i++) {
		if (poqr > Number(str[i])) {
			poqr = Number(str[i]);
		}
		if (mec < Number(str[i])) {
			mec = Number(str[i]);
		}
	}
	return mec - poqr;
}
console.log("exercises 5")
console.log(tiv1(5));
console.log(tiv1(152));
console.log(tiv1(4593653));