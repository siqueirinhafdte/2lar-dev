export const amplifyConfig = {
  aws_cognito_region: process.env.NEXT_PUBLIC_AWS_REGION,
  aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_POOL_ID,
  aws_user_pools_web_client_id: process.env.NEXT_PUBLIC_AWS_CLIENT_ID
};
