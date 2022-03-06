import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseUrl='http://localhost:8080/api/products';
  private categoryUrl='http://localhost:8080/api/product-category';

  constructor(private httpClient: HttpClient) { }
  
  getProduct(theProductId: number): Observable<Product> {

    //need to build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }

  getProductList(theCategoryId: number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getProducts(searchUrl);
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(respone => respone._embedded.productCategory)
    );
  }

  searchProducts(theKeyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }

  getProductListPaginate(thePage: number,
                  thePageSize: number,
                  theCategoryId: number): Observable<GetResponseProducts>{
      
      const url = `${this.baseUrl}/search/findByCategoryId`
                    + `?id=${theCategoryId}&page=${thePage}&size=${thePageSize}`;

      return this.httpClient.get<GetResponseProducts>(url);
  }

  searchProductsPaginate(thePage: number,
                      thePageSize: number,
                      theKeyword: string): Observable<GetResponseProducts>{

      const url = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
          + `&page=${thePage}&size=${thePageSize}`;

      return this.httpClient.get<GetResponseProducts>(url);
}



  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(respone => respone._embedded.products)
    );
  }
}

interface GetResponseProducts{
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseProductCategory{
  _embedded: {
    productCategory: ProductCategory[];
  }
}
