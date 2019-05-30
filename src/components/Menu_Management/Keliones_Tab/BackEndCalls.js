import axios from "axios";
import { ServerHostName } from '../../../constants/serverUri.js';

// Required for data calls
import "babel-polyfill";

export async function mergeTravels(toMergeId, mergeIntoId, callback) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "Authorization": authToken,
    },
  };

  const reqData = JSON.stringify({ id: toMergeId });

  try {
    const val = await axios.put(`${ServerHostName}/api/Travels/JoinTravels/${mergeIntoId}`, reqData, config);
    callback(val);
    return val;
  } catch (error) {
    // eslint-disable-next-line
    alert(error);
  }
  return null;
}

export async function updateTravel(travelData, callback) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "Authorization": authToken,
    },
  };

  const reqData = JSON.stringify(travelData);

  try {
    const travelId = travelData.id;
    const val = await axios.put(`${ServerHostName}/api/Travels/${travelId}`, reqData, config);
    callback(val);
    return val;
  } catch (error) {
    // eslint-disable-next-line
    alert(error);
  }
  return null;
}

export async function addTravel(travelData, callback) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const reqData = JSON.stringify(travelData);
  console.log(reqData);

  try {
    const val = await axios.post(`${ServerHostName}/api/Travels`, reqData, config);
    callback(val);
    return val;
  } catch (error) {
    // eslint-disable-next-line
    alert(error);
  }
  return null;
}
