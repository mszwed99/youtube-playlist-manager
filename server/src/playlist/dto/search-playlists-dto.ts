import { Type } from "class-transformer";
import { IsOptional } from "class-validator";

export class SearchPlaylistsDto {
    
    @IsOptional()
    _public: boolean;

    @IsOptional()
    favourite: boolean


}
