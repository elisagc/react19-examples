import './App.css';
import { ThemeProvider } from './context/themeContext';
import { UseExample } from './examples/Use';
import { UseActionStateExample } from './examples/UseActionState';
import { BeforeUseActionState } from './examples/BeforeUseActionState';
import { UseOptimisticExample } from './examples/UseOptimistic';
import { UseRefExample } from './examples/UseRef';
import { LazyExample } from './examples/Lazy';

function App() {
  return (
    <ThemeProvider>
      {/*    <UseActionStateExample /> */}
      {/*    <BeforeUseActionState />    */}
      {/*    <UseOptimisticExample /> */}
      {/*     <UseRefExample /> */}
      <UseExample />
      <LazyExample />
    </ThemeProvider>
  );
}

export default App;
