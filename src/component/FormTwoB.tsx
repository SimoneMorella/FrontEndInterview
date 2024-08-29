import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

  import { Label } from "@/components/ui/label"
  import { Button } from "@/components/ui/button";
  import { useState } from'react';
//   import { getMaxFrequenti } from '../lib/answers.js';

export function getMaxFrequenti(arr: number[], k: number): number[] {
    // same logic as before but now we are returning an array of k most frequent numbers
        const countObj = arr.reduce((obj: Record<number, number>, num) => {
            obj[num] = (obj[num] || 0) + 1;
            return obj;
        }, {});
        const mostFrequentsArr: number[] = Object.keys(countObj).sort((a, b) => countObj[+b] - countObj[+a]).slice(0, k).map(key => +key); // Convert keys to numbers;
        return mostFrequentsArr;
}

export default function FormOneA() {
    const [array, setArray] = useState([1, 52, 52, 52, 1, 56, 1, 54, 54, 1, 54]);
    const [k, setK] = useState(1);
    const [isDone, setIsDone] = useState(false);
    const [isDoing, setIsDoing] = useState(false);
    const [result, setResult] = useState<number[]>();

    function handleStartResistance() {
        setIsDoing(false);
        setIsDone(false);
        setResult(getMaxFrequenti(array, k));
        setTimeout(() => {
            setIsDoing(true);
        }, 300);
        setTimeout(() => {
            setIsDone(true);
        }, 2000);
    }

    return (
        <div className="flex flex-col gap-12">
            <Card className="py-4 flex flex-col gap-5 w-[400px]">
                <CardHeader>
                    <CardTitle>Funzione 2B: GetMaxFrequenti</CardTitle>
                </CardHeader>
                <CardContent className="">
                    <div className="flex flex-col space-y-2">
                        <RadioGroup defaultValue="[1, 52, 52, 52, 1, 56, 1, 54, 54, 1, 54], 1" 
                        onValueChange={(value) => {
                            const [arrayString, numberString] = value.split("],");
                            setArray(JSON.parse(arrayString + "]"))
                            setK(Number(numberString))}}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="[1, 52, 52, 52, 1, 56, 1, 54, 54, 1, 54], 1" id="r1" />
                            <Label htmlFor="r1">[1, 52, 52, 52, 1, 56, 1, 54, 54, 1, 54], 1</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="[1, 52, 52, 52, 1, 56, 1, 54, 54, 1, 54], 2" id="r2" />
                            <Label htmlFor="r2">[1, 52, 52, 52, 1, 56, 1, 54, 54, 1, 54], 2</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="[1, 52, 52, 52, 1, 56, 1, 54, 54, 1, 54], 3" id="r3" />
                            <Label htmlFor="r3">[1, 52, 52, 52, 1, 56, 1, 54, 54, 1, 54], 3</Label>
                        </div>
                        </RadioGroup>
                    </div>
                </CardContent>
                <CardFooter className="">
                    <Button 
                        onClick={() => handleStartResistance() }
                        className="w-full">
                            Start
                    </Button>
                </CardFooter>
                </Card>
                {
                    isDoing && (
                        <Card className="py-4 flex flex-col gap-5 w-[400px]">
                        <CardHeader>
                            <CardTitle>L'array con k numeri piu frequenti è: </CardTitle>
                        </CardHeader>
                        <CardContent className="">
                            <div className="flex flex-col space-y-2">
                                {isDone 
                                ? <span className="text-center text-xl">{JSON.stringify(result)}</span>
                                : <span className="text-center text-lg">"Calcolo in corso..."</span> 
                            }
                            </div>
                        </CardContent>
                        </Card>
                    )
                }
        </div>
            
    )
}