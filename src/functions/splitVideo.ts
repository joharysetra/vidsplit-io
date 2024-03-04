import { OptionPath } from '../types/path.type';
import { CutPartVideoOptions, VideoInfo } from '../types/video.type';
import { getVideoInfo } from './getVideoInfo';
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const cutPartVideo = async ({ filePath, startTime, duration, outputPath }: CutPartVideoOptions): Promise<string> => {
    return new Promise((resolve, reject) => {
        new ffmpeg(filePath)
            .setStartTime(startTime)
            .duration(duration)
            .output(outputPath)
            .on('end', () => {
                console.log(`Split ${outputPath} complete.`);
                resolve(outputPath);
            })
            .on('error', (error: any) => {
                reject(error);
            })
            .run();
    });
};

const splitVideo = async (OptionPath: OptionPath, shouldSizePartMb: number = 20, prefixeName: string = "video"): Promise<void> => {
    const videoInfo: VideoInfo = await getVideoInfo(OptionPath.inputFile);

    let startTime = 0;
    const shouldSizePartSeconde = (videoInfo.seconde * shouldSizePartMb) / videoInfo.size;
    const estimationNbrPartFloat = videoInfo.size / shouldSizePartMb;
    const estimationNbrPartInt = Math.floor(estimationNbrPartFloat);
    const restEstimationPart = estimationNbrPartFloat - estimationNbrPartInt;
    const restEstimationPartSeconde = (videoInfo.seconde * (restEstimationPart * shouldSizePartMb)) / videoInfo.size;
    const isEstimationNbrPartInt = Number.isInteger(estimationNbrPartFloat);
    const estimationNbrPartIterator = !isEstimationNbrPartInt ? estimationNbrPartInt : estimationNbrPartInt + 1;

    for (let index = 0; index < estimationNbrPartIterator; index++) {
        await cutPartVideo({
            filePath: OptionPath.inputFile,
            startTime,
            duration: shouldSizePartSeconde,
            outputPath: `${OptionPath.outputFolder}/${prefixeName}${index}.mp4`
        });

        if (!isEstimationNbrPartInt) {
            startTime += shouldSizePartSeconde;
        } else {
            if (index === estimationNbrPartIterator - 1) {
                startTime += restEstimationPartSeconde;
            } else {
                startTime += shouldSizePartSeconde;
            }
        }
    }
};

export { splitVideo };
