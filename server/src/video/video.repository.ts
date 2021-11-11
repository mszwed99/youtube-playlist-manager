import { EntityRepository, Repository } from "typeorm";
import { AddVideoDto } from "./dto/add-song.dto";
import { Video } from "./video.entity";

@EntityRepository(Video)
export class VideoRepository extends Repository<Object> {
    async addVideo(addVideoDto: AddVideoDto): Promise<Video> {
        const { title, duration, url, thumbnail} = addVideoDto;
        const video = new Video();
        video.title = title
        video.duration = duration
        video.url = url
        video.thumbnail = thumbnail
        /// ====> playlista
        await video.save();
        return video;
    }
}