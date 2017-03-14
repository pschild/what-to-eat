export interface IPouchDBAllDocsResult {
    offset: number;
    total_rows: number;
    rows: IPouchDBRow[];
}

export interface IPouchDBPutResult {
    ok: boolean;
    id: string;
    rev: string;
}

export interface IPouchDBGetResult {
    _id: string;
    _rev: string;
}

export interface IPouchDBRow {
    id: string;
    key: string;
    value: { rev: string };

    doc?: any;
}

export interface IPouchDBRemoveResult {
    ok: boolean;
    id: string;
    rev: string;
}