import type { NextApiRequest, NextApiResponse } from 'next';
import { musicData } from '@/data/music';
type Data = {
  data: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const musicItem = musicData.filter((p: any) => p.id == req.query.id);
  res.status(200).json({ data: musicItem[0] });
}
