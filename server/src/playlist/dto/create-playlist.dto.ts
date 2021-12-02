import { IsNotEmpty } from "class-validator";

export class CreatePlaylistDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    isPublic: boolean;
}