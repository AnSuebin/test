function solution(n) {
  let Num = String(n)
  let arr = Num.split('')
  let output = ''
  let first = '1'
  for (let k = 1; k <= arr.length; k++) {
    for (let i = 0; i < arr.length; i++) {
      if (first < arr[i]) {
        first = arr[i]
        output += first
        arr.splice(arr[i], 1)
      }
    }
  }
  return output
}

console.log(solution(23455))

/*
1) 숫자를 배열로 나누기
2) 배열 중에 큰 것 먼저 붙이기
3) 그리고 두번째로 큰것 붙이기
4) 마지막 것 붙이기
*/
