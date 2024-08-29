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
//   import { getMaxFrequente } from '../lib/answers.js';

export function getMaxFrequente(arr: number[]): number {
    // self explanatory code: just created an object where keys are numbers and values are their frequencies
    const countObj = arr.reduce((obj: Record<number, number>, num) => {
        obj[num] = (obj[num] || 0) + 1;
        return obj;
    }, {});
    // found the most frequent number by sorting the keys in descending order and picking the first one (highest frequency) 
    const mostFrequent = Object.keys(countObj).sort((a, b) => countObj[+b] - countObj[+a])[0];
    return Number(mostFrequent);
}

export default function FormOneA() {
    const [array, setArray] = useState([55, 42, 88, 42, 88, 42]);
    const [isDone, setIsDone] = useState(false);
    const [isDoing, setIsDoing] = useState(false);
    const [result, setResult] = useState(0);

    function handleStartResistance() {
        setIsDoing(false);
        setIsDone(false);
        setResult(getMaxFrequente(array));
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
                    <CardTitle>Funzione 2A: GetMaxFrequente</CardTitle>
                </CardHeader>
                <CardContent className="">
                    <div className="flex flex-col space-y-2">
                        <RadioGroup defaultValue="[55, 42, 88, 42, 88, 42]" onValueChange={(value) => setArray(JSON.parse(value))}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="[55, 42, 88, 42, 88, 42]" id="r1" />
                            <Label htmlFor="r1">[55, 42, 88, 42, 88, 42]</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="[1, 52, 52, 1, 56, 1, 54, 54, 1, 54]" id="r2" />
                            <Label htmlFor="r2">[1, 52, 52, 1, 56, 1, 54, 54, 1, 54]</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="[52, 52, 52, 56, 54, 54, 54]" id="r3" />
                            <Label htmlFor="r3">[52, 52, 52, 56, 54, 54, 54]</Label>
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
                            <CardTitle>Il most frequent number dell' array: </CardTitle>
                        </CardHeader>
                        <CardContent className="">
                            <div className="flex flex-col space-y-2">
                                {isDone 
                                ? <span className="text-center text-xl">{result}</span>
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