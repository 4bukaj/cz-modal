import React from "react";
import Input from "../components/form/input/Input";

export default {
  title: "Input",
  component: Input,
};

export const TextInput = () => (
  <Input
    name="autor"
    label="Autor"
    id="autor"
    placeholder="Wpisz imię i nazwisko"
    type="text"
  />
);
