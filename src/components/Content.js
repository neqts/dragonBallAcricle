import React from "react";
import styled from "styled-components";

const List = styled.li`
  text-decoration: none;
  list-style: none;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CharacterContainer = styled.div`
  padding-bottom: 100px;
`;

const Bohater = styled.div`
  display: flex;
  justify-content: center;
  font-family: monospace;
  font-size: 2rem;
  padding: 30px;
`;

const Describe = styled.p`
  font-family: "Source Serif Pro";
  border-color: #42b883;
  background: #d6f0e4;
  border: none;
  padding: 1em 0.5em 1em 2rem;
  border-left: 8px solid #42b883;
`;
const Type = styled.div`
  color: black;
  background: #35495e;
  padding: 15px;
  font-size: 30px;
`;

const DescriptionMain = styled.div`
  border: 1px solid #42b883;
`;

function Content(props) {
  return (
    <>
      <CharacterContainer>
        <ImgContainer>
          <img src={props.inside.url} />
        </ImgContainer>
        <Bohater>🦸‍♂️ {props.inside.name}</Bohater>
        <Describe>
          <i class="fas fa-quote-left" style={{ fontSize: "10px" }}></i>
          {props.inside.description}
          <i class="fas fa-quote-right" style={{ fontSize: "10px" }}></i>
        </Describe>
        <DescriptionMain>
          <Type>👀 Type</Type>
          <p
            style={{
              background: !props.inside.type ? "#ff000094" : "#fff",
              padding: "15px",
              margin: "0px",
              color: "black",
            }}
          >
            {props.inside.type ? props.inside.type : "None"}
          </p>
        </DescriptionMain>
        <ul>
          <List>👉 {props.inside.extra}</List>
        </ul>
      </CharacterContainer>
    </>
  );
}

export default Content;
