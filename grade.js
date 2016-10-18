var grade = parseInt(prompt("what is the gread you got on your test?"));
var letterGrade = "";
if(grade >= 90)
    letterGrade = "A";
else if(grade >= 80)
    letterGrade = "B";
else if(grade >= 70)
    letterGrade = "C";
else if(grade >= 60)
    letterGrade = "D";
else if(grade >= 50)
    letterGrade = "E";
else if(grade >= 0)
    letterGrade = "F";

document.write("You grade is a "+ letterGrade);