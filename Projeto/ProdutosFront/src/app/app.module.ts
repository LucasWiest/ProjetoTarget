import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatTableModule } from '@angular/material/table' 
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { FormsModule } from "@angular/forms";  
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { LOCALE_ID } from '@angular/core';

//Routes
import { ProductsListComponent } from './components/productsList/productsList.component'; 
import { DialogEditorComponent } from './components/dialogEditor/dialogEditor.component'; 
import { DialogConfirmationComponent } from './components/dialogConfirmation/dialogConfirmation.component';


@NgModule({
  declarations: [	
    AppComponent,
    ProductsListComponent, 
    DialogEditorComponent, 
    DialogConfirmationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatTableModule, 
    FlexLayoutModule, 
    MatInputModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    FormsModule, 
    HttpClientModule, 
    MatSnackBarModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [
    AppComponent
  ], 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
