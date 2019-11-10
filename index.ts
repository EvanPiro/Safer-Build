import makeApi from 'lambda-api'

const api = makeApi()

api.get('/', async (req, res) => {
  return { status: 'Welcome!' }
})

export const handler = async (event, context) => {
  return await api.run(event, context);
}
