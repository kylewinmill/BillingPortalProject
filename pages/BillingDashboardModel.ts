import {  Page, Locator} from "playwright/test"
export class BillingDashboardModel{
  private page: Page;
billingActivity: Locator;
billingData: Locator;
communityDetails: Locator;
firstPropertyInList: Locator;
notes: Locator;
searchButton: Locator;
searchType: Locator;
searchTypeBillingManager: Locator;
searchTypeTeam: Locator;
searchValues: Locator;
searchValuesBeckie: Locator;

constructor(page: Page, propertyCode: string){

this.page = page;


this.billingActivity = page.getByRole('tab', { name: 'Sequential' });
this.billingData = page.getByText('Due Date:');
this.communityDetails = page.getByText('Property Code:');
this.firstPropertyInList = page.locator('.MuiDataGrid-row > div:nth-child(2)').first();
this.notes = page.getByRole('button', { name: 'Notes' });
this.searchButton = page.getByRole('button', { name: 'Search' });
this.searchType = page.getByRole('button', { name: 'Open' });
this.searchTypeBillingManager = page.getByRole('option', { name: 'Billing Manager' });
this.searchTypeTeam = page.getByRole('option', { name: 'Team' });
this.searchValues = page.getByLabel('Search Values');
this.searchValuesBeckie = page.getByRole('option', { name: 'Beckie Saxton' });

}}





