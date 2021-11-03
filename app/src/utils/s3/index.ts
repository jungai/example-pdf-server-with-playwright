import { S3Client, GetObjectCommand, GetObjectCommandInput } from '@aws-sdk/client-s3';
import { getAwsAccessKeyId, getAwsSecretAccessKey } from '../get_env';

export const s3Client: S3Client = new S3Client({
    region: 'ap-southeast-1',
    credentials: {
        accessKeyId: getAwsAccessKeyId(),
        secretAccessKey: getAwsSecretAccessKey(),
    },
});

export function getObjectInS3(input: GetObjectCommandInput): GetObjectCommand {
    return new GetObjectCommand({
        ...input,
    });
}
