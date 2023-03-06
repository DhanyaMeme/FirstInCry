import { AsyncData } from "../../../models/types";

export interface IProductImage {
  imId: number;
  imageUrl: string;
}

export interface IProductSize {
  sid: number;
  psize: string;
  price: number;
  sku: string;
  qty: number;
  length: number;
  width: number;
  height: number;
}

export interface IProductReview {
  dislike: number;
  like: number;
  name: string;
  rating: number;
  reviews: string;
  rid: number;
  start: number;
  url: string;
}

export interface IProductData {
  brand: string | null;
  childcategory: string | null;
  date: string;
  deliveryTime: string | null;
  descpription: string;
  descpription1: string;
  facebook: any;
  group: string | null;
  idto: IProductImage[];
  imageurl: string;
  instagram: any;
  keyword: any;
  linkedin: any;
  maincategory: string;
  mcId: number;
  minqty: number;
  offer: number;
  phone: string;
  pintrest: any;
  price: number;
  productcode: string;
  productcolor: string;
  productname: string;
  relative: any;
  sizechart: string;
  subcategory: string;
  subcategory1: string | null;
  specification: string;
  tax: number;
  twitter: any;
  sizedto: IProductSize[];
  reviews?: IProductReview[];
}

export interface IProduct {
  pagenumber: number;
  productdto: IProductData[];

  // fabric: string;
  // gsthsn: string;
  // metatags: any[];
  // pntw: string;
  // productSpecs: IProductSpecification[];
  // quantity: string;
  // ratings:
  //   | [
  //       {
  //         numbers: number;
  //         rating: number;
  //         ratingid: number;
  //       }
  //     ]
  //   | any[];
  // reviews: IProductReview[];
  // shopbyproducts: string;
}

export interface ICollectionState {
  allProducts: AsyncData<IProduct>;
  productsByCategory: AsyncData<Record<string, IProduct>>;
  preorderProducts: AsyncData<IProduct>;
  productsBySearch: AsyncData<IProduct>;
  productsByShopBy: AsyncData<Record<string, IProduct>>;
  productsShopByCollection: AsyncData<Record<string, IProduct>>;
}
