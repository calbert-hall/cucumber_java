Feature: Login Functionality 

	In order to do internet banking
	As a valid Para Bank customer
	I want to login successfully

@Login
Scenario: Login Successful

Given I am in the login page of the Para Bank Application
When I enter valid credentials
	|applitools|password|Applitools Tester|
Then I should be taken to the Overview page


@Admin
Scenario: Admin Page

Given I am in the login page
When I click the admin button
Then I should be taken to the Admin page