
// Import necessary modules and classes
import { BillingHistoryModel } from "../pages/BillingHistoryModel";
require("dotenv").config();
import { expect, test } from '@playwright/test';
import exp from "constants";
import path from "path"; // Needed for upload test bill

// Define common variables
const url = "billing-task-history";
const propertyCode = 'am033';
const secondPropertyCode = 'am03';


//test.setTimeout(120000) 
// Test to search history by property code
test('Billing Task History - Search history by prop code test', async ({ page }) => {
    // Comment: Add Jira key and description to test information
    test.info().annotations.push({
        type: "jiraKey",
        description: "BPORT-930",
    });

    // Create an instance of BillingHistoryModel with the specified property code
    const PM = new BillingHistoryModel(page, propertyCode);

    // Navigate to the specified URL
    await page.goto(url);

    // Perform actions to search history by property code
    await PM.propertyCodeSearch.pressSequentially(propertyCode);
    await PM.propertyCodeSelection.click();
    await PM.searchbutton.click();
    await PM.historyExpander.click();
    await expect(PM.propertyIDCellContent).toContainText('1082650');
    await PM.viewQC.click();

    // Wait for and validate the URL of the opened popup
    const page1Promise = page.waitForEvent('popup');
    const page1 = await page1Promise;
    await expect(page1).toHaveURL('https://conserviceportaldev.azureedge.net/billing/billing-task-history/quality-control-task/am033/2023-10-01',{timeout: 30000});
});

// Test to search history by user assigned
test('Billing Task History - Search history by user assigned & due on dates test', async ({ page }) => {
    // Comment: Add Jira key and description to test information
    test.info().annotations.push({
        type: "jiraKey",
        description: "BPORT-931",
    });

    // Create an instance of BillingHistoryModel with the specified property code
    const PM = new BillingHistoryModel(page, propertyCode);

    // Navigate to the specified URL
    await page.goto(url);

    // Perform actions to search history by user assigned
    await PM.assignedToUser.click();
    await PM.assignedToUser.pressSequentially('tamara hale');
    await PM.assignedToUserSelection.click();
    await PM.dueOnStart.click();

    // Set date range for the search
    const today = new Date();
    let firstOfMonth = new Date(today.getFullYear(), today.getMonth() - 2, 1);
    await PM.dueOnStart.fill(firstOfMonth.toLocaleDateString());
    const lastOFMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    await PM.dueOnEnd.click();
    await PM.dueOnEnd.fill(lastOFMonth.toLocaleDateString());

    // Perform the search and validate the result
    await PM.searchbutton.click();
    await expect(PM.assignedToCellContent).toContainText('Tamara Hale',{timeout: 40000});
});

// Test to search history by task type
test('Billing Task History - Search history by task type test', async ({ page }) => {
    // Comment: Add Jira key and description to test information
    test.info().annotations.push({
        type: "jiraKey",
        description: "BPORT-932",
    });

    // Create an instance of BillingHistoryModel with a different property code
    const PM = new BillingHistoryModel(page, secondPropertyCode);

    // Navigate to the specified URL
    await page.goto(url);

    // Perform actions to search history by task type
    await PM.taskType.click();
    await page.getByRole('option', { name: 'Bill Approval' }).click();
    await PM.searchbutton.click();
    await expect(PM.taskTypeCellContent).toContainText('Bill Approval',{timeout: 30000});
});