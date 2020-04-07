function createClassRoom(numbersOfStudents){

    const studentSeat = (seat) => () => seat;

    const students = [];

     for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }
    return students;
}

const classRoom = createClassRoom(10);
