import { IsNotEmpty } from "class-validator";


export class AddVideoDto {
    @IsNotEmpty()
    title: string;
 
    @IsNotEmpty()
    duration: string;

    @IsNotEmpty()
    url: string;

    @IsNotEmpty()
    thumbnail: string;
}