import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { OptionService } from 'src/app/services/option.service';
import { ItemOption, NutritionFacts } from 'src/app/interfaces/item-option';
import { Request } from 'src/app/interfaces/request';

@Component({
  selector: 'app-modal-option',
  templateUrl: './modal-option.component.html',
  styleUrls: ['./modal-option.component.scss'],
  providers: [OptionService]
})

export class ModalOptionComponent implements OnInit{

  formData!: NgForm;
  itemOption: ItemOption = {id: -1, code: '', name: '', active: false, price: 0};
  nutritionFacts: NutritionFacts = { id: -1 };

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
      case 'creation':
        break;
      default: break;
    }
  }

  getItemOption = (companyId: number, optionId: number) => {
    this.optionService.getItemOption(companyId, optionId).then(
      (res) => {
        this.itemOption = res.option;
        this.nutritionFacts = res.option.nutritionFacts;
        console.log(this.itemOption, this.nutritionFacts);
      }
    );
  }

  sendItemOptionData = (data: DialogItemOptionData, formData: NgForm) => {

///    const temp = this.itemOption.id;
    this.itemOption = formData.value;
//    this.itemOption.id = temp;
    const request: Request = { payload: {
      user: {
        id: data.userId,
        company: {
          id: data.companyId
        }
      },
      option: this.itemOption
    }};
    switch (data.type){
      case 'edition': this.optionService.updateItemOption(request).then(); break;
      case 'creation': this.optionService.createItemOption(request).then(); break;
    }
  }

  closeModalWindows = (response?: any) => { this.dialogRef.close(response); };
}

export interface DialogItemOptionData {
  type: 'creation' | 'edition' | 'view';
  userId: number;
  companyId: number;
  optionInfo?: ItemOption;
}
