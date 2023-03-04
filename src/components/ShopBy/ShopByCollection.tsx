import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { fetchShopbyCollectionAsync } from "../../redux/slices/collection/collection.reducer";
import { productsShopByCollection } from "../../redux/slices/collection/collection.selector";
import {
  IProduct,
  IProductData,
} from "../../redux/slices/collection/collection.type";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Spinner } from "../../ui_kits/Spinner/Spinner.component";
import { decodeUrl } from "../../utils/textHandler";
import { EmptyProducts } from "../EmptyProducts/EmptyProducts";
import { ProductsList } from "../ProductCollection/ProductList";

export const ShopByCollection = () => {
  
  const dispatch = useAppDispatch();
  let { id: mainCategory = "" } = useParams();
  const { data: products, loading } = useAppSelector(productsShopByCollection);

  useEffect(() => {
    const selectedProduct = products || {};
    if (!Object.hasOwn(selectedProduct, mainCategory)) {
      dispatch(fetchShopbyCollectionAsync(decodeUrl(mainCategory)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainCategory]);

  // const filteredData = useMemo(() => {
  //   let computedData: IProduct = products?.[
  //     decodeUrl(mainCategory)
  //   ] as IProduct;
  //   return computedData.productdto || [];
  // }, [mainCategory, products]);

  const filteredData: IProductData[] = [];

  if (loading) {
    return <Spinner />;
  }

  if (!loading && filteredData.length === 0) {
    return <EmptyProducts />;
  }

  return (
    <div className="CollectionMain">
      <div className="CollectionInner">
        <ProductsList ProductData={filteredData} />
      </div>
    </div>
  );
};
