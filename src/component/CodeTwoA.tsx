

const codeString = `
function getMaxFrequente(arr) {
    // self explanatory code: just created an object where keys are numbers and values are their frequencies
    let countObj = arr.reduce((obj, num) => {
        obj[num] = (obj[num] || 0) + 1;
        return obj;
    }, {});
    // found the most frequent number by sorting the keys in descending order and picking the first one (highest frequency) 
    let mostFrequent = Object.keys(countObj).sort((a, b) => countObj[b] - countObj[a])[0];
    return mostFrequent;
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