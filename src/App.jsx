import Animal from "./components/Animal";
import useAnimalSearch from "./hooks/useAnimalSearch";
function App() {
  const { animals, search } = useAnimalSearch();
  return (
    <main>
      <h1>Animal Farm</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => search(e.target.value)}
      />
      <ul>
        {animals.map((animal) => (
          <Animal key={animal.id} {...animal} />
        ))}

        {animals.length === 0 && "No animals found"}
      </ul>
    </main>
  );
}

export default App;
