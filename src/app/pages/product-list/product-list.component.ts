import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { APIResponseModel, IProduct } from '../../core/model/Model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

productList: IProduct [] = [];

productService = inject(ProductService);


ngOnInit(): void {
  debugger;
  this.getAllProduct();
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
