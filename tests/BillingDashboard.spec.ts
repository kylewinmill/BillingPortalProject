// Importing necessary modules and classes
import { BillingDashboardModel } from "../pages/BillingDashboardModel";
require("dotenv").config(); // Loading environment variables
import { expect, test } from '@playwright/test';
import { time } from "console";
import path from "path"; // Required for upload test bill

// Declaring constants
const url = ""; // Specify the target URL
const propertyCode = 'am033'; // Setting a property code for testing

// Defining a test case for Billing Dashboard
test('Billing Dashboard - Search by team with first property load test', async ({ page }) => {

  // Creating an instance of BillingDashboardModel with the current page and property code
  const PM = new BillingDashboardModel(page, propertyCode);

  // Adding Jira key information to test annotations
  test.info().annotations.push({
    type: "jiraKey",
    description: "BPORT-954",
  });

  // Navigating to the specified URL
  await page.goto(url);

  // Waiting for a specific API response before proceeding
  await page.waitForResponse("https://dev-api.ac1.conservice.com/billing/dashboard/secured/api/v1/Dashboard/Search/BillingTeamLeadersGet");

  // Performing actions to search for a team and load the first property
  await PM.searchType.click();
  await PM.searchTypeTeam.click();
  await PM.searchValues.fill('Beckie Saxton');
  await PM.searchValuesBeckie.click();
  await PM.searchButton.click();
  await PM.firstPropertyInList.click();

  // Asserting expectations on various elements of the Billing Dashboard
  expect(await PM.communityDetails.innerText()).toContain('Property Code');
  expect(await PM.notes.innerText()).toContain('SAVE NOTES');
  expect(await PM.billingActivity.innerText()).toContain('SEQUENTIAL');
  expect(await PM.billingData.innerText()).toContain('Due Date');
});
