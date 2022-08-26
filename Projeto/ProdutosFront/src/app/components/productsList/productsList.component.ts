import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; 
import { DialogEditorComponent } from '../dialogEditor/dialogEditor.component'; 
import { ProductService } from 'src/app/services/product.service'; 
import { Product } from './product';
import { MatTableDataSource } from '@angular/material/table';
import { DialogConfirmationComponent } from '../dialogConfirmation/dialogConfirmation.component'; 
import { Messages } from '../genericFunctions/messages';

@Component({
  selector: 'app-productsList',
  templateUrl: './productsList.component.html',
  styleUrls: ['./productsList.component.scss']
}) 

export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ['code', 'name', 'price', 'quantity', 'actions']; 
  dataSource = new MatTableDataSource();

  constructor(
    private dialog: MatDialog, 
    private serviceProduct: ProductService, 
    private mes: Messages
    ) { } 


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 

  openDialogConfirmation(id: string): void {
    this.dialog.open(DialogConfirmationComponent, {
      width: '250px'
    }).afterClosed().subscribe(resp => {
      if(resp.resp) 
        this.delete(id);
    }); 
  }

  delete(id: string): void {
    this.serviceProduct.delete(id)
    .subscribe({
      next: (data: any) => {  
        this.mes.openSnackBarSucess("Exclusão feita com sucesso!"); 
        this.getProducts();
          
      },
      error: (error: any) => { 
        this.mes.openSnackBarError("Não foi possível excluir o produto!");
      }
    });
  }

  editDialog(product?: Product) { 

    if(product == undefined) 
      product = new Product(); 

    var clone = JSON.parse(JSON.stringify(product)); 

    const ref: MatDialogRef<DialogEditorComponent> = this.dialog.open(
      DialogEditorComponent,
    {

      data: {
        clone,
      },
      backdropClass: 'confirmDialogComponent',
      hasBackdrop: true,
    }
    )

    ref.afterClosed().subscribe(resp => {
      this.getProducts();
    });
  } 

  getProducts() {
    this.serviceProduct.get()
    .subscribe({
      next: (data: any) => {
        this.dataSource.data = data;
          
      },
      error: (error: any) => {
      }
    });
  } 

  ngOnInit() { 
    this.getProducts();
  }

}
