import { Logger, ILogObj } from 'tslog';
import { ILog } from './log.interface';

export class Log implements ILog {
	private logger: Logger<ILogObj>;
	private static logger: Logger<ILogObj>;

	constructor() {
		this.logger = new Logger({
			hideLogPositionForProduction: true,
			prettyLogTemplate: '{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{mm}} {{logLevelName}} ',
			prettyLogTimeZone: 'local',
		});
	}

	warn(...msg: unknown[]): void {
		this.logger.warn(...msg);
	}

	error(...msg: unknown[]): void {
		this.logger.error(...msg);
	}

	info(...msg: unknown[]): void {
		this.logger.info(...msg);
	}

	fatal(...msg: unknown[]): void {
		this.logger.fatal(...msg);
	}

	debug(...arg: unknown[]): void {
		this.logger.debug(...arg);
	}

	static {
		this.logger = new Logger({
			hideLogPositionForProduction: true,
			prettyLogTemplate: '{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{mm}} {{logLevelName}} ',
			prettyLogTimeZone: 'local',
		});
	}

	static warn(...msg: unknown[]): void {
		this.logger.warn(...msg);
	}

	static error(...msg: unknown[]): void {
		this.logger.error(...msg);
	}

	static info(...msg: unknown[]): void {
		this.logger.info(...msg);
	}

	static fatal(...msg: unknown[]): void {
		this.logger.fatal(...msg);
	}

	static debug(...arg: unknown[]): void {
		this.logger.debug(...arg);
	}
}
