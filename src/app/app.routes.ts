import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component:ProductListComponent
    },
    {
        path:'checkout',
        component:CheckoutComponent
    },
    {
        path:'**',
        component:ProductListComponent
    }
];
