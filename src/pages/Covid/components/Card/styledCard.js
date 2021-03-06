import styled from "styled-components";

const takeColor = (title) => {
  if (title === "confirmed") {
    return "blue";
  }
  if (title === "recovered") {
    return "green";
  }
  if (title === "deaths") {
    return "red";
  }
};

export const Container = styled.div`
  width: 200px;
  height: 150px;
  border: 2px solid;
  border-color: ${({ title }) => takeColor(title)};
  border-radius: 5px;
  margin: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
`;

export const Value = styled.span`
  font-size: 30px;
`;

export const LastUpDate = styled.span`
  font-size: 14px;
`;
