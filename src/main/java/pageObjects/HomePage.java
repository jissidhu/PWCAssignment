package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HomePage {

	public WebDriver driver;

	By nxtBtn = By.xpath("//*[@class='flex-next']");
	By prevBtn = By.xpath("//*[@class='flex-prev']");
	By carouselCard = By.xpath(
			"//*[@class='flex flex-active-slide']/*[contains(@class,'card')]//*[@class='attachment-article-small size-article-small wp-post-image']");

	public HomePage(WebDriver driver) {

		this.driver = driver;

	}

	public WebElement getNextBtn() {
		return driver.findElement(nxtBtn);
	}

	public WebElement getPrevBtn() {
		return driver.findElement(prevBtn);
	}

	public int getcarouselCardsSize() {
		return driver.findElements(carouselCard).size();
	}

}
