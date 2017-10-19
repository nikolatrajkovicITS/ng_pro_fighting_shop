import { ProFightShopPage } from './app.po';

describe('pro-fight-shop App', () => {
  let page: ProFightShopPage;

  beforeEach(() => {
    page = new ProFightShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
