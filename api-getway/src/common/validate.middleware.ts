import { Request, Response, NextFunction } from 'express';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { IMiddleware } from './middleware.interface';
import { HTTPError } from '../errors/http-error';

export class ValidateMiddleware implements IMiddleware {
	constructor(
		private classToValidate: ClassConstructor<object>,
		private plainType: keyof Pick<Request, 'body' | 'params' | 'query'> = 'body'
	) {}

	handler({ body, query, params }: Request, res: Response, next: NextFunction): void {
		let plain = body;

		if (this.plainType === 'query') plain = query;
		if (this.plainType === 'params') plain = params;

		const instance = plainToClass(this.classToValidate, plain);

		validate(instance).then((errors) => {
			if (errors.length > 0) {
				const errorsData = errors.reduce(
					(prev, curr) => ({
						...prev,
						[curr.property]: curr.constraints,
					}),
					{}
				);

				next(new HTTPError('Unprocessable entity', 422, errorsData));
			} else {
				next();
			}
		});
	}
}
