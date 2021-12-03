import { IsNotEmpty } from "class-validator";


export class AddVideoDto {
    @IsNotEmpty()
    videoId: string;
 
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    channelTitle: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    publishTime: string;

    @IsNotEmpty()
    thumbnail: string;
}