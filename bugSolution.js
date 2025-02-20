```javascript
import {unstable_getServerSession} from "next-auth/next";
import {authOptions} from './auth/[...nextauth]'; //Import authOptions

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  //Access session data
  const { user } = session;
  console.log(user);
  //rest of the code using session
};

export default handler;
```