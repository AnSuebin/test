function solution(n) {
  let answer = -1
  for (let i = 1; i < n; i++) {
    if (i * i === n) {
      let a = (i + 1) * (i + 1)
      answer = a
  }
  return answer
}

console.log(solution(121))
console.log(solution(3))
