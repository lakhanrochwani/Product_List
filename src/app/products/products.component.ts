import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from './product.service';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  constructor(private productService : ProductService) {
    
    this.listFilter = '';
  }

 
  
  pageTitle: string = "Product-List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;
  showImage: boolean = false;
  _listFilter: string;
  get listFilter(): string {
    return  this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  onRatingClicked(message: string): void {
   this.pageTitle = 'Product List:'+message; 
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [];
  performFilter(filterBy :string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product : IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);

  }
  toggleImage() {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log("I am in OnInit");
     this.productService.getProducts().subscribe(
      products => { 
        this.products = products,
        this.filteredProducts = this.products
      },
      error => this.errorMessage = <any>error
    );
    this.filteredProducts = this.products;
  }
}
