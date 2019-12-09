package resources;


import java.io.FileInputStream;

import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import pageObjects.HomePage;

public class Base {

	public static WebDriver driver;
	public static HomePage hp;
	public Properties prop;

	public WebDriver initializeDriver() throws IOException {

		prop = new Properties();
		FileInputStream fis = new FileInputStream(
				"C:\\PwC-CucumberTestNG\\PwC-CucumberTestNG\\src\\main\\java\\resources\\data.properties");

		prop.load(fis);
		String browserName = prop.getProperty("browser");
		System.out.println(browserName);
		String chrome_driver_path = prop.getProperty("chromedriverpath");
		String ff_driver_path = prop.getProperty("firefoxdriverpath");
		String ie_driver_path = prop.getProperty("IEdriverpath");

		if (browserName.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", chrome_driver_path);
			driver = new ChromeDriver();

		} else if (browserName.equals("firefox")) {
			System.setProperty("webdriver.gecko.driver", ff_driver_path);
			driver = new FirefoxDriver();

		} else {
			System.setProperty("webdriver.ie.driver", ie_driver_path);
			driver = new InternetExplorerDriver();

		}

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		
		
		return driver;

	}
	
	public HomePage initializeHomePage() {
		hp = new HomePage(driver);
		return hp;
	}
	

}
