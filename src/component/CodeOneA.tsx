

const codeString = `
function getResistenza(number) {
    // convert number to string
    let fNum = number.toString();
    // initialize times
    let times = 0;
    // looping to find the number of times needed to multiply the digits to get a single digit
    while (fNum.length > 1) {
        times++;
        fNum = fNum.split("").map(digit => Number(digit)).reduce((result, curr) => result * curr, 1).toString(); 
    }
    return times;
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