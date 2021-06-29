$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "\tIn order to do internet banking\n\tAs a valid Para Bank customer\n\tI want to login successfully",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login Successful",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_am_in_the_login_page_of_the_Para_Bank_Application() in file:/Users/casey/Desktop/Cucumber_TAU/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid credentials",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_enter_valid_credentials(DataTable) in file:/Users/casey/Desktop/Cucumber_TAU/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_should_be_taken_to_the_Overview_page() in file:/Users/casey/Desktop/Cucumber_TAU/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.className: smallText (tried for 20 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat com.tau.steps.Steps.i_should_be_taken_to_the_Overview_page(Steps.java:123)\n\tat ✽.I should be taken to the Overview page(///Users/casey/Desktop/Cucumber_TAU/tau-cucumber-course/src/test/resources/Login.feature:14)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".smallText\"}\n  (Session info: chrome\u003d91.0.4472.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Caseys-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1c04:c138:da4b:2ea6%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /var/folders/sb/qtzfnxp523n...}, goog:chromeOptions: {debuggerAddress: localhost:65010}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e0b584878299977ed199326b836b538d\n*** Element info: {Using\u003dclass name, value\u003dsmallText}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor8.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:641)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:638)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat com.tau.steps.Steps.i_should_be_taken_to_the_Overview_page(Steps.java:123)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:28)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:58)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:60)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:46)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:168)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:79)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1130)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:630)\n\tat java.base/java.lang.Thread.run(Thread.java:832)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});