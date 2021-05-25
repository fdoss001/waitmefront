import { OptionService } from './../../../../services/option.service';
import { ItemOption } from './../../../../interfaces/item-option';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-option',
  templateUrl: './modal-option.component.html',
  styleUrls: ['./modal-option.component.scss'],
  providers: [OptionService]
})

export class ModalOptionComponent implements OnInit{

  public formData!: ItemOption;

  constructor(
    public dialogRef: MatDialogRef<ModalOptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogItemOptionData,
    private optionService: OptionService
  ) {
  }

  ngOnInit(): void{
    // console.log(this.data);
    switch (this.data.type){
      case 'edition':
        const optionId = (this.data.optionInfo) ? this.data.optionInfo.id : -1;
        this.getItemOption(this.data.companyId, optionId);
        break;
      default: break;
    }
  }

  getItemOption = (companyId: number, optionId: number) => {
    this.optionService.getItemOption(companyId, optionId).then(
      (res) => {
        this.formData = res.option;
        console.log(this.formData);
      }
    );
  }

  sendItemOptionData = (data: DialogItemOptionData, formData: NgForm) => {
    console.log(data, formData);
  }

  closeModalWindows = (response?: any) => { this.dialogRef.close(response); };
}

export interface DialogItemOptionData {
  type: 'creation' | 'edition' | 'view';
  companyId: number;
  optionInfo?: ItemOption;
}
