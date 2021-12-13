//ボタンを使いまわす。
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

//BaseButtonのスタイルに上書きする
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
