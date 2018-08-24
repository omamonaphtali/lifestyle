import { KidsModule } from './kids.module';

describe('KidsModule', () => {
  let kidsModule: KidsModule;

  beforeEach(() => {
    kidsModule = new KidsModule();
  });

  it('should create an instance', () => {
    expect(kidsModule).toBeTruthy();
  });
});
