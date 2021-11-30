export interface SearchVideosStateI {
  videos: any[];
  isLoading: boolean;
  status: Status;
}

type Status = 'NOT_SET' | 'ERROR' | 'SUCCESS';