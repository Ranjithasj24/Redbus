package com.pojo;

import org.bass.Baseclass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookHotel extends Baseclass {
	public BookHotel() {
		PageFactory.initElements(driver, this);

	}
	@FindBy(xpath = "//input[@id='first_name']")
	private WebElement firstame;
	@FindBy(xpath = "//input[@id='last_name']")
	private WebElement lastName;
	@FindBy(xpath = "//textarea[@id='address']")
	private WebElement address;
	@FindBy(xpath = "//input[@id='cc_num']")
	private WebElement cardNum;
	@FindBy(id = "cc_type")
	private WebElement cardType;
	@FindBy(id = "cc_exp_month")
	private WebElement month;
	@FindBy(xpath = "//select[@id='cc_exp_year']")
	private WebElement year;
	@FindBy(xpath = "//input[@id='cc_cvv']")
	private WebElement cvvNum;
	@FindBy(xpath = "//input[@id='book_now']")
	private WebElement btnBook;
	public WebElement getFirstame() {
		return firstame;
	}
	public WebElement getLastName() {
		return lastName;
	}
	public WebElement getAddress() {
		return address;
	}
	public WebElement getCardNum() {
		return cardNum;
	}
	public WebElement getCardType() {
		return cardType;
	}
	public WebElement getMonth() {
		return month;
	}
	public WebElement getYear() {
		return year;
	}
	public WebElement getCvvNum() {
		return cvvNum;
	}
	public WebElement getBtnBook() {
		return btnBook;
	}
	public void bookHotel(String firstname,String lastname,String Adr,String cardnum,String crdtype, String mnt, String yr, String cvvno) {
		sendKeys(getFirstame(), firstname);
		sendKeys(getLastName(), lastname);
		sendKeys(getAddress(), Adr);
		sendKeys(getCardNum(), cardnum);
		selectOptionByVisibleText(getCardType(), crdtype);
		selectOptionByVisibleText(getMonth(), mnt);
		sendKeys(getYear(), yr);
	    sendKeys(getCvvNum(), cvvno);
		click(getBtnBook());
		}
}