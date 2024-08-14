export interface Character {
  id: string;
  userId: string;
  persistentKey: string;
  lodestoneId: string;
  name: string;
  world: string;
  datacenter: string;
  region: string;
  avatarUrl: string;
  portraitUrl: string;
  createdAt: Date;
  verifiedAt: Date;
  updatedAt: Date;
}
