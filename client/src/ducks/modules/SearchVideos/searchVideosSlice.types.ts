import { Status } from "ducks/types";

export interface SearchVideosStateI {
  videos: any[];
  isLoading: boolean;
  status: Status;
}