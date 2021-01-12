import { useSelector, useDispatch } from 'react-redux'

export default function App() {
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>Status: {isLoading ? "Yep!" : "Nope"}</p>
      <button onClick={() => {
        dispatch({ type: "LOADER_ENABLE" })
      }}>Toggle loader</button>
    </div>
  );
}