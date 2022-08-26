import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; 
import { environment } from 'src/environments/environment'; 
import { Product } from '../components/productsList/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  entity: string = 'api/products/'

	constructor(private http: HttpClient) { }

	get(): any {
		return this.http.get<Product[]>(
			environment.URL_API + this.entity
		);
	} 

  post(product: any): any {
		return this.http.post<any>(environment.URL_API + this.entity, product
		);
	} 

  delete(id: any): any {
		return this.http.delete<any>(environment.URL_API + this.entity + '?id=' + id
		);
	}

}
