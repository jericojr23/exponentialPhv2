//test-strapi.js
import { parseCookies } from 'nookies';
import datasource from '../../datalayer';

export default async function handler(req, res) {
  // Parse cookies
  const cookies = parseCookies({ req });

  // Retrieve the JWT cookie value
  const jwtCookie = cookies.data; // Replace 'jwt' with the actual name of your JWT cookie

  // Use jwtCookie as needed, for example, you can pass it to your data fetching function
  const data = await datasource.getTasks(jwtCookie);

  res.status(200).json({ data });
}
