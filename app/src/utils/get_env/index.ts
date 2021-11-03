export function getEnv(key: string): string {
    const value = process.env[key];

    if (!value) {
        throw new Error(`${key} is not in env`);
    }

    return value;
}

export function getAwsAccessKeyId() {
    return getEnv('ACCESS_KEY_ID');
}

export function getAwsSecretAccessKey() {
    return getEnv('SECRET_ACCESS_KEY');
}

export function getBucketName() {
    return getEnv('BUCKET_NAME');
}
