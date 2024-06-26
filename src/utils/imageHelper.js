const CLOUD_FRONT_URL = 'https://d1zhpjhb2clocd.cloudfront.net';

export const getCloudFrontUrl = (imagePath) => {
    return `${CLOUD_FRONT_URL}/${imagePath}`;
};