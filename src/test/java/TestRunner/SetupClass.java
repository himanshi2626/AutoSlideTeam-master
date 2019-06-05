package TestRunner;

import java.io.FileReader;
import java.util.Properties;
import java.util.logging.Logger;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.interactions.Actions;
import webApp.CommonData;

public class SetupClass {
	public static WebDriver driver;
	public static String AppURL;
	public static Properties property = new Properties(System.getProperties());
	public static Logger log;
	public static WebElement webelement;
	public static String localtestFF;
	public static String localFF;
	public static String local_chromebrowser;
	public static String local_chrome;
	public Actions ac=new Actions(driver);
	@BeforeClass
	public static void before_Class() throws Exception {

		log = Logger.getLogger(BeforeClass.class.getName());
		//auto trigger when push code 12456
		property.load(new FileReader("configs\\configure.properties"));
		AppURL = property.getProperty("App_url");

		local_chromebrowser = property.getProperty("local_chrome_browser");
		local_chrome = property.getProperty("local_chrome");
		localtestFF = property.getProperty("localtestFF");
		localFF = property.getProperty("local_Fifefox_browser");
		

		// on source lab setup
		AppURL = property.getProperty("App_url");
		System.out.println("Bname=====" + AppURL);



		if ((local_chrome.equals("yes"))) {
			local_chromebrowser = System.setProperty(CommonData.Chrome_Name, CommonData.Chrome_Path);
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--disable-notifications");
			driver = new ChromeDriver(options);
			driver.manage().window().maximize();
	
		} else if ((localtestFF.equals("yes"))) {

			localFF = System.setProperty(CommonData.Firefox_Name, CommonData.Firefox_Path);
			FirefoxProfile profile = new FirefoxProfile();
			profile.setPreference("dom.webnotifications.enabled", false);
		   driver = new FirefoxDriver();
		   Thread.sleep(1000);

		}
	

		

		else {
			System.out.println("test platform is not configure correctly");
			

		}

	}
	

	@AfterClass

	public static void after_Class() {
try {
		driver.quit();
		Thread.sleep(2000);
}catch (Exception closeBrowser) {
	
}
	}
}
