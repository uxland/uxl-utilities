import toDictionaryBy from "./to-dictionary-by";

export interface Entity {
    id: string;
}

export const toDictionary: <T extends Entity = any>(items: T[]) => {[id: string]: T} = toDictionaryBy('id');
