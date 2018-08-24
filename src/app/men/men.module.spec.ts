import { MenModule } from './men.module';

describe('MenModule', () => {
  let menModule: MenModule;

  beforeEach(() => {
    menModule = new MenModule();
  });

  it('should create an instance', () => {
    expect(menModule).toBeTruthy();
  });
});
