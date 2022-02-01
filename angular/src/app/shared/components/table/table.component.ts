import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from '../../shared/interface/item.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('headers') columns: string[] = [];
  @Input() items: Item[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  @Input() isRemoveButton = false;
  @Output() RemoveAddress = new EventEmitter<string>();
  dataSource!: MatTableDataSource<Item>;
  isNoItem = false;
  displayedColumns: string[] = ['remove', 'modification'];

  constructor(private _liveAnnouncer: LiveAnnouncer, private changeDetector: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource(this.items)
  }

  ngOnInit() {
    if (!this.isRemoveButton)
      this.displayedColumns = []
  }

  ngAfterViewInit() {
    this.displayedColumns.unshift(...this.columns)
    this.displayedColumns.unshift('sn')
    if (this.items.length === 0)
      this.isNoItem = true
    this.changeDetector.detectChanges()
    this.dataSource = new MatTableDataSource(this.items)
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  remove(id: string) {
    this.RemoveAddress.emit(id)
  }

}
