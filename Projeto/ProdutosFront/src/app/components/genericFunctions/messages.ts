import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar"; 

@Injectable({
	providedIn: 'root'
}) 

export class Messages { 
    constructor(private _snackBar: MatSnackBar) {}

    openSnackBarSucess(message: string) {
      this._snackBar.open(message, "", {
        horizontalPosition: "right", 
        verticalPosition: "top",  
        duration: 1200,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
    } 

    openSnackBarError(message: string) {
      this._snackBar.open(message, "", {
        horizontalPosition: "right", 
        verticalPosition: "top",  
        duration: 1200,
        panelClass: ['mat-toolbar', 'mat-warn']
      });
    } 

    openSnackBarAlert(message: string) {
      this._snackBar.open(message, "", {
        horizontalPosition: "right", 
        verticalPosition: "top",  
        duration: 1200,
        panelClass: ['mat-toolbar', 'mat-accent']
      });
    }
}
