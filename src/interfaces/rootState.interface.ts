import { User } from './user.interface';
import { IAsset } from './asset.interface';
import { ISocialPost } from './socialPost.interface';

type RootState = {
    auth: {
      token: string | null;
      isAuthenticated: boolean;
    };
    user: User | null;
    assets: IAsset[] | null;
  }
