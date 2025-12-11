import { ExtensionResponse } from "../models/message/ExtensionResponse";
import { InitialAction } from "../models/Action";
import { ExtensionRequest } from "../models/message/ExtensionRequest";
import PendingMessage from "../models/PendingMessage";
export default class WebExtensionService {
    private loggedWarnings;
    private queue;
    constructor();
    private receive;
    send<T extends ExtensionResponse>(message: ExtensionRequest, timeout: number): Promise<T>;
    onReplyTimeout(pending: PendingMessage): void;
    onAckTimeout(pending: PendingMessage): void;
    getPendingMessage(action: InitialAction): PendingMessage | undefined;
    getInitialAction(action: string): InitialAction;
    removeFromQueue(action: InitialAction): void;
}
//# sourceMappingURL=WebExtensionService.d.ts.map