function countFrequency (arr) {
    const memo = {}
    arr.forEach ((elem) => {
        if(memo.hasOwnProperty(elem)) {
            memo[elem] += 1;
        } else {
            memo[elem] = 1
        }
    })

    return memo;
}

console.log(countFrequency([1,1,2,2,3,5,5,6]));

module.exports = {
    countFrequency
}