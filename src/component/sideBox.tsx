import { Button } from "@/components/ui/button"
import { Eye, Code } from "lucide-react"
import { FunctionName } from "../data/functionName"
import { NavLink } from "react-router-dom"

interface SideBoxName {
    functionNames: FunctionName[],
    pageId: string | null | undefined,
    
}

export default function SideBoxes({ functionNames, pageId }: SideBoxName): JSX.Element {
    return (
        <>
        {functionNames.map((ele, i) => {
            return (
                <div className="px-3 py-2" key={`${ele}-${i}`}>
                <h2 className="mb-2 px-4 text-[17px] font-bold tracking-tight">{ele}</h2>
                <div className="space-y-1 flex flex-col">
                    <NavLink to={`exercise/${ele.slice(0, 10)}A`}>
                    {({ isActive}) => (
                        <Button variant={isActive || pageId === `${ele.slice(0, 10)}A` ? "secondary" : "ghost"} className="w-full flex justify-start gap-1">
                        <Eye size={16} />
                        <span >View Implementation</span>
                        </Button>
                    )}
                    </NavLink>
                    <NavLink to={`exercise/${ele.slice(0, 10)}B`}>
                    {({ isActive}) => (
                        <Button variant={isActive || pageId === `${ele.slice(0, 10)}B` ? "secondary" : "ghost"} className="w-full flex justify-start gap-1">
                        <Code size={16} />
                        <span >View Code</span>
                        </Button>
                    )}
                    </NavLink>
                </div>
            </div>
            )
        })}
        </>

    )
}