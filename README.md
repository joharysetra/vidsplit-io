# vidsplit-io
**vidsplit-io** is a Node.js plugin offering seamless video manipulation, including splitting, URL-based downloading, and reassembling. With intuitive usage and powerful features, it simplifies video processing workflows. Simply integrate it into your projects for efficient video management.

## Installation

To install **vidsplit-io**, you can use npm:

```bash
npm install vidsplit-io
```


## Usage

You can utilize **vidsplit-io** in your Node.js projects as follows:

```javascript
import { splitVideo } from 'vidsplit-io';

// Split the video into segments of specified duration
await splitVideo({inputFile:'./video/8971086-240p.mp4',outputFolder:'./upload'},20);
```



