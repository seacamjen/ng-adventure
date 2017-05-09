import { NgAdventurePage } from './app.po';

describe('ng-adventure App', () => {
  let page: NgAdventurePage;

  beforeEach(() => {
    page = new NgAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
