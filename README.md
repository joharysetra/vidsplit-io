# vidsplit-io
**vidsplit-io** is a Node.js plugin offering seamless video manipulation, including splitting, URL-based downloading, and reassembling. With intuitive usage and powerful features, it simplifies video processing workflows. Simply integrate it into your projects for efficient video management.

## Installation

To install **vidsplit-io**, you can use npm:

```bash
npm install vidsplit-io
```


## Usage

The first function **splitVideo**:

```javascript
/**
 * Splits a video into segments of specified duration.
 * 
 * @param {OptionPath} options - Options for video splitting.
 * @param {number} shouldSizePartMb - Size (in MB) of each split segment.
 * @param {string} prefixName - Prefix name for split segments.
 * @returns {Promise<void>}
 */
const splitVideo = async (options: OptionPath, shouldSizePartMb: number = 20, prefixName: string = "video"): Promise<void> => {

};
```
## Example

You can utilize **vidsplit-io** in your Node.js projects as follows:

```javascript
// the usage example
import { splitVideo } from 'vidsplit-io';

// Split the video into segments of specified duration
await splitVideo({inputFile:'./video/8971086-240p.mp4',outputFolder:'./upload'},20);
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contribution

Contributions are welcome! Please feel free to submit issues, create pull requests, or suggest improvements.

## Support

For any questions or issues, please open an issue on GitHub.

## Authors

Setra Johariniaina RAHERISON

## Changelog

See CHANGELOG.md for details on changes and releases.
