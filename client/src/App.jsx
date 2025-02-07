import './App.css'
import Useefffect from './components/UseEffecthook/Useefffect'
import MultiState from './components/UseReducerhook/MultiState'
import Useref from './components/Userefhook/Useref'
import Usestate from './components/Usestatehook/Usestate'

// useRef is react hook that allows us to create mutable variabels, 

function App() {
  
  return (
    <>
      <div>
        {/* <Usestate /> */}
        {/* <Useefffect /> */}
        <Useref />
        {/* UseReducer */}
        <MultiState />
      </div>
    </>
  )
}

export default App
