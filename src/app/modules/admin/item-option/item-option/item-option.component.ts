import { OptionService } from './../../../../services/option.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ItemOption } from 'src/app/interfaces/item-option';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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

  getAllOptions(companyId: number): any{
    this.optionService.getAllItemOptions(companyId).then(
      res => {
        this.itemOptions = res.payload.options;
      },
      error => {
        console.log(error);
      }
    );
  }

  modalEditItemOption(code: any): any{
    console.log(code);
  }
}
