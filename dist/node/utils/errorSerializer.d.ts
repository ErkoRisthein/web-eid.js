import { SerializedError } from "../errors/SerializedError";
import KnownErrorConstructors from "../errors/KnownErrorConstructors";
export declare function serializeError(error: Error): SerializedError;
export declare function deserializeError(errorObject: SerializedError): InstanceType<KnownErrorConstructors>;
//# sourceMappingURL=errorSerializer.d.ts.map