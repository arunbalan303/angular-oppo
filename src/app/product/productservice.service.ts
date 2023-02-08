import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  searach=new BehaviorSubject("")
  constructor(private httpclient:HttpClient) { }

  viewAllProducts(){
  return  this.httpclient.get("http://localhost:3000/products")
  }
  viewproduct(id:any){
    return this.httpclient.get("http://localhost:3000/products/"+id)
    
   }
   //delete product
   deleteProduct(id:any){
    return this.httpclient.delete("http://localhost:3000/products/"+id)
   }
   //edit product
   updateProduct(id:any,data:any){
    return this.httpclient.put("http://localhost:3000/products/"+id,data)
   }

   addProduct(newproduct:any){
    return this.httpclient.post("http://localhost:3000/products",newproduct)

   }

}
