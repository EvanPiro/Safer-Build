import { APIGatewayEvent, Context, APIGatewayProxyResult } from 'aws-lambda'
import makeApi, { Request, Response } from 'lambda-api'


// @Todo module should not be aware of its base path.
const api = makeApi()


api.get('/', async (req: Request, res: Response) => {
  return { status: 'rest routed' }
})

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  return await api.run(event, context);
}
