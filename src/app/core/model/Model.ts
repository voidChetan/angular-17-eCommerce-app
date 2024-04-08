export interface IProduct  {
    productId: number
    productSku: string
    productName: string
    productPrice: number
    productShortName: string
    productDescription: string
    createdDate: string
    deliveryTimeSpan: string
    categoryId: number
    productImageUrl: string
    categoryName: string
}

export interface APIResponseModel { 
  message: string
  result: boolean
  data: any;
}

export interface CategoryModel { 
  categoryId: number
  categoryName: string
  parentCategoryId: number;
}

export class CartClass { 
  CartId: number;
  CustId: number;
  ProductId: number;
  Quantity: number;
  AddedDate: Date;
  constructor() {
    this.AddedDate = new Date();
    this.CartId= 0;
    this.CustId= 0;
    this.ProductId= 0;
    this.Quantity= 0; 
  }
}

 