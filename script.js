const Swapper = (Arr) => { 
    // Variables 
 
    let Lowest = 9; 
    let Biggest = 6; 
    let SavedBiggest = 0; 
 
    // for 
 
    for (let i = 0; i < Arr.length; i++) {      
        if (Biggest < Arr[i]) { 
            Biggest = Arr[i] 
            SavedBiggest = Biggest           
        } 
    } 
    for (let i = 0; i < Arr.length; i++) {      
        if (Biggest > Arr[i]) { 
            Biggest = Arr[i] 
            Lowest = Biggest 
        } 
    } 
     
    // Swap arguments 
 
    let indexLowest = Arr.indexOf(Lowest) 
    let indexBiggest = Arr.indexOf(SavedBiggest) 
 
    Arr[indexLowest] = SavedBiggest 
    Arr[indexBiggest] = Lowest 
 
    console.log(Arr) 
} 
 
Swapper([90,8,555,1600,9])