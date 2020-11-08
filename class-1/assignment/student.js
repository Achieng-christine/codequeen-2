const students = [
    {
      id: 1,
      name: "Mark Alonso",
      age: 18,
      subjects: [
        {
          id: 1,
          name: "Math",
          score: 60,
        },
        {
          id: 2,
          name: "English",
          score: 85,
        },
      ],
    },
    {
      id: 2,
      name: "Paul Ryan",
      age: 19,
      subjects: [
        {
          id: 1,
          name: "Math",
          score: 78,
        },
        {
          id: 2,
          name: "English",
          score: 75,
        },
      ],
    },
    {
      id: 3,
      name: "Jackie Anite",
      age: 21,
      subjects: [
        {
          id: 1,
          name: "Math",
          score: 90,
        },
        {
          id: 2,
          name: "English",
          score: 80,
        },
      ],
    },
    {
      id: 4,
      name: "Anita Allain",
      age: 18,
      subjects: [
        {
          id: 1,
          name: "Math",
          score: 71,
        },
        {
          id: 2,
          name: "English",
          score: 45,
        },
      ],
    },
  ],

//   <div class="card">
//   <div class="card-body">
//     <h5 class="card-title">Jackie Anite</h5>
//     <h6 class="card-subtitle">Age:21</h6>
//     <p class="card-text"> Math: 90 <br>
//         English:80</p>
//   </div>
// </div>



const studentcontainer = document.getElementbyId ("student-list");
for (let student of students){
  const studentsDiv = document .createElement ("div")
  students.classList.add("card");
  student-list.appendchild("studentDiv");

  const students = document.createElement ("div")
  students.studentsBody.add("card-body");
  "studentDiv".appendchild("studentsBody");
 
  const studentstextElement = document.createElement("h5")
  student.studentsName.add("card-tittle");
  studentstextElement.innerHTML = student.name;
  studentsBody.appendchild("studentsName");

  const studentstextElement = document.createElement("h6")
  student.studentsAge.add("card-subtittle");
  studentstextElement.innerHTML = student.age;
  studentsBody.appendchild("studentsAge");

  const studentstextElement = document. createElement("p");
  student.studentsResults.add("card-text");
  studentstextElement.innerHTML =  student.subjects;
   studentsBody.appendchild("studentsResults");

   const studentstextElement = document. createElement("p");
  student.studentsResults.add("card-text");
  studentstextElement.innerHTML =  student.score;
   studentsBody.appendchild("studentsResults");

};



   
  // ASSIGNMENT
  
   // Display the above data on a web page. Each student information should appear on a card.
    // Have 4 cards per row
    // Make an appealing styling that you want.
  
    

// for (let student of students) {

//   $("#student-list").append("<div class='studentDiv'>" + student.name + "<br>" + "Age: " + student.age + "<br>"  +student.subjects[0].name+": "+student.subjects[0].score+"<br>"+ student.subjects[1].name+": "+student.subjects[1].score+"</div>");


// } 