
    function action(num){
    let value = document.getElementById('value').value;
    if(value<=1 && num == -1){
        document.getElementById('minus').style.display = "none"
    }
    else{
        document.getElementById('minus').style.display = "block"
    }
    calculation = parseInt(value) + parseInt((num));
                calculation = parseInt(value) + parseInt((num));
        if(value<9)
        {
            document.getElementById('value').value = "0"+calculation;
        }
        else{
            document.getElementById('value').value = calculation;
        }
}


function reset(){
    document.getElementById('minus').style.display = "none"
    document.getElementById('value').value = 00 ;
}

