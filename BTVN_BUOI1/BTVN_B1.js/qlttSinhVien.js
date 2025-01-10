// ÔN LẠI ES6

const listStudents = [
    {
        id: "SV01", name: "Phan Hoang Su", scores: [7, 8, 9]
    },
    {
        id: "SV02", name: "Nguyen Van A", scores: [10, 8, 9]
    },
]

// truyền vào danh sách sinh viên 
const addStudent = (...newStudents) => {
    // duyệ danh sách sv và thêm lần lượt vào mảng gốc 
    newStudents.forEach((sv) => {
        listStudents.push(sv);
    })
}
const newStudent = { id: "SV01", name: "Phan Hoang Su", scores: [7, 8, 9] }
const newStudent2 = { id: "SV02", name: "Nguyen Van A", scores: [10, 8, 9] }
addStudent(newStudent, newStudent2);

const updateStudent = (id, updateData) => {
    const foundIndex = listStudents.findIndex((sv) => sv.id === id);
    listStudents[foundIndex] = { ...listStudents[foundIndex], ...updateData, id: id };
}
// updateStudent(
//     "SV02",
//     {
//         name: "thay doi",
//         scores: [1, 1, 1]
//     });
// console.log(listStudents);

const caculateAvgScore = () => {
    listStudents.forEach((item, index) => {
        // cach thường 
        // let sum = 0;
        // item.scores.forEach((scores) => sum += scores);
        // const avg = sum/item.scores.length;

        // sử dụng redcuce 
        const avg = item.scores.reduce((sum, scores) => sum += scores, 0) / item.scores.length;
        listStudents[index] = { ...listStudents[index], avg: avg };

    })
}
caculateAvgScore();
// console.log(listStudents);

const filterScorseAvg = (number) => {
    return listStudents.filter((item) => item.avg >= number);
}
console.log(filterScorseAvg(9));



