import { S3Client, GetObjectCommand, GetObjectCommandOutput } from '@aws-sdk/client-s3';
import { getAwsAccessKeyId, getAwsSecretAccessKey, getBucketName } from '../get_env';

export const s3Client: S3Client = new S3Client({
    region: 'ap-southeast-1',
    credentials: {
        accessKeyId: getAwsAccessKeyId(),
        secretAccessKey: getAwsSecretAccessKey(),
    },
});

export async function getObjectInS3(key: string): Promise<GetObjectCommandOutput> {
    const data = await s3Client.send(
        new GetObjectCommand({
            Key: key,
            Bucket: getBucketName(),
            ResponseContentType: 'application/html',
        }),
    );

    return data;
}
