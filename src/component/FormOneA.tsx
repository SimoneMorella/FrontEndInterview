import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Label } from "@/components/ui/label"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button";
  import { useState } from'react';
//   import { getResistenza } from '../lib/answers.js';

  export function getResistenza(number: number): number {
    // convert number to string
    let fNum = number.toString();
    // initialize times
    let times = 0
    // looping to find the number of times needed to multiply the digits to get a single digit
    while (fNum.length > 1) {
        times++;
        fNum = fNum.split("").map(digit => Number(digit)).reduce((result, curr) => result * curr, 1).toString(); 
    }
    return times;
}

export default function FormOneA() {
    const [number, setNumber] = useState(0);
    const [isDone, setIsDone] = useState(false);
    const [isDoing, setIsDoing] = useState(false);
    const [result, setResult] = useState(0);

    function handleStartResistance() {
        setIsDoing(false);
        setIsDone(false);
        setResult(getResistenza(number));
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
                    <CardTitle>Funzione 1A: GetResistenza</CardTitle>
                </CardHeader>
                <CardContent className="">
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="numberRes">Trova la resistenza!</Label>
                        <Input required name="numberRes" type="number" placeholder="Inserisci un numero"
                        onChange={(value) => setNumber(Number(value.target.value))} />
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
                            <CardTitle>La resistenza del numero {number}:</CardTitle>
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