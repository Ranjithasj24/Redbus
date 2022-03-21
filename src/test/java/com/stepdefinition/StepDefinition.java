package com.stepdefinition;

import org.bass.Baseclass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.pojo.BookHotel;
import com.pojo.BookingConfirmation;
import com.pojo.Login1;
import com.pojo.SearchHotel;
import com.pojo.SelectHotel;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition extends Baseclass {
	public static WebDriver driver;

	@Given("User launch the Adactin Hotel Web Application")
	public void user_launch_the_Adactin_Hotel_Web_Application() {

	}

	@When("User enters the valid username and valid password")
	public void user_enters_the_valid_username_and_valid_password() {
		Login1 lg = new Login1();
		sendKeys(lg.getUsername(), "Venkadesan");
		sendKeys(lg.getPassword(), "6379796815");
	}

	@When("User click the login Button")
	public void user_click_the_login_Button() {
		Login1 lg = new Login1();
		click(lg.getLogin());
	}

	@Then("User Verify the Search Hotel options page is Displayed")
	public void user_Verify_the_Search_Hotel_options_page_is_Displayed() {
		WebElement element = findElementByxpath("//td[@class='login_title']");
		String text = element.getText();
		boolean contains = text.contains("Search");
		System.out.println(contains);
	}

	@When("User can be Select the Location,Hotel,Room Type,Number of Room,Checkin date,Checkout date,Adult per Room,Children per Room")
	public void user_can_be_Select_the_Location_Hotel_Room_Type_Number_of_Room_Checkin_date_Checkout_date_Adult_per_Room_Children_per_Room() {
		SearchHotel sh = new SearchHotel();
		selectOptionByIndex(sh.getLocation(), 6);
		selectOptionByIndex(sh.getHotels(), 1);
		selectOptionByIndex(sh.getRoomtype(), 3);
		selectOptionByIndex(sh.getNoOfRooms(), 3);
		clear(sh.getCheckin());
		sendKeys(sh.getCheckin(), "23/03/2022");
		clear(sh.getCheckout());
		sendKeys(sh.getCheckout(), "25/03/2022");
		selectOptionByIndex(sh.getNoOfAdult(), 2);
	}

	@When("User can Click the search Hotel Button")
	public void user_can_Click_the_search_Hotel_Button() {
		SearchHotel sh = new SearchHotel();
		click(sh.getScr());
	}

	@Then("User Verify the Select Hotel is Displayed")
	public void user_Verify_the_Select_Hotel_is_Displayed() {
		WebElement element = findElementByxpath("//td[@class='login_title']");
		String text = element.getText();
		boolean contains = text.contains("Select");
		System.out.println(contains);

	}

	@When("User can be select the Radio Butten and Continue Button")
	public void user_can_be_select_the_Radio_Butten_and_Continue_Button() {
		SelectHotel st = new SelectHotel();
		click(st.getBtn());
		click(st.getCnt());
	}

	@Then("User Verify the Book Hotel page is Displayed")
	public void user_Verify_the_Book_Hotel_page_is_Displayed() {
		WebElement element = findElementByxpath("//td[text()='Book A Hotel ']");
		String text = element.getText();
		boolean contains = text.contains("Book");
		System.out.println(contains);
	}

	@When("User can Enter the FirstName,LastName,Billing Address")
	public void user_can_Enter_the_FirstName_LastName_Billing_Address() {
		BookHotel bh = new BookHotel();
		sendKeys(bh.getFirstame(), "Venkadesan");
		sendKeys(bh.getLastName(), "S");
		sendKeys(bh.getAddress(), "USA");
	}

	@When("User can Enter the Valid Credit Card Number,Credit Card Type,Credit Card Expiry Date,Credit Card Expiry Year,Credit Card CVV number")
	public void user_can_Enter_the_Valid_Credit_Card_Number_Credit_Card_Type_Credit_Card_Expiry_Date_Credit_Card_Expiry_Year_Credit_Card_CVV_number() {
		BookHotel bh = new BookHotel();
		sendKeys(bh.getCardNum(), "9876543212345678");
		selectOptionByIndex(bh.getCardType(), 2);
		selectOptionByIndex(bh.getMonth(), 12);
		selectOptionByIndex(bh.getYear(), 12);
		sendKeys(bh.getCvvNum(), "877");
	}

	@When("User Can Click the Book Now Button")
	public void user_Can_Click_the_Book_Now_Button() {
		BookHotel bh = new BookHotel();
		click(bh.getBtnBook());
	}

	@Then("User Verify the Booking Confirmation page and Check Weather the Oder ID is Generated")
	public void user_Verify_the_Booking_Confirmation_page_and_Check_Weather_the_Oder_ID_is_Generated() {
		BookingConfirmation bc = new BookingConfirmation();
		WebElement element = findElementByxpath("//td[text()='Booking Confirmation ']");
		String text = element.getText();
		boolean contains = text.contains("Booking");
		System.out.println(contains);
		String orderId = getAttribute(bc.getOrderid());
		System.out.println(orderId);
	}

	@When("User enters the valid {string} and {string}")
	public void user_enters_the_valid_and(String string, String string2) {
		Login1 lg = new Login1();
		sendKeys(lg.getUsername(), string);
		sendKeys(lg.getPassword(), string2);
	}

	@When("User can be Select the {string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_can_be_Select_the(String string, String string2, String string3, String string4, String string5,
			String string6, String string7, String string8) {
		SearchHotel sh = new SearchHotel();
		selectOptionByVisibleText(sh.getLocation(), string);
		selectOptionByVisibleText(sh.getHotels(), string2);
		selectOptionByVisibleText(sh.getRoomtype(), string3);
		selectOptionByVisibleText(sh.getNoOfRooms(), string4);
		clear(sh.getCheckin());
		sendKeys(sh.getCheckin(), string5);
		clear(sh.getCheckout());
		sendKeys(sh.getCheckout(), string6);
		selectOptionByVisibleText(sh.getNoOfAdult(), string7);
		selectOptionByVisibleText(sh.getChildroom(), string8);
	}

	@When("User can Enter the {string},{string},{string}")
	public void user_can_Enter_the(String string, String string2, String string3) {
		BookHotel bh = new BookHotel();
		sendKeys(bh.getFirstame(), string);
		sendKeys(bh.getLastName(), string2);
		sendKeys(bh.getAddress(), string3);

	}

	@When("User can Enter the Valid {string},{string},{string},{string},{string}")
	public void user_can_Enter_the_Valid(String string, String string2, String string3, String string4,
			String string5) {
		BookHotel bh = new BookHotel();
		sendKeys(bh.getCardNum(), string);
		selectOptionByVisibleText(bh.getCardType(), string2);
		selectOptionByVisibleText(bh.getMonth(), string3);
		selectOptionByvalue(bh.getYear(), string4);
		sendKeys(bh.getCvvNum(), string5);
	}

}