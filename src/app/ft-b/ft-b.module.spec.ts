import { FtBModule } from './ft-b.module';

describe('FtBModule', () => {
  let ftBModule: FtBModule;

  beforeEach(() => {
    ftBModule = new FtBModule();
  });

  it('should create an instance', () => {
    expect(ftBModule).toBeTruthy();
  });
});
