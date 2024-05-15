import "./styles/global.css"
import { BrowserRouter } from "react-router-dom"
import Routes from "@route/Routes"
import Title from "@components/widget/title"

function App() {
    return (
        <BrowserRouter>
            <Title />
            <Routes />
        </BrowserRouter>
    )
}

export default App
