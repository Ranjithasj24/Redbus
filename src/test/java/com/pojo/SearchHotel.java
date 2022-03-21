package com.pojo;

import org.bass.Baseclass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotel extends Baseclass {
	public SearchHotel() {
		PageFactory.initElements(driver, this);

	}

	@FindBy(id = "location")
	private WebElement location;

	@FindBy(id = "hotels")
	private WebElement hotels;

	@FindBy(id = "room_type")
	private WebElement roomtype;

	@FindBy(id = "room_nos")
	private WebElement noOfRooms;

	@FindBy(id = "datepick_in")
	private WebElement checkin;

	@FindBy(id = "datepick_out")
	private WebElement checkout;

	@FindBy(id = "adult_room")
	private WebElement noOfAdult;

	@FindBy(id = "child_room")
	private WebElement childroom;

	@FindBy(xpath = "//input[@id='Submit']")
	private WebElement Scr;

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotels() {
		return hotels;
	}

	public WebElement getRoomtype() {
		return roomtype;
	}

	public WebElement getNoOfRooms() {
		return noOfRooms;
	}

	public WebElement getCheckin() {
		return checkin;
	}

	public WebElement getCheckout() {
		return checkout;
	}

	public WebElement getNoOfAdult() {
		return noOfAdult;
	}

	public WebElement getChildroom() {
		return childroom;
	}

	public WebElement getScr() {
		return Scr;
	}

}
