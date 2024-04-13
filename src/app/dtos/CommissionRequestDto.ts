
export interface CommissionRequestDto{
  id: bigint;
  description: string;
  status: number;
  progress: string;
  client_id:bigint;
  artist_id:bigint;
  offer_id:bigint;
}
