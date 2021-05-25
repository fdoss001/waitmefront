import { ItemOption } from './../../../../interfaces/item-option';
import { ModalOptionComponent, DialogItemOptionData } from './../modal-option/modal-option.component';
import { OptionService } from './../../../../services/option.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

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

  modalEditItemOption = (itemOption?: any) => {
    const dataDialog: DialogItemOptionData = {
      type: 'edition',
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
