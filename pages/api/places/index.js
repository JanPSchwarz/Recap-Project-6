import dbConnect from "@/db/connect";
import Sight from "@/db/models/Sights";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === `GET`) {
    const sights = await Sight.find();
    return response.status(200).json(sights);
  }
}
