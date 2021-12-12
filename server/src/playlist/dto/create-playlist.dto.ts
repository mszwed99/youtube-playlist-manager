import { IsNotEmpty, IsString } from "class-validator";

export class CreatePlaylistDto {

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    readonly isPublic: boolean;
}