import { Component } from '@angular/core';

/**
 * Array schema interface for type security.
 */
export interface ArraySchema {
  type: string;
  value: number;
  enabled: Boolean;
}

@Component({
  selector: 'app-array-schema-colours',
  templateUrl: './array-schema-colours.component.html',
  styleUrls: ['./array-schema-colours.component.css']
})
export class ArraySchemaColoursComponent {

  /**
   * Mock data to be used.
   * @type { Array<ArraySchema> }
   */
  public colourSchema: Array<ArraySchema> = [
    {type: 'Red', value: 1, enabled: true},
    {type: 'Red', value: 1, enabled: true},
    {type: 'Green', value: 1, enabled: true},
    {type: 'Green', value: 1, enabled: true},
    {type: 'Blue', value: 1, enabled: true},
    {type: 'Blue', value: 1, enabled: true},
    {type: 'Red', value: 1, enabled: true},
    {type: 'Red', value: 1, enabled: true}
  ];

  /**
   * Calculated array.
   * @type { Array<ArraySchema> }
   */
  public calculateArray: Array<ArraySchema>;

  /**
   * Total calculated value
   * @type { number }
   */
  public totalValue: number = 0;

  /**
   * When mock data should be used
   */
  public useMockData(): void {
    this.calculateArray = null;
    this.calculateArray = this.colourSchema;
  }

  /**
   * Calculates the sum of the array.
   */
  public calculateSum(): void {
    this.totalValue = 0;
    this.calculateArray.forEach( (entry) => {
      switch (entry.type) {
        case 'Red' : {
          entry.enabled ? this.totalValue += entry.value : this.totalValue = 0; // anything times 0 should be zero
          break;
        }
        case 'Blue': {
          entry.enabled ? this.totalValue -= entry.value : this.totalValue = 0; // anything times 0 should be zero
          break;
        }
        case 'Green': {
          entry.enabled ? this.totalValue *= entry.value : this.totalValue = 0; // anything times 0 should be zero
          break;
        }
        default: {
          // adding zero stays the same amount when no type is added.
          this.totalValue ; // adding zero stays the same amount.
          break;
        }
      }
    });
  }
}
