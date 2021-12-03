import { EntityRepository, Repository } from "typeorm";
import { AddVideoDto } from "./dto/add-video.dto";
import { Video } from "./video.entity";

@EntityRepository(Video)
export class VideoRepository extends Repository<Video> {

   
   
}