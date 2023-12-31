import { Amplify, Auth } from 'aws-amplify';
import { amplifyConfig } from 'config/cognito';
import { NextApiResponse } from 'next';
import { BaseResponse } from 'services/httpClient/types';
import { SignInApiRequest } from 'shared/types/api/signIn';

Amplify.configure(amplifyConfig);

export default async function handler(
  req: SignInApiRequest,
  res: NextApiResponse<BaseResponse<void>>
) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    try {
      const response = await Auth.signIn({ username, password });

      return res.status(200).json({ data: response, ok: true, status: 200 });
    } catch {
      return res.status(400).json({ message: 'Erro ao realizar login', ok: false, status: 400 });
    }
  }
}
