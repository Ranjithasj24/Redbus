package com.stepdefinition;

import org.bass.Baseclass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass extends Baseclass {

	@Before
	public void beforeExecution() {
		getdriver();
		loadUrl("http://adactinhotelapp.com/");
		maximize();
		waittime(30);
	}

	@After
	public void afterExecution(Scenario s) {
		TakesScreenshot screenshot = (TakesScreenshot) driver;
		byte[] screenshotAs = screenshot.getScreenshotAs(OutputType.BYTES);
		s.embed(screenshotAs, "img/png");

		quit();

	}

}
