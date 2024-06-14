import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class AddCommentDTO {
	@IsString()
	@MaxLength(128)
	@IsNotEmpty()
	comment!: string;
}
