function addValue(){
    // get the operands value
    const num1 = document.getElementById("input_a").value;
    const num2 = document.getElementById("input_b").value;

    // parse to integer. You can use: parseInt(input, 10);
    const input1= parseInt(num1);
    const input2 =parseInt(num2);

    // perform operation
    const sum = input1 + input2;
   
   

    // creating the text output
    document.querySelector('textarea').innerHTML = (num1 + " + " + num2+ " = " + sum );


    // (if you want to check) print out in console
    console.log(sum);

    // change the text area

    document.mycalculator.output.value = text;
}


function mulValue(){
    const num1 = document.getElementById("input_a").value;
    const num2 = document.getElementById("input_b").value;

    // parse to integer. You can use: parseInt(input, 10);
   

    // perform operation
    const sum = num1 * num2;
    document.querySelector('textarea').innerHTML = (num1 + " * " + num2+ " = " + sum );

   
    document.mycalculator.output.value = text;
}

function divValue(){
    const num1 = document.getElementById("input_a").value;
    const num2 = document.getElementById("input_b").value;

    // parse to integer. You can use: parseInt(input, 10);



    // perform operation
    const sum = num1 / num2;
    document.querySelector('textarea').innerHTML = (num1 + " / " + num2+ " = " + sum );

    document.mycalculator.output.value = text;
}

  
  
  
