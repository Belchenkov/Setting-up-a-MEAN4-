import { MeanGaryPage } from './app.po';

describe('mean-gary App', () => {
  let page: MeanGaryPage;

  beforeEach(() => {
    page = new MeanGaryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
