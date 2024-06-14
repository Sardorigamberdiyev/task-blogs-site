import { IsOptional, IsString } from 'class-validator';
import { PaginationDTO } from '../../common/dtos/pagination.dto';

export class GetPostListQueryDTO extends PaginationDTO {
	@IsString()
	@IsOptional()
	search?: string;
}
