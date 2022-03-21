package com.pojo;

import org.bass.Baseclass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookingConfirmation extends Baseclass {
	public BookingConfirmation() {
		PageFactory.initElements(driver, this);

	}
	
	@FindBy(id = "order_no")
	private WebElement orderid;

	public WebElement getOrderid() {
		return orderid;
	}

}
