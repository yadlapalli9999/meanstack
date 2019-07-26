import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private commonService:CommonService){}

 product:any = {}
 result;
productList;
  ngOnInit(){
  this.getListProduct()
  }
  getListProduct(){
    this.commonService.addProductInfo().subscribe((res)=>{
      console.log(res)
      this.productList = res
       for(var i=0; i<this.productList.products.length;i++){
         console.log(this.productList.products[i])
        this.result = this.productList.products[i]
       }
    })
  }
  


}
