package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.report.CucumberReport;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Features", glue = "com.stepdefinition", dryRun= false,plugin = {
		"junit:src\\test\\resources\\Reports\\sample.xml", "html:src\\test\\resources\\Reports",
		"json:src\\test\\resources\\Reports\\AdatinHotel.json",})
public class TestRunner {
	@AfterClass
	public static void after() {
		CucumberReport.generateJVMReport(
				System.getProperty("user.dir") + "\\src\\test\\resources\\Reports\\AdatinHotel.json");
	}

}
