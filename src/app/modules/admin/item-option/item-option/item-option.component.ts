import { ItemOption } from 'src/app/interfaces/item-option';
import { ModalOptionComponent, DialogItemOptionData } from './../modal-option/modal-option.component';
import { OptionService } from 'src/app/services/option.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Request } from 'src/app/interfaces/request';

@Component({
  selector: 'app-item-option',
  templateUrl: './item-option.component.html',
  styleUrls: ['./item-option.component.scss'],
  providers: [OptionService]
})
export class ItemOptionComponent implements OnInit, AfterViewInit {

  itemOptions: Array<ItemOption>;
  columnsToDisplay: Array<string> = [ 'code', 'name', 'active', 'price', 'actions' ];
  dataSource: MatTableDataSource<ItemOption>;
  itemOptionsList: Array<any> = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private optionService: OptionService,
    private dialog: MatDialog,
  ) {
    this.itemOptions = [];
    this.dataSource = new MatTableDataSource<ItemOption>(this.itemOptions);
  }

  ngOnInit(): void {
    const companyId = 1000000;
    this.getAllOptions(companyId);
  }

  ngAfterViewInit(): void{
    this.dataSource = new MatTableDataSource<ItemOption>(this.itemOptions);
    this.dataSource.paginator = this.paginator;
  }

  getAllOptions = async (companyId: number) => {
    await this.optionService.getAllItemOptions(companyId).then(
      res => {
        this.itemOptions = res.options;
      }
    );
  }

  copyItemOption = () => {
    console.log('Se copia');
  }

  toggleActiveItemOption = async (companyId: number, userId: number, optionId: number, active: boolean) => {
    const requestData: Request = {
      payload: {
        optionId,
        userId,
        companyId,
        active
        }
      };
    await this.optionService.toggleActivateItemOption(requestData).then(
      res => console.log(res)
    );
  }

  modalEditItemOption = (itemOption?: any) => {
    const dataDialog: DialogItemOptionData = {
      type: 'edition',
      userId: 1234567890,
      companyId: 1000000,
      optionInfo: itemOption,
    };
    const dialogRef = this.dialog.open(
      ModalOptionComponent,
      {
        width: '70%',
        data: dataDialog
      }
    );
  }

  modalCreationItemOption = () => {
    const dataDialog: DialogItemOptionData = {
      type: 'creation',
      userId: 1234567890,
      companyId: 1000000
    };
    const dialogRef = this.dialog.open(
      ModalOptionComponent,
      {
        width: '70%',
        data: dataDialog
      }
    );
  }
}
