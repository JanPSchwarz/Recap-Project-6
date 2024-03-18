import { places } from "../../../../lib/db.js";
import Sight from "@/db/models/Sights";
import dbConnect from "@/db/connect.js";

export default async function handler(request, response) {
  const { id } = request.query;

  if (request.method === `GET`) {
    const sights = await Sight.findById(id);
    return response.status(200).json(sights);
  }

  // if (!id) {
  //   return;
  // }

  // const place = places.find((place) => place.id === id);

  // if (!place) {
  //   return response.status(404).json({ status: "Not found" });
  // }

  // response.status(200).json(place);
}
