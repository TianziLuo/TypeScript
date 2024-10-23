
import React from 'react';

//Interface names start with an uppercase letter
interface Student{
  id?: number;
  name: string;
  age?: number;
  grades: number[];

  calGrade(): number;
}

class StudentManager implements Student{
  id?: number;
  name: string;
  age?: number;
  grades: number[];

  constructor (name: string, grades: number[], age?: number, id?: number){
    this.name = name;
    this.grades = grades;
    if (id !== undefined) this.id = id;
    if (age !== undefined) this.age = age;
  }

    calGrade(): number{
    let sum: number = 0;
    this.grades.forEach((number) =>{
      sum += number;
    })

    const re: number = sum / this.grades.length;

    return re    
  }
}



const StudentComponent: React.FC = () =>{
  const newStudent = new StudentManager('cg', [12,38,97,65]);

  return(
    <div>
      <p>Student Name: {newStudent.name}</p>
      <p>Average Grade: {newStudent.calGrade()}</p>
    </div>
  )
};

export default StudentComponent