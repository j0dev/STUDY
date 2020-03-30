import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595"
};

const ButotnGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    setDialog(false);
    console.log("check");
  };
  const onCancel = () => {
    setDialog(false);
    console.log("cancel");
  };
  return (
    <ThemeProvider theme={{ palette }}>
      <>
        <AppBlock>
          <Button size="large" color="pink" onClick={onClick}>
            삭제
          </Button>
          {/* <ButotnGroup>
            <Button size="large" color="pink">
              Button
            </Button>
            <Button>Button</Button>
            <Button size="small" color="gray">
              Button
            </Button>
          </ButotnGroup>
          <ButotnGroup>
            <Button size="large" color="pink" outline>
              Button
            </Button>
            <Button outline>Button</Button>
            <Button size="small" color="gray" outline>
              Button
            </Button>
          </ButotnGroup>
          <ButotnGroup>
            <Button size="large" color="pink" fullWidth>
              Button
            </Button>
            <Button size="large" fullWidth>
              Button
            </Button>
            <Button size="large" color="gray" fullWidth>
              삭제하기
            </Button>
          </ButotnGroup> */}
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          visible={dialog}
          onConfirm={onConfirm}
          onCancel={onCancel}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
