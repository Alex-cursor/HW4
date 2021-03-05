
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]
const marks = [4, 5, 5, 3, 4, 5]

//1
function getPairs(students) {
    const studentsMale = [students[0], students[1], students[4]]
    const studentsFemale = [students[2], students[3], students[5]]
    let pairs = []
    for (let i = 0; i < studentsMale.length; i++) {
        pairs[i] = [studentsMale[i], studentsFemale[i]]
    }
    return pairs
}
const pairs = getPairs(students)
console.log (pairs)

//2
function pairsAndThemes(pairs, themes) {
    let studentsPairsThemes = []
    for (let i = 0; i < pairs.length; i++) {
        studentsPairsThemes[i] = [pairs[i], themes[i]]
    }
    return studentsPairsThemes
}
const pairsThemes = pairsAndThemes(pairs, themes)
console.log (pairsThemes)

//3
function marksAndStudents(students, marks) {
    let studentsMarks = []
    for (let i = 0; i < students.length; i++) {
        studentsMarks[i] = [students[i], marks[i]]
    }
    return studentsMarks
}
const marksForStudents = marksAndStudents(students, marks)
console.log (marksForStudents)

//4
function randomMarks(studentsPairs, themes) {
    const studentsRandomMarks = []
    for (let i = 0; i < studentsPairs.length; i++) {
        mark = Math.floor(Math.random() * 5)
        studentsRandomMarks[i] = [studentsPairs[i], themes[i], mark]
    }
    return studentsRandomMarks
}
const studentsAndRandom = randomMarks(studentsPairs, themes)
console.log (studentsAndRandom)

