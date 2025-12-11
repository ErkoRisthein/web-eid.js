import { ExtensionAuthenticateResponse, ExtensionGetSigningCertificateResponse, ExtensionSignResponse, ExtensionStatusResponse } from "./ExtensionResponse";
export type LibraryStatusResponse = Omit<ExtensionStatusResponse, "action">;
export type LibraryAuthenticateResponse = Omit<ExtensionAuthenticateResponse, "action">;
export type LibraryGetSigningCertificateResponse = Omit<ExtensionGetSigningCertificateResponse, "action">;
export type LibrarySignResponse = Omit<ExtensionSignResponse, "action">;
export type LibraryResponse = LibraryStatusResponse | LibraryAuthenticateResponse | LibraryGetSigningCertificateResponse | LibrarySignResponse;
//# sourceMappingURL=LibraryResponse.d.ts.map