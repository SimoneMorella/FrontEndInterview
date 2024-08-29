

const codeString = `
function getMaxFrequenti(arr, k) {
    // same logic as before but now we are returning an array of k most frequent numbers
        let countObj = arr.reduce((obj, num) => {
            obj[num] = (obj[num] || 0) + 1;
            return obj;
        }, {});
        let mostFrequentsArr = Object.keys(countObj).sort((a, b) => countObj[b] - countObj[a]).slice(0, k);
        return mostFrequentsArr;
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