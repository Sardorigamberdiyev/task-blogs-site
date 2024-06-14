import { IsOptional, IsString } from 'class-validator';
import { PaginationDTO } from '../../common/dtos/pagination.dto';

export class GetUsersQueryDTO extends PaginationDTO {
	@IsString()
	@IsOptional()
	search?: string;
}
