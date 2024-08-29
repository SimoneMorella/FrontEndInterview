import FormOneA from "../component/FormOneA"
import FormOneB from "../component/FormOneB"
import FormTwoA from "../component/FormTwoA"
import FormTwoB from "../component/FormTwoB"
import CodeOneA from "../component/CodeOneA"
import CodeOneB from "../component/CodeOneB"
import CodeTwoA from "../component/CodeTwoA"
import CodeTwoB from "../component/CodeTwoB"


export type ElementsArray = {
    [key: string]: {
        element: JSX.Element,
        content?: string,
        title?: string
    }
}

export const elementsArray = {
    "Problem 1AA": {
        element: <FormOneA />,
        content: "Questa è una simulazione della funzione GetResistenza. Inserisci un numero per ottenere la resistenza.",
    },
    "Problem 1BA": {
        element: <FormOneB />,
        content: "Questa è una simulazione della funzione GetSevenAsResult. Semplicemente starta il form per trovare il numero che ha una resistenza di 7.",
    },
    "Problem 2AA": {
        element: <FormTwoA />,
        content: "Questa è una simulazione della funzione GetMaxFrequente. Scegli uno di questi array per ottenere il numero più frequente.",
    },
    "Problem 2BA": {
        element: <FormTwoB />,
        content: "Questa è una simulazione della funzione GetMaxFrequenti. Scegli uno di questi array per ottenere un'array dei K numeri pi frequenti.",
    },
    "Problem 1AB": {
        element: <CodeOneA />,
        title: "GetResistance Code",
    },
    "Problem 1BB": {
        element: <CodeOneB />,
        title: "GetSevenAsResult Code",
    },
    "Problem 2AB": {
        element: <CodeTwoA />,
        title: "GetMaxFrequente Code",
    },
    "Problem 2BB": {
        element: <CodeTwoB />,
        title: "GetMaxFrequenti Code",
    },
    

}
    