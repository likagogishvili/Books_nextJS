//api//new-book
import { MongoClient } from "mongodb";
async function handler(req: Request, res: Response) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://likagogishvili2:lika2001@books.u2r6dxc.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const booksCollection = db.collection("books");
    let result;
    if (data) {
      result = await booksCollection.insertOne(data);
    }
    console.log(result);

    client.close();
    // @ts-ignore
    res.status(201).json({ message: "meetup inseted" });
  }
}
export default handler;
