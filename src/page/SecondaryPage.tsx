import { Params, useLoaderData } from "react-router-dom"
import { elementsArray } from "../data/elementsArr";

type Parameters = {
    params: Params<string>
}

type Element = {
        element: JSX.Element,
        content?: string,
        title?: string
}

export async function handleLoading({ params }: Parameters): Promise<Element> {
    const pageId = params.pageId;
  
    if (pageId && pageId in elementsArray) {
      return elementsArray[pageId as keyof typeof elementsArray];
    }
  
    throw new Error("Invalid pageId");
  }





export default function SecondaryPage() {
const { element, content, title } = useLoaderData() as Element;
    return (
        <div className="h-full py-12 flex flex-col justify-center items-center gap-6">
            <div className="w-[450px] px-3 py-2 pb-6 border-b">
                {content 
                ? <span>{content}</span>
                : <h4 className="text-2xl font-semibold">{title}</h4> 
                }
            </div>
            <div className="px-3 py-2">
                {element}
            </div>
        </div>
    )
}