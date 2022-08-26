import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, Inject, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service'; 
import { Messages } from '../genericFunctions/messages';
import { Product } from '../productsList/product';


@Component({
  selector: 'app-dialogEditor',
  templateUrl: './dialogEditor.component.html',
  styleUrls: ['./dialogEditor.component.scss']
})
export class DialogEditorComponent implements OnInit {
  product: Product;
  constructor( 
    private serviceProduct: ProductService,
    private dialogRef: MatDialogRef<DialogEditorComponent>, 
    private mes: Messages,
    @Inject(MAT_DIALOG_DATA) data: { clone: Product }
  ) {
    this.product = data.clone;
  } 

  onNoClick(): void {
    this.dialogRef.close();
  } 

  onClickSave (): void { 

  if(!this.validation()) 
    return

    this.serviceProduct.post(this.product)
    .subscribe({
      next: (data: any) => { 
        this.mes.openSnackBarSucess("Salvo com sucesso!");
        this.dialogRef.close();
          
      },
      error: (error: any) => { 
        this.mes.openSnackBarError("Não foi possível salvar o produto!");
      }
    });
  }

  validation(): boolean {

    if(this.product.name == "") {  
      this.mes.openSnackBarAlert("Nome do item é obrigatório!"); 
      return false;
    }  

    this.product.price = Number.parseFloat(this.product.price.toFixed(4));  
    this.product.quantity = Number.parseFloat(this.product.quantity.toFixed(4));

    return true
  }

  ngOnInit() {
  }

}
