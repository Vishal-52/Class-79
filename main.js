name_of_the_student_array = [];
function submit_func(){
    var Name1 = document.getElementById("name_of_student1").value;
    var Name2 = document.getElementById("name_of_student2").value;
    var Name3 = document.getElementById("name_of_student3").value;
    var Name4 = document.getElementById("name_of_student4").value;
    var Name5 = document.getElementById("name_of_student5").value;

    name_of_the_student_array.push(Name1);
    name_of_the_student_array.push(Name2);
    name_of_the_student_array.push(Name3);
    name_of_the_student_array.push(Name4);
    name_of_the_student_array.push(Name5);
    
    console.log(name_of_the_student_array);

    document.getElementById("label").innerHTML = name_of_the_student_array;
    document.getElementById("submit_btn").style.display = "none";
    document.getElementById("sort_btn").style.display = "inline-block";
}

function sort_func(){
    name_of_the_student_array.sort();
    document.getElementById("label").innerHTML = name_of_the_student_array;
    console.log(name_of_the_student_array)
}