import React from "react";

import styled from "styled-components";
import { Wrapper, FlexBox, Button, Linkton } from "../Global/styled";

import { useSelector, useDispatch } from "react-redux";
import { select } from "../../store/actions/selector";

import { Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Room 1"
  },
  {
    id: 2,
    name: "Room 2"
  },
  {
    id: 3,
    name: "Room 3"
  },
]

export default function ReduxSelector() {
  const dispatch = useDispatch();

  const selected = useSelector(state => state.selector.selected);

  return(
    <Wrapper>
      <Linkton to="/">Home</Linkton>
      <h3>Currently Selected:</h3>
      <h1>{selected.name}</h1>
      <FlexBox>
        {rooms.map(room => (
          <Button key={room.id} onClick={() => dispatch(select(room))}>{room.name}</Button>
        ))}
        <Button key={0} onClick={() => dispatch(select({id: 0, name: "None"}))}>Deselect</Button>
      </FlexBox>
    </Wrapper>
  )
}