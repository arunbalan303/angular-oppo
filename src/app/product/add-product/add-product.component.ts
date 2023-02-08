import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private fb:FormBuilder,private ps:ProductserviceService,private router:Router){}

addProductForm=this.fb.group({
    id:[''],
    productName: [''],
    categoryId: [''],
    description: [''],
    price: [''],
    isAvailable: [''],
    productImage: [''],
    rating: [''],
    review: [''],
    short:[''],
    warrenty: ['']
})

addNewProduct(){

  let newProductData=
  {
    id:this.addProductForm.value.id,
    productName:this.addProductForm.value.productName,
    categoryId:this.addProductForm.value.categoryId,
    description:this.addProductForm.value.description,
    price:this.addProductForm.value.price,
    isavailable: this.addProductForm.value.isAvailable,
    productImage:this.addProductForm.value.productImage,
    rating:this.addProductForm.value.rating,
    review:this.addProductForm.value.review,
    short:this.addProductForm.value.short,
    warrenty:this.addProductForm.value.warrenty
  }
  this.ps.addProduct(newProductData).subscribe()
  alert('product added successfully')
  this.router.navigateByUrl('product')
}

}
