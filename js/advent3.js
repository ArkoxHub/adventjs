window.onload = () => {

    function letterIsValid(letter) {
        if (letter.includes("(") && letter.includes(")")) {
            const openedParentesis = letter.indexOf("(");
            const closedParentesis = letter.indexOf(")");
            
            if (openedParentesis < closedParentesis) {
                const wordsInsideParentesis = letter.substring(openedParentesis + 1, closedParentesis);

                if (wordsInsideParentesis.length > 0 && wordsInsideParentesis.includes("(") || wordsInsideParentesis.includes(")")) {
                    letterIsValid(wordsInsideParentesis);
                    return false;
                }

                // check if the word inside parentesis has letters inside
                if (wordsInsideParentesis.length === 0 || wordsInsideParentesis.includes("{") || wordsInsideParentesis.includes("[")) {
                    return false;
                }
                return true;
            }
        }
        return false;
    }

    const letter1 = "bici coche (balón) bici coche peluche";
    const letter2 = "(muñeca) consola bici";
    const letter3 = "bici coche (balón bici coche";
    const letter4 = "peluche (bici [coche) bici coche balón";
    const letter5 = "(peluche {) bici";
    const letter6 = "(()) bici";
    
    console.log(letterIsValid(letter6));
}