export default function handler(req, res) {
  res.status(200).json({ 
    status: 'OK',
    platform: 'FullHousey',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  })
}