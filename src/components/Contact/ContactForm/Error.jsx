import React from "react";
import { Message } from "./Error.styled";

export const Error = ({ message, touched }) => {
  if (!touched) {
    return <Message>&nbsp;</Message>;
  }
  if (message) {
    return <Message>{message}</Message>;
  }

  return <Message isOk>Ok!</Message>;
};
