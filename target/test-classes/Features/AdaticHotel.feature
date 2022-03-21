Feature: Validation of Adactin Hotel Web Application

  Background: 
    Given User launch the Adactin Hotel Web Application

  Scenario: TC_01_validation of AdactinHotel page with valid Credentials and to get Booking order ID
    When User enters the valid username and valid password
    And User click the login Button
    Then User Verify the Search Hotel options page is Displayed
    When User can be Select the Location,Hotel,Room Type,Number of Room,Checkin date,Checkout date,Adult per Room,Children per Room
    And User can Click the search Hotel Button
    Then User Verify the Select Hotel is Displayed
    When User can be select the Radio Butten and Continue Button
    Then User Verify the Book Hotel page is Displayed
    When User can Enter the FirstName,LastName,Billing Address
    When User can Enter the Valid Credit Card Number,Credit Card Type,Credit Card Expiry Date,Credit Card Expiry Year,Credit Card CVV number
    And User Can Click the Book Now Button
    Then User Verify the Booking Confirmation page and Check Weather the Oder ID is Generated

  Scenario Outline: TC_02_validation of AdactinHotel page with valid Credentials and get Booking 4 order ID
    When User enters the valid "<username>" and "<password>"
    And User click the login Button
    Then User Verify the Search Hotel options page is Displayed
    When User can be Select the "<Location>","<Hotel>","<Room Type>","<Number of Room>","<Checkin date>","<Checkout date>","<Adult per Room>","<Children per Room>"
    And User can Click the search Hotel Button
    Then User Verify the Select Hotel is Displayed
    When User can be select the Radio Butten and Continue Button
    Then User Verify the Book Hotel page is Displayed
    When User can Enter the "<FirstName>","<LastName>","<Billing Address>"
    When User can Enter the Valid "<Credit Card Number>","<Credit Card Type>","<Credit Card Expiry Date>","<Credit Card Expiry Year>","<Credit Card CVV number>"
    And User Can Click the Book Now Button
    Then User Verify the Booking Confirmation page and Check Weather the Oder ID is Generated

    Examples: 
      | username   | password   | Location    | Hotel          | Room Type    | Number of Room | Checkin date | Checkout date | Adult per Room | Children per Room | FirstName | LastName | Billing Address | Credit Card Number | Credit Card Type | Credit Card Expiry Date | Credit Card Expiry Year | Credit Card CVV number |
      | Venkadesan | 6379796815 | London      | Hotel Sunshine | Standard     | 2 - Two        | 23/03/2022   | 26/03/2022    | 2 - Two        | 2 - Two           | Venki     | S        | UK              |   2345678909876543 | VISA             | September               |                    2022 |                   8777 |
      | Venkadesan | 6379796815 | Los Angeles | Hotel Hervey   | Double       | 3 - Three      | 23/03/2022   | 25/03/2022    | 3 - Three      | 1 - One           | Baskaran  | M        | Russia          |   2345678909876898 | Master Card      | November                |                    2022 |                   9876 |
      | Venkadesan | 6379796815 | Paris       | Hotel Cornice  | Deluxe       | 4 - Four       | 25/03/2022   | 27/03/2022    | 3 - Three      | 3 - Three         | Barani    | A        | India           |   2345672229876898 | American Express | December                |                    2022 |                   6789 |
      | Venkadesan | 6379796815 | Adelaide    | Hotel Creek    | Super Deluxe | 2 - Two        | 26/03/2022   | 29/03/2022    | 2 - Two        | 1 - One           | Arun      | V        | USA             |   2345667859876898 | VISA             | October                 |                    2022 |                   9087 |
