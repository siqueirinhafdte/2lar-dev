import { Amplify, Auth } from 'aws-amplify';
import { amplifyConfig } from 'config/cognito';
import { NextApiRequest, NextApiResponse } from 'next';
import { Logger } from 'utils';

Amplify.configure(amplifyConfig);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      name,
      email,
      password,
      phone_number,
      fiscal_id,
      birthdate,
      country,
      postal_code,
      state,
      city,
      district,
      street,
      number
    } = req.body;
    try {
      const payload = {
        username: email,
        password,
        attributes: {
          email,
          name,
          phone_number,
          'custom:birthdate': birthdate,
          'custom:fiscalId': fiscal_id,
          'custom:country': country,
          'custom:postal_code': postal_code,
          'custom:state': state,
          'custom:city': city,
          'custom:district': district,
          'custom:street': street,
          'custom:number': number
        }
      };
      await Auth.signUp(payload);

      res.status(200).json({ ok: true, status: 200 });
    } catch (error) {
      Logger.error({ error });
      res.status(400).json({ message: 'Erro ao realizar cadastro', status: 400 });
    }
  }
}
