// Mảng lưu danh sách students
const students = [];

// Hàm tạo mới student
function createStudent(id, name, age) {
  if (!id || !name || !age) {
    console.error('Missing required student info!');
    return null;
  }

  // Tạo đối tượng student mới
  const newStudent = {
    id,
    name,
    age,
    createdAt: new Date().toISOString(),
  };

  // Thêm student vào mảng
  students.push(newStudent);

  return newStudent;
}

// Sử dụng hàm tạo student mới
const student1 = createStudent(1, 'Nguyen Van A', 20);
const student2 = createStudent(2, 'Tran Thi B', 22);

console.log('Danh sách students:', students);
