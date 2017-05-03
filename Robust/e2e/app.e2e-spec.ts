import { RobustPage } from './app.po';

describe('robust App', () => {
  let page: RobustPage;

  beforeEach(() => {
    page = new RobustPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
