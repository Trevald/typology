import { TypologyPage } from './app.po';

describe('typology App', function() {
  let page: TypologyPage;

  beforeEach(() => {
    page = new TypologyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
