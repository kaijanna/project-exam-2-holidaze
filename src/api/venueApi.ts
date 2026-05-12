import { apiClient } from './apiClient';
import type { VenueResponse } from '../types/venue';

export async function getVenues() {
  return apiClient<VenueResponse>('/holidaze/venues');
}