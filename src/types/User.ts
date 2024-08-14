import type { Character } from "./Character";

export interface User {
  id: string;
  email: string;
  characters: Character[];
}
