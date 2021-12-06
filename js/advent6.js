window.onload = () => {
    console.log("Hi friend");

    function sumPairs(numbers, result) {
        let sumResult = []

        for (let i = 0; i < numbers.length - 1; i ++) {
            const nextNumbers = numbers.slice(i + 1)

            for (let j = 0; j < nextNumbers.length; j ++) {
                const sumaActual = numbers[i] + nextNumbers[j]

                console.log(`Suma actual de ${numbers[i]} + ${nextNumbers[j]} = ${sumaActual}`)

                if (sumaActual === result) {
                    sumResult.push(numbers[i])
                    sumResult.push(nextNumbers[j])
                    return sumResult;
                }
            }
        }
        
        return null;
    }

    const test1 = [3, 5, 7, 2];             //10
    const test2 = [-3, -2, 7, -5]           //10
    const test3 = [2, 2, 3, 1]              //4
    const test4 = [6, 7, 1, 2]              //8
    const test5 = [0, 2, 2, 3, -1, 1, 5]    //6

    console.log(sumPairs(test5, 6))
}