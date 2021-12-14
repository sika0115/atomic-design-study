import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
//import { useContext } from "react";
import { userState } from "../../store/userState";
//import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const history = useHistory();
  //const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SCountainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SCountainer>
  );
};

const SCountainer = styled.div`
  text-align: center;
`;
