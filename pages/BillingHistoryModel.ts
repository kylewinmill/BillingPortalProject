import {  Page, Locator} from "playwright/test"
export class BillingHistoryModel{
  private page: Page;
  approvedAtEnd: Locator;
  approvedAtStart: Locator;
  assignedToCellContent: Locator;
  assignedToUser: Locator;
  assignedToUserSelection: Locator;
  clearButton: Locator;
  dueOnEnd: Locator;
  dueOnStart: Locator;
  historyExpander: Locator;
  postMonthEnd: Locator;
  postMonthStart: Locator;
  propertyCodeSearch: Locator;
  propertyCodeSelection: Locator;
  propertyIDCellContent: Locator;
  qualityControl: Locator;
  resolvedAtEnd: Locator;
  resolvedAtStart: Locator;
  searchbutton: Locator;
  taskType: Locator;
  taskTypeCellContent: Locator;
  viewQC: Locator;
  


constructor(page: Page, propertyCode: string){

this.page = page;

this.approvedAtEnd = page.getByLabel('Approved At End');
this.approvedAtStart = page.getByLabel('Approved At Start');
this.assignedToCellContent = page.locator('div:nth-child(2) > div:nth-child(9) > .MuiDataGrid-cellContent').first();
this.assignedToUser = page.getByPlaceholder('User(s)');
this.assignedToUserSelection = page.getByRole('option', { name: 'Tamara Hale' });
this.clearButton = page.getByRole('button', { name: 'Clear' });
this.dueOnEnd = page.getByLabel('Due On End');
this.dueOnStart = page.getByLabel('Due On Start');
this.historyExpander = page.getByRole('row', { name: 'History: 2 625956 285894' }).getByRole('button');
this.postMonthEnd = page.getByLabel('Post Month End');
this.postMonthStart = page.getByLabel('Post Month Start');
this.propertyCodeSearch = page.getByLabel('Property Code(s)');
this.propertyCodeSelection = page.getByRole('option', { name: propertyCode });
this.propertyIDCellContent = page.locator('div:nth-child(6) > .MuiDataGrid-cellContent').first();
this.qualityControl = page.getByRole('heading', { name: 'Quality Control for am033 -' });
this.resolvedAtEnd = page.getByLabel('Resolved At End');
this.resolvedAtStart = page.getByLabel('Resolved At Start');
this.searchbutton = page.getByRole('button', { name: 'Search' });
this.taskType = page.getByLabel('Task Type');
this.taskTypeCellContent = page.locator('div:nth-child(7) > .MuiDataGrid-cellContent').first();
this.viewQC = page.getByRole('row', { name: 'History: 2 Opens in a new tab 498331 232692 am033 1082650 Billing Quality' }).getByLabel('Opens in a new tab');



}}





