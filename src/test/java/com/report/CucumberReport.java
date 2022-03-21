package com.report;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class CucumberReport {
	public static void generateJVMReport(String jsonfile) {
		File file = new File(System.getProperty("user.dir") + "\\src\\test\\resources\\Reports");
		Configuration configuration = new Configuration(file, "AdatinHotelWebApplication");
		configuration.addClassifications("platform", "Windows");
		configuration.addClassifications("Version", "Windows10");
		configuration.addClassifications("Sprint", "01");
		configuration.addClassifications("Build", "AdatinW2345");

		List<String> jsonFiles = new ArrayList<String>();
		jsonFiles.add(jsonfile);

		ReportBuilder builder = new ReportBuilder(jsonFiles, configuration);
		builder.generateReports();

	}

}
