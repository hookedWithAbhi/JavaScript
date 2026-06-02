
let arr = [1, 3, 4];
// 268


const checkMissing = (arr) => {
    let map = {}, sum = 0, total = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    for(let i = 1; i<= arr.length;i++){
        total += i
    }
    console.log(sum - total)


    // for (let i = 0; i < arr.length; i++) {
    //     if(map.hasOwnProperty(arr[i])){
    //         map[arr[i]] = map[arr[i]]+1
    //     }else{
    //         map[arr[i]] = 1;
    //     }
    // }

    return map;

}
console.log(checkMissing(arr))
