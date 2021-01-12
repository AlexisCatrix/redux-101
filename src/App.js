import { useSelector, useDispatch } from 'react-redux'

export default function App() {
  const { isLoading } = useSelector(state => state.loader);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>Status: {isLoading && <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Please wait..." />}</p>
      <button onClick={() => {
        dispatch({ type: "LOADER_ENABLE" })
      }}>Toggle loader</button>
    </div>
  );
}