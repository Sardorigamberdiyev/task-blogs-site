export interface IGrpc {
	start(): Promise<{ port: number; hostname: string }>;
}
