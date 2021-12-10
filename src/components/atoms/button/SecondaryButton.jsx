//ボタンを使いまわす。
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//BaseButtonのスタイルに上書きする
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
