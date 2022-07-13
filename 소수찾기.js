function solution(n) {
  let answer = 0
  let count = 0
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) {
        count += 1
      }
    }
    if (count === 1) {
      answer += 1
    }
    count = 0
  }
  return answer
}

console.log(solution(10))
