import { OptionService } from './../../../../services/option.service';
import { ItemOption } from './../../../../interfaces/item-option';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private optionService: OptionService
  ) {
  }

  ngOnInit(): void{
    // console.log(this.data);
    switch (this.data.type){
      case 'edition':
        this.optionService.getItemOption(this.data.companyId, this.data.optionInfo.id).then(
          res => {
            this.formData = res.option;
          }
        );
        break;
      default: break;
    }

  }

  getItemOption = (companyId: number, optionId: number) => {
    this.optionService.getItemOption(companyId, optionId).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  closeModalWindows = (response?: any) => { this.dialogRef.close(response); };
}

export interface DialogData {
  type: 'creation' | 'edition' | 'view';
  companyId: number;
  optionInfo: ItemOption;
}
