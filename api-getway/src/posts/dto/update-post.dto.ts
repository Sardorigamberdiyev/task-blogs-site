import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdatePostDTO {
	@IsString()
	@IsOptional()
	@MinLength(3)
	title?: string;

	@IsString()
	@IsOptional()
	@MinLength(1)
	description?: string;

	@IsString()
	@IsOptional()
	@MinLength(1)
	imageUrl!: string;
}
