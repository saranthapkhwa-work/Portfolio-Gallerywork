export default async function handler(req, res) {
  const GAS_URL = 'https://script.google.com/macros/s/AKfycbyJmQEFB0OEmA5Q10n-3uD2ymX_bTZU5uHTZ_ZkBy95OxahdhxGQNO9kkwmUtGj4jwCfg/exec';

  try {
    const response = await fetch(GAS_URL);
    const data = await response.json();
    
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch images' });
  }
}