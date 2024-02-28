import {  Page, Locator} from "playwright/test"
export class BillingSetupModel{
  private page: Page;
  addUtilityButton: Locator;
  billPrintSettings: Locator;
  billPrintSettingsHeader: Locator;
  calculationMessageField: Locator;
  calculationSettingsHeader: Locator;
  confirmSaveButton: Locator;
  dropdownItemDirectMetered: Locator;
  dropdownItemSewer: Locator;
  dropdownItemWater: Locator;
  enterSaveNote: Locator;
  finalSettingsHeader: Locator;
  generalSettings: Locator;
  generalSettingsDropdown: Locator;
  generalSettingsHeader: Locator;
  historyLog: Locator;
  isChargeHiddenOnFinalBillToggle: Locator;
  isChargeProratedToggle: Locator;
  methodDropdown: Locator;
  miscHeader: Locator;
  moveInStartOnField: Locator;
  myhistoryLog: Locator;
  providerDropdown: Locator;
  providerInfoHeader: Locator;
  propertyCodeSearch: Locator;
  rampSettingsHeader: Locator;
  saveButton: Locator;
  utilityDropdown: Locator;
  utilityListWater: Locator;
  


constructor(page: Page, propertyCode: string){

this.page = page;
this.addUtilityButton = page.locator('#billing_setup_action_dial_component').getByRole('button');
this.billPrintSettings = page.getByRole('heading', { name: 'Bill Print Settings' });
this.billPrintSettingsHeader = page.getByRole('heading', { name: 'Bill Print Settings', exact: true });
this.calculationMessageField = page.getByLabel('Calculation Message');
this.calculationSettingsHeader = page.getByRole('heading', { name: 'Calculation Settings', exact: true });
this.confirmSaveButton = page.getByRole('button', { name: 'Save' });
this.dropdownItemDirectMetered = page.getByRole('option', { name: 'Direct Metered' });
this.dropdownItemSewer = page.getByRole('option', { name: 'Sewer', exact: true });
this.dropdownItemWater = page.getByRole('option', { name: 'Water', exact: true });
this.enterSaveNote = page.getByLabel('Please enter a short note *');
this.finalSettingsHeader = page.getByRole('heading', { name: 'Final Settings' });
this.generalSettings = page.getByText('UtilityLegacy');
this.generalSettingsDropdown = page.locator('#general_settings_component').getByLabel('Open').first();
this.generalSettingsHeader = page.getByRole('heading', { name: 'General Settings' });
this.historyLog = page.getByRole('button', { name: 'History' });
this.isChargeHiddenOnFinalBillToggle = page.getByLabel('Is Current Cycle Hidden on');
this.isChargeProratedToggle = page.getByLabel('Is Charge Prorated', { exact: true });
this.methodDropdown = page.getByLabel('Method', { exact: true });
this.miscHeader = page.getByRole('heading', { name: 'Misc' });
this.moveInStartOnField = page.getByLabel('Move In Start On');
this.myhistoryLog = page.getByRole('button', { name: 'kylewinmill' });
this.providerDropdown = page.getByLabel('Provider', { exact: true });
this.providerInfoHeader = page.getByRole('heading', { name: 'Provider Info' });
this.propertyCodeSearch = page.getByLabel('Property Code');
this.rampSettingsHeader = page.getByRole('heading', { name: 'Ramp Settings' });
this.saveButton = page.getByLabel('Save', { exact: true });
this.utilityDropdown = page.getByLabel('Utility');
this.utilityListWater = page.getByText('water');

}}





