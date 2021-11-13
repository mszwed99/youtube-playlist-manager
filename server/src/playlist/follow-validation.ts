import { ConflictException, NotFoundException } from "@nestjs/common";
import { User } from "src/auth/user.entity";
import { Playlist } from "./playlist.entity";

export async function followValidation(playlist: Playlist, user: User): Promise<void> {

    if(!playlist){
        throw new NotFoundException('Resource not found');
    }
    if(playlist.owner.id === user.id) {
        throw new ConflictException(`You can't follow or unfollow your own playlist`);
    }
    if(!await playlist.checkIfPublic()){
        throw new NotFoundException('Playlist is private');
    }
}