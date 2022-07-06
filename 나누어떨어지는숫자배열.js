function solution(arr, divisor) {
  let answer = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i])
    }
  }
  if (answer.length === 0) {
    answer.push(-1)
  }
  answer.sort((a, b) => a - b)
  return answer
}

let fruit = ['orange', 'apple', 'banana']
fruit.sort()
// apple, banana, orange

let score = [4, 11, 2, 10, 3, 1]

// 오류
score.sort()
//1, 10, 11, 2, 3, 4
// ASCII 문자 순서로 정렬되어 숫자의 크기대로 나오지 않음

// 오름차순
score.sort((a, b) => a - b)
// 내림차순
score.sort((a, b) => b - a)

// object 정렬

let student = [
  { name: '안', age: 21 },
  { name: '녕', age: 15 },
  { name: '하', age: 14 },
  { name: '세', age: 55 },
]

// 이름순
// 오름차순
student.sort((a, b) => (a.name < b.name ? -1 : a.name < b.name ? 1 : 0))
// 내림차순
student.sort((a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0))

// 나이순
let sortingField = 'age'
// 오름차순
student.sort((a, b) => a[sortingField] - b[sortingField])
// 내림차순
student.sort((a, b) => b[sortingField] - a[sortingField])
