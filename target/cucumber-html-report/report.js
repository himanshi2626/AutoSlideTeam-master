$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/1Google_Plus_paid_user.feature");
formatter.feature({
  "line": 2,
  "name": "Already user subcribe the application with google plus id.",
  "description": "",
  "id": "already-user-subcribe-the-application-with-google-plus-id.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@google_plus_user_paid"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Already subscribe the product with google plus id.",
  "description": "",
  "id": "already-user-subcribe-the-application-with-google-plus-id.;already-subscribe-the-product-with-google-plus-id.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open home page of the application.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select style as complete ppt.",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Select any project slider.",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on downloadbtn test5 link.",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on googlePlus link.",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter user google email addess.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "go to password page.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter user google pass.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on next CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The Page is redirect to download presenetion link.",
  "keyword": "Then "
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.navigates_to_website_url()"
});
formatter.result({
  "duration": 13018645900,
  "status": "passed"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.click_most_download()"
});
formatter.result({
  "duration": 7756878600,
  "status": "passed"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.select_product()"
});
formatter.result({
  "duration": 20054910200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".product-info\u003eh2\u003ea[title\u003d\u0027Project Scoping Powerpoint Presentation Slides\u0027]\"}\n  (Session info: chrome\u003d72.0.3626.121)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027EC2AMAZ-Q0OH3N2\u0027, ip: \u0027172.31.37.184\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63068}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 72.0.3626.121, webStorageEnabled: true}\nSession ID: b831743e52a86c0d873bacc92621db4b\n*** Element info: {Using\u003dcss selector, value\u003d.product-info\u003eh2\u003ea[title\u003d\u0027Project Scoping Powerpoint Presentation Slides\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat TestRunner.loginSteps.GooglePlus_signin_paid_user_stepDefinitio.select_product(GooglePlus_signin_paid_user_stepDefinitio.java:94)\r\n\tat ✽.And Select any project slider.(src/test/resources/1Google_Plus_paid_user.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.click_on_Download_this_presentation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.fb_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.enter_user_mail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.enter_user_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.google_pass()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GooglePlus_signin_paid_user_stepDefinitio.verify_uesr_validation_message_for_Email_Address()"
});
formatter.result({
  "status": "skipped"
});
