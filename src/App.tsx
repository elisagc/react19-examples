import './App.css';
import { ThemeProvider } from './context/themeContext';
import { UseExample } from './examples/Use';
import { UseActionStateExample } from './examples/UseActionState';
import { BeforeUseActionState } from './examples/BeforeUseActionState';
import { UseOptimisticExample } from './examples/UseOptimistic';
import { UseRefExample } from './examples/UseRef';

function App() {
  return (
    <ThemeProvider>
      {/*    <UseExample /> */}
      {/*    <UseActionStateExample /> */}
      {/*    <BeforeUseActionState />    */}
      {/*    <UseOptimisticExample /> */}
      <UseRefExample />
    </ThemeProvider>
  );
}

export default App;
