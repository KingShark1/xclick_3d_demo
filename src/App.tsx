import { STLViewer } from "./components/STLViewer";

function App() {
  const stlFile = "src/assets/normalized_mesh.stl";
  console.log(stlFile);
  return (
    <main>
      <div className="viewer">
        <STLViewer url={stlFile} />
      </div>
    </main>
  );
}

export default App;
