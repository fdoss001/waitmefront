import { ItemOption } from './../../../../interfaces/item-option';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-option',
  templateUrl: './modal-option.component.html',
  styleUrls: ['./modal-option.component.scss']
})

export class ModalOptionComponent{

  constructor(
    public dialogRef: MatDialogRef<ModalOptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick = () => { this.dialogRef.close(); };
  showConsoleMessage = () => { console.log(this.data); };

}

export interface DialogData {
  type: ['creation', 'edition', 'view'];
  optionInfo: ItemOption;
}
