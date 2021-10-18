import { createContext, useReducer } from "react"

export const ThemeContext = createContext({
    
})

const INITIAL_STATE = { dark_mode: false }

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return { darkMode: !state.darkMode }
        default:
            return state
    }
}

export const themeProvider= (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE)

    return (
        <ThemeProvider.value>
            
        </ThemeProvider.value>
    )
}