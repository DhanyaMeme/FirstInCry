import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IShopByProduct } from "../../../redux/slices/home/home.type";
import { ImageWrapper } from "../../../ui_kits/ImageWrapper/ImageWrapper";
import { encodeUrl } from "../../../utils/textHandler";

interface IProps {
  collectionItem: IShopByProduct;
}

export const ImageView: FC<IProps> = (props: IProps) => {
  const { collectionItem } = props;

  return (
    <NavLink to={`/shopBy/products/${encodeUrl(collectionItem.name)}`}>
      <div className="CollectionItem__Wrapper">
        <div className="CollectionItem__ImageWrapper">
          <ImageWrapper
            src={collectionItem.url}
            alt={collectionItem.name}
            classes="CollectionItem__Image  Image--contrast Image--zoomOut "
          />
        </div>
        {/* <NavLink
        to={`/collections/WOMEN?collection=${encodeUrl(collectionItem.name)}`}
        className="CollectionItem__Content Heading"
      >
        <h3 className="UnderLined__Text">{collectionItem.name}</h3>
      </NavLink> */}
      </div>
    </NavLink>
  );
};
