export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    try {
        const { amount, customerName, refId } = req.body;
        
        if (!amount || amount < 1000) {
            return res.status(400).json({ error: 'Minimum amount is Rp 1,000' });
        }
        
        const apiKey = process.env.ATLANTIC_API_KEY;
        const baseUrl = process.env.ATLANTIC_BASE_URL;
        
        if (!apiKey) {
            throw new Error('Atlantic API key not configured');
        }
        
        const params = new URLSearchParams();
        params.append('api_key', apiKey);
        params.append('reff_id', refId || `JOOMODS-${Date.now()}`);
        params.append('nominal', amount);
        params.append('type', 'ewallet');
        params.append('metode', 'qris');
        
        const response = await fetch(`${baseUrl}/deposit/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params,
            timeout: 15000
        });
        
        const data = await response.json();
        
        if (data && data.status === true) {
            const transaction = {
                id: data.data.id,
                amount: amount,
                customerName: customerName || 'Customer',
                qr_url: data.data.qr_image,
                qr_string: data.data.qr_string,
                status: 'pending',
                timestamp: new Date().toISOString()
            };
            
            return res.status(200).json({
                success: true,
                message: 'QRIS generated successfully',
                data: transaction
            });
        } else {
            throw new Error(data?.message || 'Failed to generate QRIS');
        }
        
    } catch (error) {
        console.error('QRIS Generation Error:', error);
        
        let errorMessage = error.message;
        if (error.code === 'ECONNABORTED') {
            errorMessage = 'Timeout - API Gateway tidak merespon';
        } else if (error.code === 'ENOTFOUND') {
            errorMessage = 'API Gateway tidak ditemukan';
        }
        
        return res.status(500).json({
            success: false,
            error: errorMessage
        });
    }
}