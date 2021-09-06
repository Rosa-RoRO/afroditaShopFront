import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  arrProducts: Product[] = [];
  constructor(
    private productsService: ProductsService
  ) { }

  async ngOnInit(): Promise<any> {
    this.arrProducts = await this.productsService.getAll();
    console.log(this.arrProducts);
  }

}
