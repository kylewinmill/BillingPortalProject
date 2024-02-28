// Importing necessary modules and components
import { BillingTasklistModel } from "../pages/BillingTasklistModel";
require("dotenv").config();
import { expect, test, Page } from '@playwright/test';
import exp from "constants";
import path from "path"; // Needed for upload test bill

// Setting up the URL and property code
const url = "billing-task-list";
const propertyCode = 'am033';

// Test suite for Billing Tasklist functionality
test.describe('Billing Task List - Load tasks & use filters & send export & add task tests', async () => {
    let page: Page;
    let PM: BillingTasklistModel;

    // Setting up the browser and page before running the tests
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        PM = new BillingTasklistModel(page, propertyCode);
    });

    // Test to load tasks and search for a specific user task
    test('Billing Task List - Search user task load test', async () => {
        // Comment: Add Jira key and description to test information
        test.info().annotations.push({
            type: "jiraKey",
            description: "BPORT-949",
        });
 
        // Navigate to the specified URL
        await page.goto(url);

        // Fill and search for a specific user
        await PM.searchUser.fill('amanda dunn');
        await PM.amandaDunn.click();
        await PM.expandTasks.click();

        // Expect the tasks to be visible
        expect(await PM.tasks).toBeVisible;
    });

    // Test to show team tasks, apply filters, and group by filter
    test('Billing Task List - Show team task filter & group by filter test', async () => {
        // Comment: Add Jira key and description to test information
        test.info().annotations.push({
            type: "jiraKey",
            description: "BPORT-950",
        });

        // Click on the show teams tasks button, filter button, and group by filter
        await PM.showTeamsTasksButton.click();
        await PM.filterButton.click();
        await PM.groupByFilter.click();
        await PM.taskTypeOption.click();

        // Expect the bill approval task to be visible
        expect(await PM.billApprovalTask).toBeVisible;
    });

    // Test to send export tasks
    test('Billing Task List - Send export test', async () => {
        // Comment: Add Jira key and description to test information
        test.info().annotations.push({
            type: "jiraKey",
            description: "BPORT-951",
        });

        // Expand send export tasks, click on task box, send export, and handle popup
        await PM.expandSendExportTasks.click();
        await PM.taskBox.click();
        await PM.sendExportButton.click();
        await PM.popupSaveButton.click();
        await PM.sendExportButton.click();

        // Expect prebill status note to contain 'kylewinmill'
        expect(await PM.prebillStatusNote).toContainText('kylewinmill',{timeout: 60000});

        // Cancel the prebill status
        await PM.prebillStatusCancelButton.click();
    });

    // Test for settings task refresh option
    test('Billing Task List - Settings task refresh option test', async () => {
         // Comment: Add Jira key and description to test information
         test.info().annotations.push({
            type: "jiraKey",
            description: "BPORT-952",
        });
 
        // Click on the settings button and expect options to be visible
        await PM.settingsButton.click();
        expect(await PM.settingsOptions).toBeVisible;
    });

    // Test to create a task
    test('Billing Task List - Create task test', async () => {
         // Comment: Add Jira key and description to test information
         test.info().annotations.push({
            type: "jiraKey",
            description: "BPORT-953",
        });
 
        // Click on add task button, fill task details, save, override, and search for user task
        await PM.addTaskButton.click();
        await PM.createTaskNote.fill('Test Task Note');
        await PM.createTaskProperty.fill(propertyCode);
        await PM.popupSaveButton.click();
        await PM.override.click();
        await PM.popupSaveButton.click(); // Save again to override
        await PM.searchUser.fill('kyle winmill');
        await PM.kyleWinmill.click();
        await PM.userTasks.click();

        // Expect Kyle's task to be visible
        expect(await PM.assignedToKyleTask).toBeVisible,{timeout: 30000};
    });
});
