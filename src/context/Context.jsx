import { createContext } from "react";
import main from "../config/gemini"

export const Context = createContext()
const ContextProvider = (props) =>{
    const onSent = async (prompt) =>{
        await main(prompt)
    }
    onSent("What is mother of drangons in gamme of thrones")
    const contextValue = {}
    
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
