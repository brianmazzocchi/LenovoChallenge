// JS Challenge #2
function challenge2(){

//  declarations and input
let word = prompt('Enter a word for palindrome check -lowercase only-');
const term1 = [];
const term2 = [];

//Not allowed array methods to lowercase the input
// word = word.toLowerCase();

function termSplit(input) {    
    //calculating word length
     let length = 0;        
     do {
         length++;
     } while (input[length] != null);             
        
        //Getting term1       
        for(let i=0; i<(length/2);i++){
            term1[i] = input[i];           
            
            //! Checking the right char and order 
            // console.log('character n°', i, 'is', term1[i]);
        }

        //Getting term2
        const length2 = length/2;                  
        let counter=0;
        for(let i=length; i>length2; i--){                        
            term2[counter] = input[i-1];            
            
            //! Checking the right char and order 
            // console.log('character n°', counter, 'is', term2[counter]);
            
            counter++;
        }                
        
        //Calling function and alerting user        
        alert(compareArrays(term1,term2));
    
 } 
 termSplit(word);


 function compareArrays(item1,item2){
    // Comparing terms
    while (String(item1)==String(item2)) {
        // alert('The word '+ word + ' it´s a palindrome');        
        return true;
        
    }      
    // alert('The word ' + word + ' it´s not a palindrome');
    return false;
}
}