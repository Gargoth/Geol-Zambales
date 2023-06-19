import './App.css'
import Intro from './components/intro.tsx'
import Mountains from './components/mountains.tsx'
import Ophiolites from './components/ophiolites.tsx'
import Rocks from './components/rocks.tsx'
import Topbar from './components/topbar.tsx'

function App() {
    return (
        <>
            <Topbar />
            <Intro />
            <Mountains />
            <Ophiolites />
            <div className="container"><hr /></div>
            <Rocks />
        </>
    )
}

export default App
