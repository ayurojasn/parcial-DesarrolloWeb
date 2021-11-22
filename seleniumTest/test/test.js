const {Builder, By} = require ("selenium-webdriver");

async function example(){
   
    //launch the browser 
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to our application
    await driver.get("http://127.0.0.1:5500/Javascript/index.html")

    //add a todo
    await driver.findElement(By.id("Pollo")).click();
  
    await driver.findElement(By.id("agregar")).click();

    await driver.findElement(By.id("Carne")).click();
    
    await driver.findElement(By.id("agregar")).click();
    
    await driver.findElement(By.id("Pollo")).click();
      
    await driver.findElement(By.id("remover")).click();

    //close the browser
    // await driver.quit();
}
example()