/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert row and get newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Updated row with age added
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);

