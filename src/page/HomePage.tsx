import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Form, redirect } from 'react-router-dom';
  import { useState } from'react';


export async function handleFormSubmit({ request }: { request : Request }) {
    const formData = await request.formData();
    const problemPart = formData.get("problemPart");
    const view = formData.get("view");
    if (!view || !problemPart) {
        return null;
    }
    console.log(problemPart, view || 0);
    return redirect(`/exercise/${problemPart}${view}`);

}


export default function Homepage() {
    const [problemPart, setProblemPart] = useState<string>('');
    const [view, setView] = useState<string>('');

    return (
        <div className="h-full py-12 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-2 px-3 py-2 w-[900px] pb-4 border-b">
                <h1 className="text-2xl font-bold">King Company: Algorithmic Tasks</h1>
                <div className="flex justify-between">
                    <h4 className="font-light">Risoluzione Task Algoritmici e logici e presentazione Front-End</h4>
                    <Badge className='flex gap-[2px] text-xs py-1 font-normal'>
                        <span>Simone Morella </span>
                        <a href="https://github.com/SimoneMorella" className='transform hover:rotate-45 transition ease-out duration-300'>
                            <GitHubLogoIcon />
                        </a> 
                        <span>{new Date().getFullYear()}</span>
                    </Badge>
                </div>
            </div>
            <div className='w-[900px] px-3 py-2 flex justify-evenly mt-12'>
            <Card className='w-[400px] flex flex-col gap-2 py-2'>
                <CardHeader>
                    <CardTitle>Primo Problema: Resistenza di un Numero</CardTitle>
                    <CardDescription>Naviga attraverso la parte 1A o 1B del problema con il form sottostante. Puoi scegliere se vedere la funzione in azione o il codice!</CardDescription>
                </CardHeader>
                <CardContent>
                        <Form method='post' className='grid w-full items-center gap-4'>
                            <input type="hidden" name="problemPart" defaultValue={problemPart} />
                            <input type="hidden" name="view" defaultValue={view} />
                            <div className='flex flex-col space-y-1.5'>
                                <Label>Scegli la parte del Problema</Label>
                                <Select required
                                onValueChange={(value) => setProblemPart(value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleziona"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Problem 1A">GetResistenza</SelectItem>
                                        <SelectItem value="Problem 1B">GetSevenAsResult</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Scegli cosa Vedere</Label>
                                <Select required
                                onValueChange={(value) => setView(value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleziona "/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="A">Implementazione</SelectItem>
                                        <SelectItem value="B">Codice</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <CardFooter className='p-0 pt-6 pb-2'>
                                <Button type="submit" className='w-full'>
                                    View
                                </Button>
                            </CardFooter>
                        </Form>
                    </CardContent>
            </Card>
            <Card className='w-[400px] flex flex-col gap-2 py-2'>
                <CardHeader>
                    <CardTitle>Secondo Problema: Frequenza di un Numero</CardTitle>
                    <CardDescription>Naviga attraverso la parte 2A o 2B del problema con il form sottostante. Puoi scegliere se vedere la funzione in azione o il codice!</CardDescription>
                </CardHeader>
                <CardContent>
                        <Form method='post' className='grid w-full items-center gap-4'>
                            <input type="hidden" name="problemPart" defaultValue={problemPart} />
                            <input type="hidden" name="view" defaultValue={view} />
                            <div className='flex flex-col space-y-1.5'>
                                <Label>Scegli la parte del Problema</Label>
                                <Select required
                                onValueChange={(value) => setProblemPart(value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleziona"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Problem 2A">GetMaxFrequente</SelectItem>
                                        <SelectItem value="Problem 2B">GetMaxFrequenti</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Scegli cosa Vedere</Label>
                                <Select required
                                onValueChange={(value) => setView(value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleziona "/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="A">Implementazione</SelectItem>
                                        <SelectItem value="B">Codice</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <CardFooter className='p-0 pt-6 pb-2'>
                                <Button type="submit" className='w-full'>
                                    View
                                </Button>
                            </CardFooter>
                        </Form>
                    </CardContent>
            </Card>
            </div>
        </div>
    )
}