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
  import { findResistanceSeven } from '../lib/answers.js';

export default function FormOneA() {
    const [isDone, setIsDone] = useState(false);
    const [isDoing, setIsDoing] = useState(false);
    const [result, setResult] = useState(0);

    function handleStartResistance() {
        setIsDoing(false);
        setIsDone(false);
        setResult(findResistanceSeven());
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