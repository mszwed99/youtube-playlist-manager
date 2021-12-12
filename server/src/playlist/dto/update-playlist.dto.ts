import { PartialType } from "@nestjs/mapped-types";
import { plainToClass } from "class-transformer";
import { CreatePlaylistDto } from "src/playlist/dto/create-playlist.dto";

export class UpdatePlaylistDto extends PartialType(CreatePlaylistDto) {

}