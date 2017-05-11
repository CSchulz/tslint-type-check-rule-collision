import { TslintTestPage } from './app.po';

describe('tslint-test App', () => {
  let page: TslintTestPage;

  beforeEach(() => {
    page = new TslintTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
