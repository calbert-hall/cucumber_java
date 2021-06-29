package com.tau.steps;

import static org.junit.Assert.assertTrue;

import java.util.List;

import com.applitools.eyes.selenium.fluent.Target;
import io.cucumber.java.Scenario;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.tau.base.BaseUtil;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.applitools.eyes.*;
import com.applitools.eyes.selenium.BrowserType;
import com.applitools.eyes.selenium.ClassicRunner;
import com.applitools.eyes.selenium.Configuration;
import com.applitools.eyes.selenium.Eyes;
import com.applitools.eyes.visualgrid.model.*;
import com.applitools.eyes.visualgrid.services.VisualGridRunner;


public class Steps extends BaseUtil {
	
	private BaseUtil baseUtil;
	
	public Steps(BaseUtil util) {
		this.baseUtil = util;
	}
	
	private WebDriver driver;

	private Eyes eyes;

	public static BatchInfo batchInfo = new BatchInfo("Cucumber Batch");

	public void eyesSetup() {
		Configuration config = new Configuration();
		config.addBrowser(1920, 800, BrowserType.CHROME);

		//TODO uncomment these to add more browser + device Ultrafast grid configurations!
		//config.addBrowser(1600, 1200, BrowserType.CHROME);
		//config.addDeviceEmulation(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT);

		config.setLayoutBreakpoints(true);
		config.setBatch(batchInfo);

		eyes.setConfiguration(config);
	}


	@Before
	public void setup (Scenario scenario) {
		driver = new ChromeDriver();

		VisualGridRunner runner = new VisualGridRunner();
		eyes = new Eyes(runner);
		eyesSetup();

		//Use eyes.open to create tests with different names.
		eyes.open( driver, "Sample Banking App", scenario.getName(), new RectangleSize(1200, 800));
	}

	@Given("I am in the login page")
	@Given("I am in the login page of the Para Bank Application")
	public void i_am_in_the_login_page_of_the_Para_Bank_Application() {

		driver.get("https://parabank.parasoft.com/parabank/index.htm");
		eyes.check(Target.window().fully().withName("Login Page"));
	}


	@Then("I should be taken to the Overview page")
	public void i_should_be_taken_to_the_Overview_page() throws Exception {
		
		//WebDriverWait wait = new WebDriverWait(driver, 20);
		//wait.until(ExpectedConditions.elementToBeClickable(By.className("smallText")));

		//No need for manual assertions w/Applitools!
		//String actualuserFullName = driver.findElement(By.className("smallText")).getText().toString();
		//assertTrue(actualuserFullName, actualuserFullName.contains(baseUtil.userFullName));

		eyes.check(Target.window().fully().withName("I should be taken to the overview page"));

		//driver.findElement(By.linkText("Log Out")).click();

	}
	

	@When("I enter valid credentials")
	public void i_enter_valid_credentials(DataTable table) {
		
		List<String> loginForm=table.asList();

		baseUtil.userFullName = loginForm.get(2);

		driver.findElement(By.name("username")).sendKeys(loginForm.get(0));
		driver.findElement(By.name("password")).sendKeys(loginForm.get(1));
		driver.findElement(By.name("username")).submit();
	}


	@After()
	public void quitBrowser() {
	    try{
			driver.quit();
			eyes.close();
		}catch (Exception exception) {
	    	eyes.abortIfNotClosed();
		}
	}

	@When("I click the admin button")
	public void iClickTheAdminButton() {
		driver.findElement(By.cssSelector("#headerPanel > ul.leftmenu > li:nth-child(6) > a")).click();
	}

	@Then("I should be taken to the Admin page")
	public void iShouldBeTakenToTheAdminPage() {
		eyes.check(Target.window().fully().withName("I should be taken to the admin page"));
	}
}
