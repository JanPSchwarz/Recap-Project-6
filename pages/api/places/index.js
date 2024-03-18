import dbConnect from "@/db/connect";
import Sight from "@/db/models/Sights";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === `GET`) {
    const sights = await Sight.find();
    return response.status(200).json(sights);
  }

  if (request.method === `POST`) {
    try {
      const sightData = request.body;
      await Sight.create(sightData);

      response.status(201).json({ status: "Sight created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
