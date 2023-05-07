import { InputGroup } from "@chakra-ui/react";
import { ReactNode, useRef } from "react";

type FileUploadProps = {
  accept?: string;
  multiple?: boolean;
  children?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileUpload = (props: FileUploadProps) => {
  const { accept, multiple, children, onChange } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup
      onClick={handleClick}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <input
        type={"file"}
        multiple={multiple || false}
        accept={accept}
        ref={inputRef}
        onChange={onChange}
        hidden
      />
      <>{children}</>
    </InputGroup>
  );
};

export default FileUpload;
