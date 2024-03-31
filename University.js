class University {
    name = ""; 
    location = ""; 
    departments = [];
    students = [];
    professors = [];
    constructor(universityName, universityLocation) { 
        this.name = universityName;
        this.location = universityLocation;
    }
    addDepartment(department) {
        this.departments.push(department);
    }
    addStudent(student) {
        this.students.push(student);
    }
    addProfessor(professor) {
        this.professors.push(professor);
    }
    removeDepartment(department) {
        const index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
        }
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    removeProfessor(professor) {
        const index = this.professors.indexOf(professor);
        if (index !== -1) {
            this.professors.splice(index, 1);
        }
    }
    getDepartments() {
        let departmentNames = "";
        for (let i = 0; i < this.departments.length; i++) {
            departmentNames += this.departments[i].departmentName + ", "; 
        }
        return departmentNames;
    }
    getStudents() {
        let studentNames = "";
        for (let i = 0; i < this.students.length; i++) {
            studentNames += this.students[i].personName + ", "; 
        }
        return studentNames;
    }
    getProfessors() {
        let professorNames = "";
        for (let i = 0; i < this.professors.length; i++) {
            professorNames += this.professors[i].personName + ", "; 
        }
        return professorNames;
    }
    toString() {
        return `University: ${this.name}, \n\tLocation: ${this.location},\n\tDepartments: ${this.getDepartments()}\n\tStudents: ${this.getStudents()}\n\tProfessors: ${this.getProfessors()}\n`;
    }
}

class Department {
    departmentName = ""; 
    courses = []; 
    students = [];
    professors = [];
    constructor(departmentName) {
        this.departmentName = departmentName;
    }
    addCourse(course) {
        this.courses.push(course);
    }
    removeCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    addProfessor(professor) {
        this.professors.push(professor);
    }
    removeProfessor(professor) {
        const index = this.professors.indexOf(professor);
        if (index !== -1) {
            this.professors.splice(index, 1);
        }
    }
    getCourses() {
        return this.courses.length;
    }
    getStudents() {
        let studentNames = "";
        for (let i = 0; i < this.students.length; i++) {
            studentNames += this.students[i].personName + ", "; 
        }
        return studentNames;
    }
    getProfessors() {
        let professorNames = "";
        for (let i = 0; i < this.professors.length; i++) {
            professorNames += this.professors[i].personName + ", "; 
        }
        return professorNames;
    }
    toString() {
        return `Department: ${this.departmentName},\n\tCourses: ${this.getCourses()}\n\tStudents: ${this.getStudents()}\n\tProfessors: ${this.getProfessors()}\n`;
    }
}

class Course {
    courseCode = ""; 
    courseTitle = ""; 
    professor = null;
    students = [];
    constructor(courseCode, courseTitle, professor) {
        this.courseCode = courseCode;
        this.courseTitle = courseTitle;
        this.professor = professor;
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    setProfessor(professor) {
        this.professor = professor;
    }
    getStudents() {
        let studentNames = "";
        for (let i = 0; i < this.students.length; i++) {
            studentNames += this.students[i].personName + ", "; 
        }
        return studentNames;
    }
    getProfessor() {
        if (this.professor) {
            return this.professor.personName; 
        } else {
            return "N/A";
        }
    }
    toString() {
        return `Course: ${this.courseCode} - ${this.courseTitle},\n\tProfessor: ${this.getProfessor()},\n\tStudents: ${this.getStudents()}\n`;
    }
}

class Person {
    personName = ""; 
    address = "";
    email = "";
    constructor(personName, address, email) {
        this.personName = personName;
        this.address = address;
        this.email = email;
    }
    toString() {
        return `Person: ${this.personName}, ${this.address}, ${this.email}`;
    }
}
class Student extends Person {
    studentId = ""; 
    year = 0;
    courses = [];
    constructor(personName, address, email, studentId, year) {
        super(personName, address, email); 
        this.studentId = studentId;
        this.year = year;
    }
    registerCourse(course) {
        this.courses.push(course);
    }
    dropCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    getCourses() {
        let courseNames = "";
        for (let i = 0; i < this.courses.length; i++) {
            courseNames += this.courses[i].courseTitle + ", "; 
        }
        return courseNames;
    }
    toString() {
        return `Student: ${this.personName}, Student ID: ${this.studentId}, Year: ${this.year},\n\tCourses: ${this.getCourses()}\n`;
    }
}

class Professor extends Person {
    staffId = ""; 
    courses = [];
    constructor(personName, address, email, staffId) { 
        super(personName, address, email); 
        this.staffId = staffId;
    }
    teachCourse(course) {
        this.courses.push(course);
    }
    stopTeachingCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    getCourses() {
        let courseNames = "";
        for (let i = 0; i < this.courses.length; i++) {
            courseNames += this.courses[i].courseTitle + ", "; 
        return courseNames;
    }
    }
    toString() {
        return `Professor: ${this.personName}, Staff ID: ${this.staffId},\n\tCourses: ${this.getCourses()}\n`;
    }
}

main = () => {
    
    const university = new University(
        "Nakhon Pathom Rajabhat University",
        "85 Malaiman Road, Nakhon Pathom, Thailand"
    );

    // สร้าง Departments
    const department1 = new Department("Computer Science");
    const department2 = new Department("Software Engineering");

    // เพิ่ม Departments เข้าไปใน University
    university.addDepartment(department1);
    university.addDepartment(department2);

    // สร้าง Students
    const student1 = new Student(
        "Alice",
        "123 Kanchanaburi",
        "alice@example.com",
        "S001",
        1
    );
    const student2 = new Student(
        "Bob",
        "456 Ratchaburi",
        "bob@example.com",
        "S002",
        2
    );

    // เพิ่ม Students เข้าไปใน University
    university.addStudent(student1);
    university.addStudent(student2);

    // เพิ่ม Students เข้าไปใน Department
    department1.addStudent(student1);
    department2.addStudent(student2);

    // สร้าง Professors
    const professor1 = new Professor(
        "Dr. Worachet Uttha",
        "789 Phetchakaseam road",
        "wuttha@example.com",
        "P001"
    );
    const professor2 = new Professor(
        "Dr. Udsanee Pakdeetrakulwong",
        "101 Wangtaku",
        "udsanee@example.com",
        "P002"
    );

    // เพิ่ม Professors เข้าไปใน University
    university.addProfessor(professor1);
    university.addProfessor(professor2);

    // เพิ่ม Professors เข้าไปใน Department
    department1.addProfessor(professor1);
    department2.addProfessor(professor2);

    // สร้าง Courses
    const course1 = new Course(
        "CS101",
        "Introduction to Programming",
        professor1
    );
    const course2 = new Course(
        "SE101",
        "Introduction of Database Design",
        professor2
    );

    // เพิ่ม Students เข้าไปใน Course
    course1.addStudent(student1);
    course2.addStudent(student2);

    // ลงทะเบียน Students เข้าเรียน Course
    student1.registerCourse(course1);
    student2.registerCourse(course2);

    // ผู้สอนสอนคอร์ส
    professor1.teachCourse(course1);
    professor2.teachCourse(course2);

    // เพิ่ม Course เข้าไปใน Department
    department1.addCourse(course1);
    department2.addCourse(course2);

    // แสดงข้อมูล
    console.log(university.toString());
    console.log(department1.toString());
    console.log(department2.toString());
    console.log(course1.toString());
    console.log(course2.toString());
    console.log(student1.toString());
    console.log(student2.toString());
    console.log(professor1.toString());
    console.log(professor2.toString());

    // แสดงนักศึกษาทั้งหมดในมหาวิทยาลัย
    console.log("Students in the University:");
    university.students.forEach((student) => {
        console.log(student.toString());
    });

    // แสดงศาสนาทั้งหมดในมหาวิทยาลัย
    console.log("Professors in the University:");
    university.professors.forEach((professor) => {
        console.log(professor.toString());
    });

    //department1.removeCourse(course2);

    // แสดงวิชาทั้งหมดในมหาวิทยาลัย
    console.log("Departments in the University:");
    university.departments.forEach((department) => {
        console.log(department.toString());
    });
}

// เรียกใช้งานฟังก์ชัน main
main();
