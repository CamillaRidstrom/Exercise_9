console.log('------------------')

document.getElementById('inputForm').addEventListener('submit', function(e){
    e.preventDefault();

    let bish = parseFloat(document.getElementById('bishInput').value);
    let bosh = parseFloat(document.getElementById('boshInput').value);
    let numberOfLoops = parseFloat(document.getElementById('loopInput').value);

    function PositiveNumberValidation(str){
        const number = parseFloat(str);
        return !isNaN(number) && number > 0;
    }

    let outputElement = document.getElementById('output');
    let outputString = '';

   if (PositiveNumberValidation(bish) && PositiveNumberValidation(bosh) && PositiveNumberValidation(numberOfLoops)){

    outputElement.classList.remove('warning-text');
    
        for(let i = 1; i <= numberOfLoops; i++)
        {
            if(i % bish === 0 && i % bosh === 0){
                outputString += "Bish-Bosh" + '<br>';
            }
            else if (i % bish === 0){

                outputString += "Bish" + '<br>';
            }
            else if (i % bosh === 0){
                outputString += "Bosh" + '<br>';
            }
            else{
                outputString += i + '<br>';
            }
        }   
    } 
    else{
        outputElement.classList.add('warning-text');
        outputString = 'Ett av fälten saknar ett positivt tal. Vänligen försök igen'; 
       
    }
    outputElement.innerHTML = outputString;

    document.getElementById('bishInput').value = '';
    document.getElementById('boshInput').value = '';
    document.getElementById('loopInput').value = '';
});