import { IsNumberString } from 'class-validator';

export class PaginationDTO {
	@IsNumberString()
	page!: string;

	@IsNumberString()
	limit!: string;
}
