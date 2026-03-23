import { supabase } from "../supabase";
import { NotFoundError } from '../utils/errors';

// Cards service — search, filters, card details
export class CardsService {

  static readonly TABLE_NAME = "cards";

  async getAllCards() {
    const { data, error } = await supabase
      .from(CardsService.TABLE_NAME)
      .select();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async getCardById(id: string) {
    const { data, error } = await supabase
      .from(CardsService.TABLE_NAME)
      .select()
      .eq("id", id)
      .single();

    if (error) {
      throw new NotFoundError(`Card with id ${id} not found`);
    }

    return data;
  }

  async searchCardsByName(query: string) {
    const { data, error } = await supabase
      .from(CardsService.TABLE_NAME)
      .select()
      .ilike("name", `%${query}%`);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}

export const cardsService = new CardsService();
