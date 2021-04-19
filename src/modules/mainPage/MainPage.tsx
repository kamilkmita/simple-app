import Container from "@material-ui/core/Container";
import messages from "../../constants/messages";
import * as S from "./styles";

const MainPage = () => (
  <Container fixed>
    <S.Title>{messages.pageContentTitle}</S.Title>
  </Container>
);

export default MainPage;
