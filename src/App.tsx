import './App.css'
import Intro from './components/intro.tsx'
import Mountains from './components/mountains.tsx'
import Ophiolites from './components/ophiolites.tsx'
import Topbar from './components/topbar.tsx'

function App() {
    return (
        <>
            <Topbar />
            <Intro />
            <Mountains />
            <Ophiolites />
        </>
    )
}

export default App
