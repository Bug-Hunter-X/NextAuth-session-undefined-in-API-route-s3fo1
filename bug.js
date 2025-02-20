```javascript
import {unstable_getServerSession} from "next-auth/next";

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).end();
    return;
  }
  //rest of the code
};

export default handler;
```