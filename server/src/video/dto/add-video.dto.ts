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

    publishTime: Date;

    @IsNotEmpty()
    thumbnail: string;
}