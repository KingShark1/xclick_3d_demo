import { useState } from "react";
import { STLViewer } from "./components/STLViewer";
import {
  Button,
  Card,
  ChakraProvider,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import { MdUpload } from "react-icons/md";
import FileUpload from "./components/FileUpload";
import logo from "./assets/logo.png";

function App() {
  const stlFiles = [
    "src/assets/stlFiles/normalized_mesh.stl",
    "src/assets/stlFiles/normalized_mesh.stl",
    "src/assets/stlFiles/normalized_mesh.stl",
  ];

  const [stlFileIndex, setStlFileIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [wireframeChecked, setWireframeChecked] = useState(false);
  const [color, setColor] = useState("#6b3b03");

  function selectNextFile() {
    setLoading(true);
    setStlFileIndex((prev) => (prev + 1) % stlFiles.length);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <ChakraProvider>
      <main className="main">
        <Card className="header">
          <div>
            <div className="flexRow">
              <img
                src={logo}
                alt="logo"
                width={100}
                style={{ borderRadius: 5 }}
              />
              <FileUpload
                accept={"image/*"}
                multiple
                onChange={(e) => {
                  if (e.target.files?.length) {
                    selectNextFile();
                  }
                }}
              >
                <Button
                  leftIcon={<MdUpload />}
                  style={{ width: "100%" }}
                  isLoading={loading}
                >
                  Upload
                </Button>
              </FileUpload>
            </div>
            <div className="actions">
              <label htmlFor="color">
                <input
                  type="color"
                  name="color"
                  title="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </label>
              <FormControl
                display="flex"
                alignItems="center"
                width="fit-content"
              >
                <FormLabel htmlFor="wirefreame" mb="0">
                  Wireframe
                </FormLabel>
                <Switch
                  id="wirefreame"
                  onChange={(e) => setWireframeChecked(e.target.checked)}
                />
              </FormControl>
            </div>
          </div>
        </Card>
        <Card className="viewer">
          <STLViewer
            url={stlFiles[stlFileIndex]}
            wireframeChecked={wireframeChecked}
            color={color}
            loading={loading}
          />
        </Card>
      </main>
    </ChakraProvider>
  );
}

export default App;
