import { WomenModule } from './women.module';

describe('WomenModule', () => {
  let womenModule: WomenModule;

  beforeEach(() => {
    womenModule = new WomenModule();
  });

  it('should create an instance', () => {
    expect(womenModule).toBeTruthy();
  });
});
