import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { APIResponseModel, CategoryModel, IProduct } from '../../core/model/Model';
import { LazyImageDirective } from '../../shared/directive/lazy-image.directive';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule, LazyImageDirective,CommonModule,AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

productList: IProduct [] = [];
categoryList$: Observable<APIResponseModel> | undefined;

productService = inject(ProductService);


ngOnInit(): void {
  debugger;
  this.getAllProduct();
   
  this.categoryList$ =  this.productService.getAllcategory();
}

getProductByCategory(cateId: number) {
  this.productService.getAllProductsByCategoryId(cateId).subscribe((res:APIResponseModel)=>{
    this.productList = res.data;
  })
}

 

getAllProduct() {
  debugger;
  this.productService.getAllProduct().subscribe((res: APIResponseModel)=>{
    debugger;
    this.productList =  res.data;
  },error=> {
    debugger;
    alert("Error From API")
  })
}
 

}
