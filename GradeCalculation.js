function StudentGrade(Studentscore)
    {
        switch (true)
       {
        case (Studentscore >=90 && Studentscore<=100):
            grade="A"
            break;
        case (Studentscore>=60 && Studentscore<90):
            grade="B"
             break;
        case (Studentscore>=50 && Studentscore<=40):
            grade="C"
             break;
        default:
            grade="Fail";
       } 
       return grade;
    }
    let score=85;

console.log(StudentGrade(score));