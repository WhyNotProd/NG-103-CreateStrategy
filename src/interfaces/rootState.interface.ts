import { User } from './user.interface';
import { IAsset } from './asset.interface';

type RootState = {
    auth: {
      token: string | null;
      isAuthenticated: boolean;
    };
    user: User | null;
    assets: IAsset[] | null;
  }
  