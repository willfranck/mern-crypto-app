import { Routes, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Main from './pages/Main'

library.add(faCaretUp, faCaretDown)

function App() {
  return (
    <Routes>
      <Route 
        path="/"
        element={<Main />}
      />
    </Routes>
  )
}

export default App
