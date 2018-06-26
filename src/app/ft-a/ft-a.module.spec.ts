import { FtAModule } from './ft-a.module';

describe('FtAModule', () => {
  let ftAModule: FtAModule;

  beforeEach(() => {
    ftAModule = new FtAModule();
  });

  it('should create an instance', () => {
    expect(ftAModule).toBeTruthy();
  });
});
