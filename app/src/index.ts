import 'dotenv/config';
import { Readable } from 'stream';
import { generatePdf, getBucketName, getObjectInS3, s3Client } from './utils';
import { streamToString } from './utils';
import { from, mergeMap, tap } from 'rxjs';

(() => {
    const pdfBuffer = from(
        s3Client.send(
            getObjectInS3({
                Bucket: getBucketName(),
                Key: 'index.html', // test eiei
                ResponseContentType: 'application/html',
            }),
        ),
    ).pipe(
        tap((s3Output) => {
            if (!s3Output) {
                throw new Error('no s3 output!!');
            }
        }),
        mergeMap((s3FileOutput) => from(streamToString(s3FileOutput.Body as Readable))),
        mergeMap((html) => from(generatePdf(html))),
    );

    pdfBuffer.subscribe({
        next() {
            console.log('done');
        },
        error(error) {
            // TODO: handle this error
            console.log(error);
        },
    });
})();
