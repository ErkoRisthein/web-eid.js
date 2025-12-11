import ErrorCode from "./ErrorCode";
export interface SerializedError {
    code: ErrorCode;
    message: string;
    name?: string;
    stack?: string;
    [key: string]: unknown;
}
//# sourceMappingURL=SerializedError.d.ts.map