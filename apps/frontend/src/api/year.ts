import { get } from "@blog/frontend/lib/fetch";

export interface Year {
  year: number;
  articleCount: number;
}

export const getArchive = () => get<Year[]>("/api/archive");
