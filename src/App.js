import { useSelector } from 'react-redux'

export default function App() {
  const isLoading = useSelector(state => state.isLoading);
  return (
    <div className="App">
      <p>Status: {isLoading ? "Yep!" : "Nope"}</p>
    </div>
  );
}