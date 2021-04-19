import CircularProgress from "@material-ui/core/CircularProgress";
import useFetch, { LoadingStatus } from "../../../api/useFetch";
import Item from "../Item/Item";
import * as S from "./styles";

const ItemList = () => {
  const { status, data } = useFetch();

  const items = data.map((item) => <Item key={item.id} {...item} />);

  return (
    <S.Wrapper>
      {status === LoadingStatus.Fetching ? (
        <S.Loader>
          <CircularProgress />
        </S.Loader>
      ) : (
        items
      )}
    </S.Wrapper>
  );
};

export default ItemList;
