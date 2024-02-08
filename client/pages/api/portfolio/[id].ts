import type { NextApiRequest, NextApiResponse } from 'next';
import { portfolioData } from '@/data/portfolio';
type Data = {
  data: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const portfolioItem = portfolioData.filter((p: any) => p.id == req.query.id);
  res.status(200).json({ data: portfolioItem[0] });
}
