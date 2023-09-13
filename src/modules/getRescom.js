import { showRes } from './showResCom.js';
import axios from 'axios';

const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/votSVyM8b966LHhFVfLV/reservations?item_id=`;

export const getResData = async (imgId) => {
  try {
    const { data } = await axios.get(url + imgId);

    showRes(data);
  } catch (error) {
    error.message = 'No reservations Available';
  }
};
