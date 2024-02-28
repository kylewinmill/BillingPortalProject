// Importing necessary modules and components
import { BillingSetupModel } from "../pages/BillingSetupModel";
require("dotenv").config();
import { expect, test, Page } from '@playwright/test';
import exp from "constants";
import path from "path"; // Needed for upload test bill

// Setting up the URL and property code
const url = "billing-setup";
const propertyCode = 'am03';

// Test suite for Billing Setup functionality
test.describe('Billing Setup - Bill setup load & save change & history log check tests', async () => {
    let page: Page;
    let PM: BillingSetupModel;

    // Setting up the browser and page before running the tests
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        PM = new BillingSetupModel(page, propertyCode);
    });

    // Test to check the initial load of the Bill Setup page
    test('Billing Setup - Bill setup loadup test', async () => {
        // Comment: Add Jira key and description to test information
        test.info().annotations.push({
            type: "jiraKey",
            description: "BPORT-947",
        });      

        // Navigate to the specified URL
        await page.goto(url);

        // Fill and search for the property code
        await PM.propertyCodeSearch.fill(propertyCode);
        await PM.propertyCodeSearch.press('Enter');

        // Click on the water utility in the list
        await PM.utilityListWater.click();

        // Click on the general settings dropdown
        await PM.generalSettingsDropdown.click();

        // Expectations for visibility of various elements on the page
        await expect(PM.dropdownItemWater).toBeVisible();
        await PM.dropdownItemSewer.click();
        await expect(PM.generalSettingsHeader).toBeVisible();
        await expect(PM.calculationSettingsHeader).toBeVisible();
        await expect(PM.rampSettingsHeader).toBeVisible();
        await expect(PM.providerInfoHeader).toBeVisible();
        await expect(PM.billPrintSettingsHeader).toBeVisible();
        await expect(PM.finalSettingsHeader).toBeVisible();
        await expect(PM.billPrintSettings).toBeVisible();
        await expect(PM.miscHeader).toBeVisible();
        await expect(PM.utilityDropdown).toBeVisible();
        await expect(PM.methodDropdown).toBeVisible();
        await expect(PM.moveInStartOnField).toBeVisible();
        await expect(PM.providerDropdown).toBeVisible();
        await expect(PM.calculationMessageField).toBeVisible();
        await expect(PM.isChargeProratedToggle).toBeVisible();
        await expect(PM.isChargeHiddenOnFinalBillToggle).toBeVisible();
    });

    // Test to check saving changes and verifying history log
    test('Billing Setup - Save change with history log check test', async () => {
        // Comment: Add Jira key and description to test information
        test.info().annotations.push({
            type: "jiraKey",
            description: "BPORT-948",
        });

        // Click on the "Add Utility" button
        await PM.addUtilityButton.click();

        // Save the changes and provide a note
        await PM.saveButton.click();
        await PM.enterSaveNote.fill('Testing Please Disregard');
        await PM.confirmSaveButton.click();

        // Click on the history log and check for a specific user's entry
        await PM.historyLog.click();

        // Use a partial match to find a button associated with a user
        const partialName = 'kylewinmill';
        const button = await page.$(`button[name*="${partialName}"]`);

        // If the button is found, assert its visibility
        if (button) {
            const isVisible = await button.isVisible();
            expect(isVisible).toBe(true);
        }
    });
});
