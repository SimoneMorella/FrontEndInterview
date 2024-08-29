import { Button } from "@/components/ui/button"
import { House} from "lucide-react"
import { functionNames } from "../data/functionName";
import { Link } from "react-router-dom";
import SideBoxes from "./sideBox.tsx";

type PageId = {
    pageId: string | null | undefined,
}

export default function SideBar({pageId}: PageId): JSX.Element{
    return (
        <div className={` space-y-6 py-12`}>
            <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-xl font-bold tracking-tight">Discover</h2>
                <div className="space-y-1">
                    <Link to="/">
                        <Button variant={typeof pageId === "string" ? "ghost" : "secondary"} className="w-full flex justify-start gap-1">
                            <House size={16} />
                            <span>Home</span>
                        </Button>
                    </Link>

                </div>
            </div>
            <SideBoxes functionNames={functionNames} pageId={pageId} />
        </div>
    )
}