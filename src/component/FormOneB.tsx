import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardDescription,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { useState } from'react';
  import { getResistenza } from './FormOneA';
//   import { findResistanceSeven } from '../lib/answers.js';


function findResistanceSeven() {
    let length = 2; 
    while (length <= 20) { // to prevent long loops
        const combinations = generateComb(length);
        for (const combination of combinations) {
            if (getResistenza((combination as unknown as number)) === 7) {
                return Number(combination.join(""));
            }
        }
        length++;
    }
    return null; // if no number is found
}

function generateComb(length: number): number[][] {
    const neededDigit = [7, 8, 9]; // Most probable digits to have a higher resistance
    if (length === 1) return neededDigit.map(digit => [digit]); // Base case of recursion
    const result: number[][] = [];
    neededDigit.forEach(digit => {  // Recursively generate combinations for the rest of the digits
        const restComb = generateComb(length - 1);
        restComb.forEach(comb => result.push([digit + ( (comb as unknown) as number)]));
    });
    return result;
}

export default function FormOneA() {
    const [isDone, setIsDone] = useState(false);
    const [isDoing, setIsDoing] = useState(false);
    const [result, setResult] = useState(0);

    function handleStartResistance() {
        setIsDoing(false);
        setIsDone(false);
        setResult(findResistanceSeven() as number);
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
                    <CardTitle>Funzione 1B: GetSevenAsResult</CardTitle>
                    <CardDescription>This is easy. Premi il bottone start per trovare il primo numero con una resistenza di 7 che l'algoritmo riesce a trovare. <br /> - Dovrebbe essere abbastanza ottimizzato ahaha -</CardDescription>
                </CardHeader>
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
                            <CardTitle>Uno dei numeri con la resistenza di 7:</CardTitle>
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