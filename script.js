function game(){
    var id= setInterval(fetch,3)
    
    function fetch(){
        var operand1 = parseInt(document.querySelectorAll("#task_x")[0].innerText)
        var operand2 =  parseInt(document.querySelectorAll("#task_y")[0].innerText)
        var operator = document.querySelectorAll("#task_op")[0].innerText
        var answer =  parseInt(document.querySelectorAll("#task_res")[0].innerText)
        var real=0

        if (operator == "-"){
             result = operand1 - operand2 
            }
        else if (operator == "+"){
            result = operand1 + operand2 
            }
        else if (operator == "/"){
            result = operand1 / operand2 
             }
        else {
            result = operand1 * operand2 
            }
        
        if (result == answer){
            document.querySelectorAll("#button_correct")[0].click()
        }
        else{
            document.querySelectorAll("#button_wrong")[0].click()}
        
    }}
