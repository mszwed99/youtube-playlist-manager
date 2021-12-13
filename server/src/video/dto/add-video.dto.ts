import { IsNotEmpty, IsString } from "class-validator";


export class AddVideoDto {
    @IsNotEmpty()
    videoId: string;
    
    @IsString()
    @IsNotEmpty()
    title: string;
    
    @IsString()
    @IsNotEmpty()
    channelTitle: string;

    @IsString()
    @IsNotEmpty()
    description: string;
    

    publishTime: Date;

    @IsString()
    @IsNotEmpty()
    thumbnail: string;
}