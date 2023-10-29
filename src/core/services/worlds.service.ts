import { Seed } from "../adapter/seed.adapter";
import { WorldLegacy } from "../interfaces/world-legacy.interface";

export class WorldsService {
  seed = new Seed<WorldLegacy>("worlds-legacy.seed.json");

  get = () => this.seed.get();
}
