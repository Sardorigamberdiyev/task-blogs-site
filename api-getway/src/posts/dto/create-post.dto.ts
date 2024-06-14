import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePostDTO {
	@IsString()
	@MaxLength(32)
	@MinLength(3)
	title!: string;

	@IsString()
	@IsNotEmpty()
	description!: string;

	@IsString()
	@IsNotEmpty()
	imageUrl!: string;
}
