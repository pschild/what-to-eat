import { WhatToEatPage } from './app.po';

describe('what-to-eat App', () => {
  let page: WhatToEatPage;

  beforeEach(() => {
    page = new WhatToEatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
