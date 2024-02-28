import {  Page, Locator} from "playwright/test"
export class BillingTasklistModel{
  private page: Page;
  addTaskButton: Locator;
  amandaDunn: Locator;
  billApprovalTask: Locator;
  createTaskNote: Locator;
  createTaskProperty: Locator;
  expandSendExportTasks: Locator;
  expandTasks: Locator;
  filterButton: Locator;
  groupByFilter: Locator;
  assignedToKyleTask: Locator;
  kyleWinmill: Locator;
  override: Locator;
  popupSaveButton: Locator;
  prebillStatusCancelButton: Locator;
  prebillStatusNote: Locator;
  searchUser: Locator;
  sendExportButton: Locator;
  settingsButton: Locator;
  settingsOptions: Locator;
  showTeamsTasksButton: Locator;
  taskBox: Locator;
  taskTypeOption: Locator;
  tasks: Locator;
  userTasks: Locator;
  

constructor(page: Page, propertyCode: string){

this.page = page;

this.addTaskButton = page.getByLabel('Add Task');
this.amandaDunn = page.getByRole('option', { name: 'Amanda Dunn' });
this.billApprovalTask = page.getByRole('heading', { name: 'Bill Approval' });
this.createTaskNote = page.getByRole('textbox', { name: 'Task Note' });
this.createTaskProperty = page.getByLabel('Property');
this.expandSendExportTasks = page.locator('li').filter({ hasText: 'Send Export' }).getByTestId('ExpandLessIcon');
this.expandTasks = page.getByTestId('ExpandLessIcon');
this.filterButton = page.getByLabel('Filter/Sort/Group');
this.groupByFilter = page.getByRole('combobox', { name: 'Group By' });
this.assignedToKyleTask = page.getByText('AM033Test Task NoteCreated:');
this.kyleWinmill = page.getByRole('option', { name: 'Kyle Winmill' });
this.override = page.getByText('Click save again to override');
this.popupSaveButton = page.getByRole('button', { name: 'Save' });
this.prebillStatusCancelButton = page.getByRole('button', { name: 'Cancel' });
this.prebillStatusNote = page.getByText('Approved By: Expired / Sent');
this.searchUser = page.getByRole('combobox', { name: 'Search User' });
this.sendExportButton = page.getByRole('button', { name: 'Send Export' });
this.settingsButton = page.getByLabel('Settings');
this.settingsOptions = page.locator('div').filter({ hasText: /^Task Refresh Option$/ });
this.showTeamsTasksButton = page.getByRole('checkbox');
this.taskBox = page.locator('ul:nth-child(4) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > li > .MuiListItem-root > div:nth-child(2)').first();
this.taskTypeOption = page.getByRole('option', { name: 'Task Type' });
this.tasks = page.getByRole('heading', { name: 'Tasks' });
this.userTasks = page.getByRole('heading', { name: 'User Task' });

}}





