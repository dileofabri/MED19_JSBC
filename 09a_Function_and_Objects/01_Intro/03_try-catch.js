/*
Thema: try-catch
Dieses Konstrukt erlaubt es mögliche Fehler abzufangen und geordnet zu
verarbeiten. In bestimmten Situationen (z.B. Promises zur asynchronen Verarbeitung)
verlangen sogar einen try-catch! Dazu später mehr bei der Verwendung Datenbanken.

Beispiel 1 - Division
 */

//Fehlercodes als Konstanten
const error_division_by_zero = 1;
const error_number_required = 2;
const error_no_arguments = 3;

//weitere error codes
//..
let div = (a,b) => {

    if ((a === undefined) || (b === undefined)) {
        throw new Error(error_no_arguments);
    }
    else if (b === 0){
        throw new Error(error_division_by_zero);
    }
    else if ( (typeof b !== 'number') || (typeof a !== 'number')) {
        throw new Error(error_number_required);
    }
    return a / b;
}


//Ausgabe des Resultats
try {
    //Ausgabe des Resultats
    console.log(`${div()}`);
    console.log(`${div(20)}`);
    console.log(`${div(20,10)}`);

    let paramA = 20; let paramB = 10;
    //Ausgabe des Resultats
    console.log(`${paramA} / ${paramB} = ${div(paramA,paramB)}`);

    paramA = 20; paramB = 0;
    //Ausgabe des Resultats
    console.log(`${paramA} / ${paramB} = ${div(paramA,paramB)}`);

} catch (e) {
    if (e.message === error_division_by_zero.toString()){
        console.log(`Division durch 0 ist nicht erlaubt!`);
    } else if (e.message === error_number_required.toString()) {
        console.log(`Parameter muss eine Zahl sein!`);
    }
}


function div(a,b) {
    if ((a === undefined) || (b === undefined)) {
        return 'Please provide two arguments!';
    } else {
        return a / b;
    }
}

//Aufruf div mit gültigen Parametern
paramA = 20;
paramB = 10;
console.log(`${paramA} / ${paramB} = ${div(paramA,paramB)}`);

//Aufruf div mit UNgültigen Parametern
paramA = 20;
paramB = 0;
console.log(`${paramA} / ${paramB} = ${div(paramA,paramB)}`);
