import { AssetmgmtPage } from './app.po';

describe('assetmgmt App', function() {
  let page: AssetmgmtPage;

  beforeEach(() => {
    page = new AssetmgmtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
