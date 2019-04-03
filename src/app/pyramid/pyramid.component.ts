import { Component } from '@angular/core';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent {

  /**
   * Pyramid odd Array
   * @type { Array<Array<number>> }
   */
  public pyramidOddArray: Array<Array<number>>;

  /**
   * Pyramid row number
   * @type { number }
   */
  public pyramidRowNumber:number = 0;

  /**
   * Row number
   * @type { number }
   */
  public rowNumber:number = 0;

  /**
   * Current Odd number placeholder
   * @type { number }
   */
  public currentOdd: number;

  /**
   * Sum total
   * @type { number }
   */
  public sumTotal: number;

  /**
   * Create the Pyramid Array.
   */
  public createPyramidArray(): void {
    if (this.pyramidRowNumber < 1 ) {
      alert('must enter row number');
    } else {
      this.pyramidOddArray = new Array();
      this.currentOdd = 1;

      for (let step = 0; step < this.pyramidRowNumber; step++) {
        this.pyramidOddArray.push(this.createInnerArray(step));
        this.currentOdd += 2;
      }
    }
  }

  /**
   * Creates the internal array
   *
   * @param { number } entry
   * @return { Array<number> }
   */
  public createInnerArray(entry: number): Array<number> {
    let innerArray = [this.currentOdd];
    for (let step = 0; step < entry; step++) {
      innerArray.push(this.currentOdd += 2);
    }
    return innerArray;
  }

  /**
   * Calculates the value of the row.
   */
  public sumOfRow(rowNumber: number): void {
    // check if a value and right value is inserted
    if (!rowNumber || this.pyramidOddArray.length + 1 <= rowNumber || this.pyramidOddArray.length + 1 < 0) {
      alert('row number may not exceed ' + this.pyramidOddArray.length + ' or be less the 0');
    } else {

      // Actuall answer
      const pyramidObj = this.pyramidOddArray[rowNumber - 1];
      this.sumTotal = pyramidObj.reduce((a, b) => a + b, 0);
    }
  }
}
