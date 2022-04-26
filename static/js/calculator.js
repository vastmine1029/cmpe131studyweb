const isAlpha = str => /^([a-zA-Z0-9]|\s)*$/.test(str); // Using RegEx to detect any letters.

/*function CheckAssignmentCondition(assignment, row_number) {
  if (assignment.value == "") { //changed from assignment to assignment.val
    document.querySelector("#showdata").innerHTML = `
    <div style="color: red;">Please enter all the fields in row ${row_number}.</div>
    `;
    process.exit(1);
  }

  if (!/^[\w\d\s]+$/.test(assignment.value)) { // changed from assignment to assignment.val
    document.querySelector("#showdata").innerHTML = `
    <div style="color: red;">No special characters are allowed for course name in row ${row_number}. Correct your inputs.</div>
    `;
    process.exit(1);
  }
}*/

const calculate = () => {

  // Getting input from user into height variable
  let grades = "";

  // store the ((total pts / total possible pts) * weight) of each column the user made 
  // make an empty array first, this will hold all the values
  let total_score_sum = [0, 0, 0, 0, 0];
  let total_points_possible = [0, 0, 0, 0, 0];
  let weighted_grade_points = [0, 0, 0, 0, 0];
  let temp_weight = [0, 0, 0, 0, 0]
  column_counter = 0;

  // this should calculate the total weight, if it is less than 100 after the for loop, terminate 
  // and let the user know the total weight should sum to 100 or greater. 
  let total_weight = 0;
  let score_sum = 0;
  //let total_points_sum = 0;
 

  let CalcTable = document.getElementById('dataTable');

  let total_grade_points = 0;

  for (var i = 0; i < CalcTable.rows.length; ++i) {
    for (var k = 0; k < CalcTable.rows[i].cells.length && i == 0; ++k) {
      column_counter++;
      var row_weight = CalcTable.rows[i].cells[k];
      temp_weight[k] = parseFloat(row_weight.querySelector("#weight").value);
    }
    for (var j = 0; j < CalcTable.rows[i].cells.length; ++j) {
      if (i == 0){
        continue;
      }
        
      var row = CalcTable.rows[i].cells[j];

      console.log("TEST: "+ row.querySelector("#score").value)

    
      total_score_sum[j] += parseFloat(row.querySelector("#score").value);
      total_points_possible[j] += parseFloat(row.querySelector("#pointspossible").value);
    }

    
  }

  

  for (var i = 0; i < column_counter; ++i) {
    weighted_grade_points[i] = (total_score_sum[i] / total_points_possible[i]) * temp_weight[i];
    console.log(weighted_grade_points[0]);
    total_grade_points += weighted_grade_points[i];
  }

  //console.log("HERE: " +temp_weight[0]); 
  // let grade_sum = column_points[0]; 

  let percentage = total_grade_points;


  // checking to see if the user added a correct value for weight 
  if (total_weight < 0 || total_weight > 100) {
    document.querySelector("#showdata").innerHTML = `
      <div style="color: red;">The weight entered must be between 0% and 100%.</div>
      `;
  } else {

    if (percentage >= 90) {
      grades = "A";
    } else if (percentage < 90 && percentage >= 80) {
      grades = "B";
    } else if (percentage < 80 && percentage >= 70) {
      grades = "C";
    } else if (percentage < 70 && percentage >= 60) {
      grades = "D";
    } else {
      grades = "F";
    }

    console.log("WRVDS: "+ total_score_sum[0])
    // Checking if inputs is either empty, contains characters not part of the alphabet, or something otherwise.
    //console.log("ASSIGNMENT: " + /^[\w\d\s]+$/.test(assignment.value))
    if (assignment.value == "") {
      //assignment.value=="0";
      console.log("assignment: " + assignment.value)
      document.querySelector("#showdata").innerHTML = `
     <div style="color: red;">Please enter all the fields.</div>
     `;

    } else if (!/^[\w\d\s]+$/.test(assignment.value)) { //special characters aren't being detected for the second row
    console.log("assignment: " + assignment.value)
      document.querySelector("#showdata").innerHTML = `
         <div style="color: red;">No special characters are allowed for course name. Correct your inputs.</div>
         `;

    } else if (weight.value == "") {
      document.querySelector("#showdata").innerHTML = `
     <div style="color: red;">No weight inputted.</div>
     `;
    } else if (!/^[0-9]+$/.test(weight.value)) {

      document.querySelector("#showdata").innerHTML = `
        <div style="color: red;">Please only include numbers for the weight.</div>
        `;
    } else if (!/^[0-9]+$/.test(temp_weight[1])) {

      document.querySelector("#showdata").innerHTML = `
        <div style="color: red;">Please only include numbers for the weight in column 2.</div>
        `;
    } else if (!/^[0-9]+$/.test(temp_weight[2])) {

      document.querySelector("#showdata").innerHTML = `
        <div style="color: red;">Please only include numbers for the weight in column 3.</div>
        `;
    } 
    else if (!/^[0-9]+$/.test(temp_weight[3])) {

      document.querySelector("#showdata").innerHTML = `
        <div style="color: red;">Please only include numbers for the weight in column 4.</div>
        `;
    } 
    else if (!/^[0-9]+$/.test(temp_weight[4])) {

      document.querySelector("#showdata").innerHTML = `
        <div style="color: red;">Please only include numbers for the weight in column 5.</div>
        `;
    } 
    else if (Number.isNaN(total_score_sum[0]) || Number.isNaN(total_points_possible[0])) {

      console.log("score: " +total_score_sum[0])
      console.log("possible: " +total_points_possible[0])
      document.querySelector("#showdata").innerHTML = `
     <div style="color: red;">Please make sure score and/or total point fields in column 1 only contains numbers</div>
     `;

    }
    else if (Number.isNaN(total_score_sum[1]) || Number.isNaN(total_points_possible[1])) {
      console.log("weight: " +weight.value)
      console.log("score: " +total_score_sum[1])
      console.log("possible: " +total_points_possible[1])
      document.querySelector("#showdata").innerHTML = `
     <div style="color: red;">Please make sure score and/or total point fields in column 2 only contains numbers</div>
     `;
    }
    else if (Number.isNaN(total_score_sum[2]) || Number.isNaN(total_points_possible[2])) {
      console.log("weight: " +weight.value)
      console.log("score: " +total_score_sum[2])
      console.log("possible: " +total_points_possible[2])
      document.querySelector("#showdata").innerHTML = `
     <div style="color: red;">Please make sure score and/or total point fields in column 3 only contains numbers</div>
     `;
    }
    else if (Number.isNaN(total_score_sum[3]) || Number.isNaN(total_points_possible[3])) {
      console.log("weight: " +weight.value)
      console.log("score: " +total_score_sum[3])
      console.log("possible: " +total_points_possible[3])
      document.querySelector("#showdata").innerHTML = `
     <div style="color: red;">Please make sure score and/or total point fields in column 4 only contains numbers</div>
     `;
    }
    else if (Number.isNaN(total_score_sum[4]) || Number.isNaN(total_points_possible[4])) {
      console.log("weight: " +weight.value)
      console.log("score: " +total_score_sum[4])
      console.log("possible: " +total_points_possible[4])
      document.querySelector("#showdata").innerHTML = `
     <div style="color: red;">Please make sure score and/or total point fields in column 5 only contains numbers</div>
     `;
    }
    else if ((temp_weight[0]+temp_weight[1]+temp_weight[2]+temp_weight[3]+temp_weight[4])<100){
      console.log("final weight: " +(temp_weight[0]+temp_weight[1]+temp_weight[2]+temp_weight[3]+temp_weight[4]))
      document.querySelector("#showdata").innerHTML = `
     <div style="color: red;">Please make sure total weight value is 100.</div>
     `;
    }
    else { // when else statement is here, itll detect special characters but not weight

       
        // Checking the condition for the fail and pass
        if (percentage >= 70) {
          console.log("final weight: " +(temp_weight[0]+temp_weight[1]+temp_weight[2]+temp_weight[3]+temp_weight[4]))
          document.querySelector("#showdata").innerHTML =
            `Your percentage is ${percentage}%.<br/> 
            <b>Your grade is a ${grades}, <u>a passing grade</u></b>.`;

        } else {
          document.querySelector("#showdata").innerHTML =
            `Your percentage is ${percentage}%.<br/> 
            <b>Your grade is a ${grades}. <u>Unfortunately, you failed</u></b>.`
        }
      
    }

  }
};