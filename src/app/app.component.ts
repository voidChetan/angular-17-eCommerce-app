import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from './core/services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  userRegister: any = {
    "CustId": 0,
    "Name": "",
    "MobileNo": "",
    "Password": ""
  };
  loginObj: any =  {
    "UserName": "string",
    "UserPassword": "string"
  }

  cartData: any []= [];
  loggedUSerData: any;
  constructor(private productSr:ProductService) {
    const localData = localStorage.getItem('ecomUser');
    if(localData != null) {
      this.loggedUSerData = JSON.parse(localData)
    }
    this.productSr.onCartUpdated$.subscribe(res=>{
      if(res) {
        this.getCart();
      }
      debugger;
     
    })
  }

  ngOnInit(): void {
    this.getCart();
  }


  getCart() {
    this.productSr.getCartDataByCustId(this.loggedUSerData.custId).subscribe((res:any)=>{
      if(res.result) {
        this.cartData =  res.data;
      } else{
        alert(res.message)
      }
    })
  }

  removeCartProduct(cartId: number) {
    debugger;
    this.productSr.removeProduct(cartId).subscribe((res:any)=>{
      if(res.result) {
        this.getCart();
      } else{
        alert(res.message)
      }
    })
  }
  onRegister() {
    this.productSr.onRegister(this.userRegister).subscribe((res:any)=>{
      if(res.result) {
        alert("Signup Success");
      } else{
        alert(res.message)
      }
    })
  }
  onLogin() {
    this.productSr.onLogin(this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        alert("Login Success");
        this.loggedUSerData = res.data;
        localStorage.setItem('ecomUser',JSON.stringify(res.data));
      } else{
        alert(res.message)
      }
    })
  }
  logOff() {
    localStorage.removeItem('ecomUser');
    this.loggedUSerData = undefined;
  }
}
