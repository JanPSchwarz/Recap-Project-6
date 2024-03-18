import Sight from "@/db/models/Sights";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === `GET`) {
    const sight = await Sight.findById(id);

    if (!sight) {
      return response.status(404).json({ status: "Not Found" });
    }
    return response.status(200).json(sight);
  }

  if (request.method === `PATCH`) {
    const updateSight = request.body;
    await Sight.findByIdAndUpdate(id, updateSight);

    response.status(200).json({ status: "Sight successfully updated" });
  }

  if (request.method === `DELETE`) {
    await Sight.findByIdAndDelete(id);

    response.status(200).json({ status: "Sight was deleted!" });
  }
}
