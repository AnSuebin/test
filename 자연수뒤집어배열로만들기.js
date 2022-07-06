function solution(n) {
  return n
    .toString()
    .split('')
    .map((str) => Number(str))
    .reverse()
}

console.log(solution(231539235))
