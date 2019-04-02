import { GaapPage } from './app.po';

describe('gaap App', function() {
  let page: GaapPage;

  beforeEach(() => {
    page = new GaapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
