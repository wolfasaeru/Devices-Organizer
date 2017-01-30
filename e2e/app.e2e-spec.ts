import { AngularCliBasePage } from './app.po';

describe('angular-cli-base App', function() {
  let page: AngularCliBasePage;

  beforeEach(() => {
    page = new AngularCliBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
