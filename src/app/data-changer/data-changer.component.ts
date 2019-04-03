import { Component } from '@angular/core';

/**
 * Data source interface for type security.
 */
export interface DataSource {
  id: number;
  name: string;
  taxPercentage: number;
  qty: number;
  unitCostExcluding: number;
  lineTotalExcluding: number;
  lineTotalTax: number;
  lineTotalIncluding: number;
}

@Component({
  selector: 'app-data-changer',
  templateUrl: './data-changer.component.html',
  styleUrls: ['./data-changer.component.css']
})
export class DataChangerComponent {

  /**
   * Array of changeable properties
   * @type { Array<string> }
   */
  public allowedToChange = ['qty', 'unitCostExcluding',
    'lineTotalExcluding', 'lineTotalIncluding'];

  /**
   * Selected Row number
   * @type { number }
   */
  public rowNumber: number;

  /**
   * Array of unchangeable properties
   * @type { Array<string> }
   */
  public toExclude: Array<string> = ['id', 'name', 'taxPercentage' , 'lineTotalTax'];

  /**
   * Change object.
   * @type {selectedField: string, itemValue: number}
   */
  public changeObj: {selectedField: string, itemValue: number} = {selectedField: 'qty', itemValue: 0};

  /**
   * Mock data to be used.
   * @type { Array<DataSource> }
   */
  public mockData: Array<DataSource> = [
    {id: 1, name: 'coke', taxPercentage: 15, qty: 10, unitCostExcluding: 10,
      lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4},
    {id: 2, name: 'pepsi', taxPercentage: 15, qty: 11, unitCostExcluding: 10,
      lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4},
    {id: 3, name: 'sprite', taxPercentage: 15, qty: 12, unitCostExcluding: 10,
      lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4},
    {id: 4, name: 'coke light', taxPercentage: 15, qty: 13, unitCostExcluding: 10,
      lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4},
    {id: 5, name: 'coke zero', taxPercentage: 15, qty: 14, unitCostExcluding: 10,
      lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4},
    {id: 6, name: 'cream soda', taxPercentage: 15, qty: 15, unitCostExcluding: 10,
      lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4},
    {id: 7, name: '7up', taxPercentage: 15, qty: 16, unitCostExcluding: 10,
      lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4},
    {id: 8, name: '7up light', taxPercentage: 15, qty: 17, unitCostExcluding: 10,
      lineTotalExcluding: 5, lineTotalTax: 5, lineTotalIncluding: 4}
  ];

  /**
   * Changes the value of the mockData table.
   *
   * @param { number } rowNumber
   * @param { selectedField: string, itemValue: number} changeObj
   */
  public changeValues(rowNumber: number, changeObj: { selectedField: string, itemValue: number}): void {
    if ( this.toExclude.indexOf(changeObj.selectedField) !== -1 || rowNumber > this.mockData.length) {
      alert('Please try again, does not meet the minimum requirements');
    } else {
      this.mockData[rowNumber][changeObj.selectedField] = changeObj.itemValue;
    }
  }
}
