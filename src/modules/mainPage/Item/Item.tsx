import React from "react";
import { Items } from "../../../api/useFetch";
import messages from "../../../constants/messages";
import { useCallback } from "react";
import { useToasts } from "react-toast-notifications";
import * as S from "./styles";

export type ItemProps = Items;

const Item = React.memo(({ name, venue, website }: ItemProps) => {
  const { addToast } = useToasts();

  const onItemClick = useCallback(() => {
    addToast(messages.getMoreInfo, { appearance: "info" });
  }, [addToast]);

  return (
    <S.Item onClick={onItemClick}>
      <S.Name>{name}</S.Name>
      {venue && (
        <S.SubElem>
          <S.Desc>{messages.stadiumDesc}</S.Desc> {venue}
        </S.SubElem>
      )}
      {website && (
        <S.SubElem>
          <S.Desc>{messages.websiteDesc}</S.Desc>{" "}
          <S.Website href={website}>{website}</S.Website>
        </S.SubElem>
      )}
    </S.Item>
  );
});

export default Item;
