import logo from './logo.svg'
import './App.css'
import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Example3 from './components/Example3'
import Example4 from './components/Example4'
import Example5 from './components/Example5'
import useWindowWidth from './hooks/useWindowWidth'
import withHasMounted from './hocs/withHasMounted'
import useHasMounted from './hooks/useHasMounted'
import Example6 from './components/Example6'
import Example7 from './components/Example7'
import Example8 from './components/Example8'
import Example9 from './components/Example9'
import Example10 from './components/Example10'
import Example11 from './components/Example11'

function App({ hasMounted }) {
  const width = useWindowWidth()
  const hasMountedFromHooks = useHasMounted()

  console.log(hasMounted, hasMountedFromHooks)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Example1 />
        <Example2 />
        <Example3 />
        <Example4 /> */}
        {/* <Example5 /> */}
        {/* <Example8 />
        {width} */}
        <Example9 />
        <Example10 />
        <Example11 />
      </header>
    </div>
  )
}

export default withHasMounted(App)
