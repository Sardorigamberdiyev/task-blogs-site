import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateCommentDTO {
	@IsString()
	@MaxLength(128)
	@IsOptional()
	comment?: string;
}
