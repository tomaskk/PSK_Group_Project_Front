import axios from "axios";
import { ServerHostName } from '../../../constants/serverUri.js';

export async function mergeTravels(toMergeId, mergeIntoId, callback) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "Authorization": authToken,
    },
  };

  const reqData = JSON.stringify({ id: toMergeId });

  const val = await axios.post(`https://${ServerHostName}/api/Travels/JoinTravels/${mergeIntoId}`, reqData, config);
  callback(val);
  return val;
}
