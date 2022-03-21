$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/AdaticHotel.feature");
formatter.feature({
  "name": "Validation of Adactin Hotel Web Application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the Adactin Hotel Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_Adactin_Hotel_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_01_validation of AdactinHotel page with valid Credentials and to get Booking order ID",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enters the valid username and valid password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_valid_username_and_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_the_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Search Hotel options page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Search_Hotel_options_page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can be Select the Location,Hotel,Room Type,Number of Room,Checkin date,Checkout date,Adult per Room,Children per Room",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_be_Select_the_Location_Hotel_Room_Type_Number_of_Room_Checkin_date_Checkout_date_Adult_per_Room_Children_per_Room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Click the search Hotel Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_can_Click_the_search_Hotel_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Select Hotel is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Select_Hotel_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can be select the Radio Butten and Continue Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_be_select_the_Radio_Butten_and_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Book Hotel page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Book_Hotel_page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Enter the FirstName,LastName,Billing Address",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_Enter_the_FirstName_LastName_Billing_Address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Enter the Valid Credit Card Number,Credit Card Type,Credit Card Expiry Date,Credit Card Expiry Year,Credit Card CVV number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_Enter_the_Valid_Credit_Card_Number_Credit_Card_Type_Credit_Card_Expiry_Date_Credit_Card_Expiry_Year_Credit_Card_CVV_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Can Click the Book Now Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Can_Click_the_Book_Now_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Booking Confirmation page and Check Weather the Oder ID is Generated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Booking_Confirmation_page_and_Check_Weather_the_Oder_ID_is_Generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_02_validation of AdactinHotel page with valid Credentials and get Booking 4 order ID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters the valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click the login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Verify the Search Hotel options page is Displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "User can be Select the \"\u003cLocation\u003e\",\"\u003cHotel\u003e\",\"\u003cRoom Type\u003e\",\"\u003cNumber of Room\u003e\",\"\u003cCheckin date\u003e\",\"\u003cCheckout date\u003e\",\"\u003cAdult per Room\u003e\",\"\u003cChildren per Room\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can Click the search Hotel Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Verify the Select Hotel is Displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "User can be select the Radio Butten and Continue Button",
  "keyword": "When "
});
formatter.step({
  "name": "User Verify the Book Hotel page is Displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "User can Enter the \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cBilling Address\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can Enter the Valid \"\u003cCredit Card Number\u003e\",\"\u003cCredit Card Type\u003e\",\"\u003cCredit Card Expiry Date\u003e\",\"\u003cCredit Card Expiry Year\u003e\",\"\u003cCredit Card CVV number\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Can Click the Book Now Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Verify the Booking Confirmation page and Check Weather the Oder ID is Generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotel",
        "Room Type",
        "Number of Room",
        "Checkin date",
        "Checkout date",
        "Adult per Room",
        "Children per Room",
        "FirstName",
        "LastName",
        "Billing Address",
        "Credit Card Number",
        "Credit Card Type",
        "Credit Card Expiry Date",
        "Credit Card Expiry Year",
        "Credit Card CVV number"
      ]
    },
    {
      "cells": [
        "Venkadesan",
        "6379796815",
        "London",
        "Hotel Sunshine",
        "Standard",
        "2 - Two",
        "23/03/2022",
        "26/03/2022",
        "2 - Two",
        "2 - Two",
        "Venki",
        "S",
        "UK",
        "2345678909876543",
        "VISA",
        "September",
        "2022",
        "8777"
      ]
    },
    {
      "cells": [
        "Venkadesan",
        "6379796815",
        "Los Angeles",
        "Hotel Hervey",
        "Double",
        "3 - Three",
        "23/03/2022",
        "25/03/2022",
        "3 - Three",
        "1 - One",
        "Baskaran",
        "M",
        "Russia",
        "2345678909876898",
        "Master Card",
        "November",
        "2022",
        "9876"
      ]
    },
    {
      "cells": [
        "Venkadesan",
        "6379796815",
        "Paris",
        "Hotel Cornice",
        "Deluxe",
        "4 - Four",
        "25/03/2022",
        "27/03/2022",
        "3 - Three",
        "3 - Three",
        "Barani",
        "A",
        "India",
        "2345672229876898",
        "American Express",
        "December",
        "2022",
        "6789"
      ]
    },
    {
      "cells": [
        "Venkadesan",
        "6379796815",
        "Adelaide",
        "Hotel Creek",
        "Super Deluxe",
        "2 - Two",
        "26/03/2022",
        "29/03/2022",
        "2 - Two",
        "1 - One",
        "Arun",
        "V",
        "USA",
        "2345667859876898",
        "VISA",
        "October",
        "2022",
        "9087"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the Adactin Hotel Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_Adactin_Hotel_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02_validation of AdactinHotel page with valid Credentials and get Booking 4 order ID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters the valid \"Venkadesan\" and \"6379796815\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_the_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Search Hotel options page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Search_Hotel_options_page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can be Select the \"London\",\"Hotel Sunshine\",\"Standard\",\"2 - Two\",\"23/03/2022\",\"26/03/2022\",\"2 - Two\",\"2 - Two\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_be_Select_the(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Click the search Hotel Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_can_Click_the_search_Hotel_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Select Hotel is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Select_Hotel_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can be select the Radio Butten and Continue Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_be_select_the_Radio_Butten_and_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Book Hotel page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Book_Hotel_page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Enter the \"Venki\",\"S\",\"UK\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_Enter_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Enter the Valid \"2345678909876543\",\"VISA\",\"September\",\"2022\",\"8777\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_Enter_the_Valid(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Can Click the Book Now Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Can_Click_the_Book_Now_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Booking Confirmation page and Check Weather the Oder ID is Generated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Booking_Confirmation_page_and_Check_Weather_the_Oder_ID_is_Generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the Adactin Hotel Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_Adactin_Hotel_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02_validation of AdactinHotel page with valid Credentials and get Booking 4 order ID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters the valid \"Venkadesan\" and \"6379796815\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_the_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Search Hotel options page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Search_Hotel_options_page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can be Select the \"Los Angeles\",\"Hotel Hervey\",\"Double\",\"3 - Three\",\"23/03/2022\",\"25/03/2022\",\"3 - Three\",\"1 - One\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_be_Select_the(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Click the search Hotel Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_can_Click_the_search_Hotel_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Select Hotel is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Select_Hotel_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can be select the Radio Butten and Continue Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_be_select_the_Radio_Butten_and_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Book Hotel page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Book_Hotel_page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Enter the \"Baskaran\",\"M\",\"Russia\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_Enter_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Enter the Valid \"2345678909876898\",\"Master Card\",\"November\",\"2022\",\"9876\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_Enter_the_Valid(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Can Click the Book Now Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Can_Click_the_Book_Now_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Booking Confirmation page and Check Weather the Oder ID is Generated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Booking_Confirmation_page_and_Check_Weather_the_Oder_ID_is_Generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the Adactin Hotel Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_Adactin_Hotel_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02_validation of AdactinHotel page with valid Credentials and get Booking 4 order ID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters the valid \"Venkadesan\" and \"6379796815\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_the_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Search Hotel options page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Search_Hotel_options_page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can be Select the \"Paris\",\"Hotel Cornice\",\"Deluxe\",\"4 - Four\",\"25/03/2022\",\"27/03/2022\",\"3 - Three\",\"3 - Three\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_be_Select_the(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Click the search Hotel Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_can_Click_the_search_Hotel_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Select Hotel is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Select_Hotel_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can be select the Radio Butten and Continue Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_be_select_the_Radio_Butten_and_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Book Hotel page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Book_Hotel_page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Enter the \"Barani\",\"A\",\"India\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_Enter_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Enter the Valid \"2345672229876898\",\"American Express\",\"December\",\"2022\",\"6789\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_Enter_the_Valid(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Can Click the Book Now Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Can_Click_the_Book_Now_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Booking Confirmation page and Check Weather the Oder ID is Generated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Booking_Confirmation_page_and_Check_Weather_the_Oder_ID_is_Generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the Adactin Hotel Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_Adactin_Hotel_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02_validation of AdactinHotel page with valid Credentials and get Booking 4 order ID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters the valid \"Venkadesan\" and \"6379796815\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_the_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Search Hotel options page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Search_Hotel_options_page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can be Select the \"Adelaide\",\"Hotel Creek\",\"Super Deluxe\",\"2 - Two\",\"26/03/2022\",\"29/03/2022\",\"2 - Two\",\"1 - One\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_be_Select_the(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Click the search Hotel Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_can_Click_the_search_Hotel_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Select Hotel is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Select_Hotel_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can be select the Radio Butten and Continue Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_be_select_the_Radio_Butten_and_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Book Hotel page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Book_Hotel_page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Enter the \"Arun\",\"V\",\"USA\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_Enter_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can Enter the Valid \"2345667859876898\",\"VISA\",\"October\",\"2022\",\"9087\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_can_Enter_the_Valid(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Can Click the Book Now Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Can_Click_the_Book_Now_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Booking Confirmation page and Check Weather the Oder ID is Generated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Booking_Confirmation_page_and_Check_Weather_the_Oder_ID_is_Generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});