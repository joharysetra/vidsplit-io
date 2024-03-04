import { VideoInfo } from "../types/video.type";

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
const ffprobePath = require('@ffprobe-installer/ffprobe').path;
// Set the path to the ffprobe binary
ffmpeg.setFfprobePath(ffprobePath);

export async function getVideoInfo(filePath: string): Promise<VideoInfo> {
    return new Promise((resolve, reject) => {
        ffmpeg.ffprobe(filePath, (err: any, metadata: { format: { size: any; duration: number; }; }) => {
            if (err) {
                reject(err);
                return;
            }
            const mo: number = 1048576;
            const videoSize = metadata.format.size / mo;
            const videoInfo: VideoInfo = {
                size: videoSize,
                seconde: metadata.format.duration ? Math.round(metadata.format.duration) : 0
            };
            
            resolve(videoInfo);
        });
    });
}