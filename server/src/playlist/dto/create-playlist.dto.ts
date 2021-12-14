import { IsBoolean, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePlaylistDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(15, {
        message: 'Name is too long. Maximal length is $constraint1 characters'})
    readonly name: string;
    
    @IsBoolean()
    readonly public: boolean = false;
    
    
    // readonly added_by: number

    // @IsBoolean()
    // readonly favourite: boolean = false;
}