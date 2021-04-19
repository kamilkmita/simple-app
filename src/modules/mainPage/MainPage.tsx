import Container from "@material-ui/core/Container";
import messages from "../../constants/messages";
import ItemList from "./ItemList/ItemList";
import * as S from "./styles";

const MainPage = () => (
  <Container fixed>
    <S.Title>{messages.pageContentTitle}</S.Title>
    <ItemList />
  </Container>
);

export default MainPage;
