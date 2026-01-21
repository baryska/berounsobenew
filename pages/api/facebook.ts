import type { NextApiRequest, NextApiResponse } from 'next';

interface FacebookPost {
  id: string;
  message?: string;
  full_picture?: string;
  created_time: string;
  permalink_url: string;
}

interface FacebookResponse {
  posts?: FacebookPost[];
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FacebookResponse>
) {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

  if (!pageId || !accessToken) {
    return res.status(500).json({
      error: 'Facebook konfigurace chybí. Nastavte FACEBOOK_PAGE_ID a FACEBOOK_ACCESS_TOKEN v .env.local'
    });
  }

  try {
    const fields = 'id,message,full_picture,created_time,permalink_url';
    const url = `https://graph.facebook.com/v18.0/${pageId}/posts?fields=${fields}&limit=10&access_token=${accessToken}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error('Facebook API error:', data.error);
      return res.status(500).json({ error: data.error.message });
    }

    // Filtrujeme pouze příspěvky s obrázkem nebo textem
    const posts = (data.data || []).filter(
      (post: FacebookPost) => post.full_picture || post.message
    );

    res.status(200).json({ posts });
  } catch (error) {
    console.error('Error fetching Facebook posts:', error);
    res.status(500).json({ error: 'Nepodařilo se načíst příspěvky z Facebooku' });
  }
}
