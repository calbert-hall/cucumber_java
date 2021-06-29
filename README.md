# Example Solution: Using Applitools with Cucumber


## License

This project is licensed under the MIT License - see [here](https://mit-license.org/) for details

## Author
Casey Albert-Hall

Build upon "Cucumber with Java" course from Test Automation University By Giridhar Rajkumar

## Prerequisites

1. Set `APPLITOOLS_API_KEY` as a system environment variable. Otherwise you'll need to include it in the eyesSetup function.
   If you don't have an Applitools account, you can create one for free [here](https://auth.applitools.com/users/register). i
   Note that this test uses the Applitools UltraFast grid; without it you'll need to replace the "VisualGridRunner" with "ClassicRunner" in your setup.  
2. Java, Maven, and Cucumber will all need to be installed. This suite also utilizes JUnit 4. 
3. See the Applitools [Selenium Java Tutorial](https://applitools.com/tutorials/selenium-java.html#running-tests-with-applitools) for a more detailed installation process. 

## Running the Suite
- You can simply run the Login Feature file and observe the tests running. 
- You can add more Ultrafast Grid Configurations, some examples are commented out in the eyesSetup function. 

## Documentation
Documentation for Applitools Selenium Java can be found [here](https://applitools.com/docs/api/eyes-sdk/index-gen/classindex-selenium-java.html). 

##Troubleshooting
Reach out to Casey.Albert-Hall@Applitools.com, or your Applitools Customer Success Manager. 