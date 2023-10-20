console.log('------------------')
document.getElementById('inputForm').addEventListener('submit', function(e){
    e.preventDefault();

    let bish = parseFloat(document.getElementById('bishInput').value);
    let bosh = parseFloat(document.getElementById('boshInput').value);
    let numberOfLoops = parseFloat(document.getElementById('loopInput').value);

    let outputElement = document.getElementById('output');
    let outputString = '';

    //let bish = 3;
    //let bosh = 4;
    //let numberOfLoops = 100;

   

    for(let i = 1; i <= numberOfLoops; i++)
    {
        if(i % bish === 0 && i % bosh === 0){
            //console.log('Bish-Bosh');
            outputString += "Bish-Bosh" + '<br>';
        }
        else if (i % bish === 0){
            //console.log('Bish'); 
            outputString += "Bish" + '<br>';
        }
        else if (i % bosh === 0){
            //console.log('Bosh'); 
            outputString += "Bosh" + '<br>';
        }
        else{
            //console.log(i);
            outputString += i + '<br>';
        }
        
    } 
    outputElement.innerHTML = outputString;

    document.getElementById('bishInput').value = '';
    document.getElementById('boshInput').value = '';
    document.getElementById('loopInput').value = '';
});