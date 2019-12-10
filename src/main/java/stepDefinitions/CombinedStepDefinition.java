package stepDefinitions;

import java.util.List;

import org.openqa.selenium.By;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.HomePage;
import resources.Base;

public class CombinedStepDefinition extends Base {

	public static WebDriver driver;
	public static HomePage hp;

	@Given("^I navigate to the PwC Digital Pulse website$")
	public void initilize_the_driver_with_chrome() throws Throwable {
		driver = initializeDriver();
		hp = initializeHomePage();
		driver.get(prop.getProperty("url"));
		driver.manage().window().maximize();
	}

	/* Scenario: Validate Home Page using POM */

	@When("^I am viewing the ‘Home’ page$")
	public void i_am_viewing_the_home_page() {
		// driver.get(prop.getProperty("url"));
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Digital Pulse - Disruption, Innovation and Industry Change", title);
	}

	@Then("^I am presented with a carousel displaying \"(.*)\" featured articles$")
	public void i_am_presented_with_a_carousel_displaying_3_featured_articles(int cardCount) {

		Assert.assertEquals(hp.getcarouselCardsSize(), cardCount);

	}

	@And("^Clicking the ‘Next’ button on the carousel will load the next \"(.*)\" featured articles$")
	public void clicking_the_next_button_on_the_carousel_will_load_the_next_3_featured_articles(int cardCount) {

		hp.getNextBtn().click();
		Assert.assertEquals(hp.getcarouselCardsSize(), cardCount);
	}

	@And("^Clicking the ‘Previous’ button on the carousel will load the previous \"(.*)\" featured articles$")
	public void clicking_the_previous_button_on_the_carousel_will_load_the_previous_3_featured_articles(int cardCount) {

		hp.getPrevBtn().click();
		Assert.assertEquals(hp.getcarouselCardsSize(), cardCount);

	}
	/* Scenario: Validate Contact us Page */

	@When("^I select ‘Contact us’ from the hamburger menu$")
	public void i_select_contact_us_from_the_hamburger_menu() throws InterruptedException {

		WebDriverWait d = new WebDriverWait(driver, 10);
		d.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@class='btr bt-bars trigger']")));
		driver.findElement(By.xpath("//*[@class='btr bt-bars trigger']")).click();

		d.until(ExpectedConditions
				.visibilityOfElementLocated(By.xpath("//*[@id='menu-item-65']/a[text()='Contact us']")));
		driver.findElement(By.linkText("Contact us")).click();
	}

	@Then("^I am taken to the ‘Contact us’ page$")
	public void i_am_taken_to_the_contact_us_page() {
		String title = driver.getTitle();
		Assert.assertEquals("Contact us - Digital Pulse", title);
	}

	@And("^I am presented with the below options for contacts \"(.*)\" \"(.*)\"$")
	public void i_am_presented_with_the_below_options_for_contacts(String heading, String contactLink) {
		System.out.println(heading);
		System.out.println(contactLink);
		WebDriverWait d = new WebDriverWait(driver, 10);
		d.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='span_3']")));
		int headingCount = driver.findElements(By.xpath("//div[@class='span_3']")).size();
		Assert.assertEquals(headingCount, 4);

		List<WebElement> headingText = driver.findElements(By.xpath("//div[@class='span_3']/h2"));
		for (WebElement wlist : headingText) {
			String[] parts = wlist.getText().split("\n");
			String part1 = parts[0]; // e.g. PwC
			String part2 = parts[1]; // e.g. Digital Services
			String combinedText = part1 + " " + part2;
			System.out.println(combinedText);
			if (combinedText.equals(heading)) {
				Assert.assertTrue(true);
				break;
			}

		}

	
		List<WebElement> elementList = driver.findElements(By.xpath("//div[@class='span_3']/p/a"));
		int listSize = elementList.size();
		System.out.println(listSize);
		for (int i = 0; i < listSize; i++) {

			if ((elementList.get(i).getAttribute("href").equals(contactLink))) {
				Assert.assertTrue(true);
				break;
			}

		}

	}

	/* Scenario: Validate Search Page */

	@When("^I click on the ‘Magnifying glass’ icon to perform a search$")
	public void i_click_on_the_magnifying_glass_icon_to_perform_a_search() {

		WebElement searchLink = driver.findElement(By.xpath("//*[@class='btr bt-search']"));
		searchLink.click();

	}

	@And("^I enter the text ‘Single page applications’$")
	public void i_enter_the_text_single_page_applications() {
		WebElement submitBtn = driver.findElement(By.xpath("//*[@id='search-input']"));
		submitBtn.sendKeys("Single page applications");
	}

	@Then("^I submit the search$")
	public void i_submit_the_search() {
		WebElement submitBtn = driver.findElement(By.xpath("//*[@id='search-input']"));
		submitBtn.sendKeys(Keys.ENTER);

	}

	@And("^I am taken to the search results page$")
	public void i_am_taken_to_the_search_results_page() throws InterruptedException {

		String title = driver.getTitle();
		Assert.assertEquals("You searched for Single page applications - Digital Pulse", title);

	}

	@And("^I am presented with at least 1 search result$")
	public void i_am_presented_with_at_least_1_search_result() {
		int searchListSize = driver
				.findElements(By.xpath("//*[contains(@class,'type-post status-publish')]/p/a[(text()='Read more')]"))
				.size();
		if (searchListSize >= 1) {
			Assert.assertTrue(true);
			System.out.println("Atleast 1 Search result found for Single page applications");
		} else {
			Assert.assertTrue(false);
			System.out.println("No Search results found for Single page applications");
		}

	}

	@And("^Quit the browser$")
	public void quit_the_browser() {
		driver.quit();
	}

}
