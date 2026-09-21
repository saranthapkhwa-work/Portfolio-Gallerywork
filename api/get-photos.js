export default async function handler(req, res) {
  const GAS_URL = 'https://script.google.com/macros/s/AKfycbyJmQEFB0OEmA5Q10n-3uD2ymX_bTZU5uHTZ_ZkBy95OxahdhxGQNO9kkwmUtGj4jwCfg/exec';

  try {
    // บังคับให้ดึงข้อมูลใหม่ทุกครั้ง ไม่ใช้ของเก่า
    const response = await fetch(GAS_URL, { cache: 'no-store' });
    const data = await response.json();
    
    // ส่งข้อมูลกลับไปที่หน้าเว็บทันที
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch images' });
  }
}
