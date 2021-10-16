const values = [];

//the multiple functions were changed to this function containing if elses
function calc(clickedId) {
  let a = document.getElementById("number1").value;
  let b = document.getElementById("number2").value;
  let value;
  console.log(clickedId);
  if (clickedId == "add") {
    value = parseInt(a) + parseInt(b);
    console.log(value);
  } else if (clickedId == "subtract") {
    value = parseInt(a) - parseInt(b);
    console.log(value);
  } else if (clickedId == "divide") {
    value = parseInt(a) / parseInt(b);
    console.log(value);
  } else if (clickedId == "multiply") {
    value = parseInt(a) * parseInt(b);

    console.log(value);
  } else if (clickedId == "print") {
    console.log(values.toString());
    document.getElementById("values").innerHTML =
      "Values: " + values.toString();
  }
  values.push(value);
}
