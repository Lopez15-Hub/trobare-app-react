import axios from "axios";
import fs from "fs";
export class Seed<Model = any> {
  constructor(private readonly seedFile: string) {}
  async get(): Promise<Model[]> {
    const response = await axios.get("http://localhost:3000/worlds");
    return response.data;
  }
}
