const {Builder,By,Key,until}=require('selenium-webdriver');


async function example(){
    let driver=await new Builder().forBrowser('chrome').build();
    await driver.get('https://ads.admixplay.com/login');
    
    let email = driver.findElement(By.id("email"));
	let password = driver.findElement(By.id("password"));
	let login=driver.findElement(By.xpath("//button[@type='submit']"));
	
	email.sendKeys("mohammed.murad@admixplay.com");
	password.sendKeys("Zoom+9321");
	await login.click();
	let title = await driver.wait(  until.elementLocated(By.xpath("//div[@id='Overview']/h1[@class='title']")),   20000).getText();
	
	console.log(title);

    //let title = await driver.wait(  until.elementLocated(By.id('Overview')),   20000).getText();
    
    
    
	//driver.quit();	
    

}

example();
