import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogConfirmation',
  templateUrl: './dialogConfirmation.component.html',
  styleUrls: ['./dialogConfirmation.component.scss']
})
export class DialogConfirmationComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogConfirmationComponent>, 
  ) { }

  answerQuestion(resp: boolean) {
    this.dialogRef.close({resp: resp});
  }

  ngOnInit() {
  }

}
