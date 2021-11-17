// JS Challenge #1

function challenge1(){
    const inputArray = [1,2,3,4,5,6,7,8,9,10];
    var outputArray = [];

    function pairNumbers(input) {
       
       //calculating array length
        let length = 0;        
        do {
            length++;
        } while (input[length] != null);        

        //checking for pair numbers
        for(let i=0; i<length; i++) {

            // Adding the values to the array
            if((input[i] % 2) === 0 && input[i] !== null) {                                                
                outputArray = [...outputArray, input[i]];                
                }

        }    
    }

    pairNumbers(inputArray);

    console.log('The output array of pair numbers is', outputArray);
}