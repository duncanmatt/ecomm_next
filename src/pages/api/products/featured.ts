import client from '../../../../lib/db';
import {BatchGetItemCommand} from '@aws-sdk/client-dynamodb';
import {unmarshall} from '@aws-sdk/util-dynamodb'
import type { NextApiRequest, NextApiResponse } from 'next';



export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const params = {
      'RequestItems': {
      'ecomm': {
        'Keys': [
          {"pk": {"S":'PRODUCT#1'}, "sk": {"S":'PRODUCT#short-sleeve-black-red'}}, 
          {"pk": {"S":'PRODUCT#2'}, "sk": {"S":'PRODUCT#short-sleeve-black'}}, 
          {"pk": {"S":'PRODUCT#3'}, "sk": {"S":'PRODUCT#short-sleeve-brown-blue'}},
        ],
        'ProjectionExpression': 'pk, sk, imgUrl',
      }
    }
  };


  const output = await client.send(new BatchGetItemCommand(params));
 

  if (output.Responses) {
    const featured = output.Responses.ecomm.map((i) => unmarshall(i));
    return res.status(200).json(featured);
  }

  }
}

