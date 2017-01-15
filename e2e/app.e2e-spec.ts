import { ProtocolClientAngular2Page } from './app.po';

describe('protocol-client-angular2 App', function() {
  let page: ProtocolClientAngular2Page;

  beforeEach(() => {
    page = new ProtocolClientAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
