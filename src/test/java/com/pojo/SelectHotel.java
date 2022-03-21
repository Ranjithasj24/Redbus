package com.pojo;

import org.bass.Baseclass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectHotel extends Baseclass {
	public SelectHotel() {
		PageFactory.initElements(driver, this);

	}

	@FindBy(xpath = "//input[@id='radiobutton_0']")
	private WebElement btn;

	@FindBy(id = "continue")
	private WebElement cnt;

	public WebElement getBtn() {
		return btn;
	}

	public WebElement getCnt() {
		return cnt;
	}

}
