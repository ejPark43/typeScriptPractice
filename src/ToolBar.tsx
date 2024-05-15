import React, { useState } from "react";
import styled from "styled-components";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LoupeOutlinedIcon from "@mui/icons-material/LoupeOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
/* 
@mui/icons-material @mui/material @emotion/styled @emotion/react
MUI 아이콘 
*/
const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* background는 "다양한 background 옵션"을 띄어쓰기로 구분해서 한번에 줄 수 있다. */
  /* background-color은 단순히 배경색 옵션만 부여할 수 있다. => 그래서 linear-gradient 같은 기능을 못쓰는듯..*/
  background: linear-gradient(#404cb5, #49c4c2); // 배경 그라데이션 적용!
  /* border: 2px solid red; */
  width: 100vw;
  height: 9vh;
`;
const ToolBarAnimation = styled.p`
  /* width: 30px; */
  /* height: 30px; */
  position: absolute;
  display: inline;
  -webkit-animation: starMove 7s infinite;
  animation: starMove 7s infinite;
  @keyframes starMove {
    0% {
      left: 0vw;
      top: 3vh;
    }
    25% {
      left: 5vw;
    }
    50% {
      /* left: 25vw; */
      top: 0vh;
    }
    25% {
      left: 10vw;
    }
    100% {
      left: 15vw;
      top: 3vh;
    }
  }
  > svg {
    color: yellow;
  }
`;
const ToolBarBtnAlign = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* border: 2px solid red; */
  width: 50%;
  height: 100%;
`;
const ToolBtn = styled.div`
  display: flex;
  /* background-color: black; */
  /* border: 2px solid green; */
  height: 40px;
  width: 100px;
  padding: 2px;
  /* border-radius: 15px; */
  border-radius: 10px;
  border: 2px solid white;
  &:hover {
    transition: 0.2s;
    color: #ffffff;
    /* border-radius: 40px; */
    background-color: rgba(140, 215, 255, 0.3);
    border: 2px solid white;
    /* width: 55px; */
    height: 48px;
  }
  > svg {
    cursor: pointer;
    display: flex;
    color: white;
    height: 100%;
    width: 100%;
  }
`;
const PageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
  /* border: 2px solid gold; */
`;
const ContentText = styled.div`
  display: flex;
  /* border: 2px solid #383f9d; */
  /* border-radius: 10px; */
  justify-content: center;

  font-size: 35px;
  font-weight: bolder;
  color: black;
  background: #45dadf;
  background: linear-gradient(to right, #522497 25%, #00098a 61%);
  /* background: linear-gradient(to right, #a70d9d 25%, #4219aa 61%); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 10px 20px;
`;
const ToolBar: React.FC = () => {
  const [buttonState, setButtonState] = useState<string>("initial"); // 타입을 string으로 줌, add / edit / delete

  const AddClicked = () => {
    setButtonState("add"); // add로 state 변경
    if (buttonState === "add") setButtonState("initial"); // 한번 더 누르면 초기화
  };

  const EditClicked = () => {
    setButtonState("edit");
    if (buttonState === "edit") setButtonState("initial"); // 한번 더 누르면 초기화
  };

  const DeleteClicked = () => {
    setButtonState("delete");
    if (buttonState === "delete") setButtonState("initial"); // 한번 더 누르면 초기화
  }; // state를 변경하는걸로?

  return (
    <div>
      <ToolbarContainer>
        {/* <ToolBarAnimation>
          <AutoAwesomeOutlinedIcon />
        </ToolBarAnimation> */}
        <ToolBarBtnAlign>
          <ToolBtn>
            <LoupeOutlinedIcon onClick={AddClicked} />
          </ToolBtn>
          <ToolBtn>
            <EditOutlinedIcon onClick={EditClicked} />
          </ToolBtn>
          <ToolBtn>
            <DeleteOutlinedIcon onClick={DeleteClicked} />
          </ToolBtn>
        </ToolBarBtnAlign>
      </ToolbarContainer>
      <PageContent>
        {buttonState === "add" ? (
          <ContentText>추가버튼누름!</ContentText>
        ) : (
          <></>
        )}
        {buttonState === "edit" ? (
          <ContentText>수정버튼누름!</ContentText>
        ) : (
          <></>
        )}
        {buttonState === "delete" ? (
          <ContentText>삭제버튼누름!</ContentText>
        ) : (
          <></>
        )}
      </PageContent>
      {/* <PageContent>
        {삼항연산자로...}
      </PageContent> */}
    </div>
  );
};

export default ToolBar;
