import { isBoolean, IsBoolean, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePlaylistDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(15, {
        message: 'Name is too long. Maximal length is $constraint1 characters'})
    readonly name: string;
    
    @IsBoolean()
    readonly isPublic: boolean = false;
}