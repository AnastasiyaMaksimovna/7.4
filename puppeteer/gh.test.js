let page;


describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });
  
  afterEach(() => {
    page.close();
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 60000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 50000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 60000);
});

describe("Github 3 new tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.blog/");
  });
  
  afterEach(() => {
    page.close();
  });


  test("Welckome to blog", async () => {
    const title = await page.title();
    expect(title).toContain(
      "The GitHub Blog - Updates, ideas, and inspiration from GitHub to help developers build and design software."
    );
  });
  
  test("Look at the button", async () => {
    const battonSelector = ".btn-mktg";
    await page.waitForSelector(battonSelector, {
      visible: true,
    });
    const actual = await page.$eval(battonSelector, link => link.textContent);
    expect(actual).toContain("Enterprise trial")
  });

  test("Click on the link", async () => {
    const battonSelector = await page.$(".btn-mktg");
    await battonSelector.click();
    const actual = await page.$eval('.btn-mktg', link => link.textContent);
    expect(actual).toContain("Enterprise trial")
    
  }, 60000);
});
