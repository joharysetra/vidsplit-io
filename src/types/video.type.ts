export interface VideoInfo {
    size: number;
    seconde: number;
};

export interface CutPartVideoOptions {
    filePath: string;
    startTime: number;
    duration: number;
    outputPath: string;
};
