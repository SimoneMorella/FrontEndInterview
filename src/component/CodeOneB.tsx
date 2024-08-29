

const codeString = `
function findResistanceSeven() {
    let length = 2; 
    while (length <= 20) { // to prevent long loops
        const combinations = generateComb(length);
        for (let combination of combinations) {
            if (getResistenza(combination) === 7) {
                return Number(combination.join(""));
            }
        }
        length++;
    }
    return null; // if no number is found
}

function generateComb(length) {
    const neededDigit = [7, 8, 9] // most probable digits to have a higher resistance
    if (length === 1) return neededDigit; //base of recursion
    let result = [];
    neededDigit.forEach(digit => {  // recursively generate combinations for rest of the digits
        const restComb = generateComb(length - 1);
        //console.log(restComb); checking if logic was correct ahaha
        restComb.forEach(comb => result.push([digit + comb]))
    });
    return result;
}
`;

export default function CodeOneA() {
    return (
        <div className="prose">
            <pre>
                <code className="language-javascript">
                    {codeString}
                </code>
            </pre>
        </div>
    )
}