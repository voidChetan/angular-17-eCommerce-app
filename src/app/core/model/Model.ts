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

 