class MyPayments {
    constructor() {
        this.baseUrl = window.location.origin;
        this.currentTransaction = null;
        this.paymentHistory = JSON.parse(localStorage.getItem('myPaymentsHistory') || '[]');
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.hideLoading();
        this.updateHistoryDisplay();
        this.setupLoadingStatus();
    }
    
    setupLoadingStatus() {
        const statuses = [
            'Initializing Gateway',
            'Connecting to Atlantic Pedia',
            'Loading Payment Modules',
            'Verifying API Credentials',
            'Ready to Process Payments'
        ];
        
        let index = 0;
        const statusElement = document.getElementById('loading-status');
        
        const changeStatus = () => {
            if (statusElement) {
                statusElement.textContent = statuses[index];
                index = (index + 1) % statuses.length;
            }
        };
        
        setInterval(changeStatus, 1500);
        changeStatus(); 
    }
    
    hideLoading() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
        }, 1500);
    }
    
    bindEvents() {
        const paymentForm = document.getElementById('payment-form');
        if (paymentForm) {
            paymentForm.addEventListener('submit', (e) => this.handlePaymentSubmit(e));
        }
        
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const amount = e.target.dataset.amount;
                document.getElementById('amount').value = amount;
            });
        });
        
        const clearBtn = document.getElementById('clear-form-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearForm());
        }
        
        const downloadBtn = document.getElementById('download-qr-btn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => this.downloadQR());
        }
        
        const refreshBtn = document.getElementById('refresh-status-btn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => this.checkPaymentStatus());
        }
        
        const copyBtn = document.getElementById('copy-qr-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => this.copyToClipboard('qr-string'));
        }
    }
    
    async handlePaymentSubmit(e) {
        e.preventDefault();
        
        const amount = document.getElementById('amount').value;
        const customerName = document.getElementById('customer-name').value;
        
        if (!amount || parseInt(amount) < 1000) {
            this.showToast('Minimum amount is Rp 1,000', 'error');
            return;
        }
        
        this.showLoading('Processing Payment');
        
        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: parseInt(amount),
                    customerName: customerName || 'Customer',
                    refId: `JOOMODS-${Date.now()}`
                })
            });
            
            const result = await response.json();
            
            if (result.success) {
                this.currentTransaction = result.data;
                this.showPaymentResult();
                this.saveToHistory();
                this.sendTelegramNotification();
            } else {
                throw new Error(result.error || 'Failed to generate QRIS');
            }
        } catch (error) {
            this.showToast(`Error: ${error.message}`, 'error');
        } finally {
            this.hideLoading();
        }
    }
    
    showLoading(status = 'Processing') {
        const loadingScreen = document.getElementById('loading-screen');
        const statusElement = document.getElementById('loading-status');
        
        if (loadingScreen) {
            loadingScreen.style.display = 'flex';
            loadingScreen.classList.remove('hidden');
        }
        
        if (statusElement) {
            statusElement.textContent = status;
        }
    }
    
    hideLoading() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }
    
    showPaymentResult() {
        if (!this.currentTransaction) return;
        
        const transaction = this.currentTransaction;
        

        const qrImage = document.getElementById('qr-image');
        if (qrImage) {
            qrImage.src = transaction.qr_url;
            qrImage.alt = `QRIS Payment ${transaction.id}`;
        }
        
        document.getElementById('transaction-id').textContent = `JOOMODS-${transaction.id}`;
        document.getElementById('detail-amount').textContent = `Rp ${this.formatNumber(transaction.amount)}`;
        document.getElementById('payment-status').textContent = transaction.status || 'Pending';
        document.getElementById('payment-status').className = `status-badge ${transaction.status || 'pending'}`;
        document.getElementById('created-time').textContent = this.formatTime(new Date());
        document.getElementById('qr-string').value = transaction.qr_string || '';
        
        const createSection = document.getElementById('create');
        const resultSection = document.getElementById('result');
        
        if (createSection) createSection.style.display = 'none';
        if (resultSection) {
            resultSection.style.display = 'block';
            resultSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        this.showToast('QRIS generated successfully!', 'success');
    }
    
    async checkPaymentStatus() {
        if (!this.currentTransaction) return;
        
        this.showLoading('Checking Payment Status');
        
        try {
            const response = await fetch(`/api/status/${this.currentTransaction.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            const result = await response.json();
            
            if (result.success) {
                const status = result.data.status;
                const statusElement = document.getElementById('payment-status');
                
                if (statusElement) {
                    statusElement.textContent = status;
                    statusElement.className = `status-badge ${status}`;
                    
                    if (status === 'success') {
                        this.showToast('Payment completed successfully!', 'success');
                    } else if (status === 'processing') {
                        this.showToast('Payment is being processed', 'warning');
                    }
                }
            }
        } catch (error) {
            this.showToast(`Status check failed: ${error.message}`, 'error');
        } finally {
            this.hideLoading();
        }
    }
    
    async downloadQR() {
        if (!this.currentTransaction?.qr_url) {
            this.showToast('No QR code available to download', 'error');
            return;
        }
        
        try {
            const response = await fetch(this.currentTransaction.qr_url);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            
            a.href = url;
            a.download = `qris-payment-${this.currentTransaction.id}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            this.showToast('QRIS downloaded successfully!', 'success');
        } catch (error) {
            this.showToast('Failed to download QRIS', 'error');
        }
    }
    
    async sendTelegramNotification() {
        if (!this.currentTransaction) return;
        
        const transaction = this.currentTransaction;
        const telegramBotToken = '8495777949:AAE3mJzso2STH9onaXXXIq0N05vge8k2mdU';
        const chatId = '7978512548';
        
        const caption = `QRIS Berhasil Dibuat!\n\n` +
                       `- Nominal: Rp ${this.formatNumber(transaction.amount)}\n` +
                       `- ID Pembayaran: JOOMODS-${transaction.id}\n` +
                       `- Status: ${transaction.status || 'Pending'}`;
        
        try {
            await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendPhoto`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    photo: transaction.qr_url,
                    caption: caption,
                    parse_mode: 'Markdown'
                })
            });
            
            console.log('Telegram notification sent successfully');
        } catch (error) {
            console.error('Failed to send Telegram notification:', error);
        }
    }
    
    saveToHistory() {
        if (!this.currentTransaction) return;
        
        const historyItem = {
            ...this.currentTransaction,
            timestamp: new Date().toISOString(),
            formattedTime: this.formatTime(new Date())
        };
        
        this.paymentHistory.unshift(historyItem);
        if (this.paymentHistory.length > 50) {
            this.paymentHistory = this.paymentHistory.slice(0, 50);
        }
        
        localStorage.setItem('myPaymentsHistory', JSON.stringify(this.paymentHistory));
        this.updateHistoryDisplay();
    }
    
    updateHistoryDisplay() {
        const placeholder = document.getElementById('history-placeholder');
        const list = document.getElementById('history-list');
        
        if (this.paymentHistory.length === 0) {
            if (placeholder) placeholder.style.display = 'block';
            if (list) list.style.display = 'none';
            return;
        }
        
        if (placeholder) placeholder.style.display = 'none';
        if (list) {
            list.style.display = 'block';
            list.innerHTML = this.paymentHistory.map(item => `
                <div class="history-item">
                    <div class="history-item-main">
                        <div class="history-id">JOOMODS-${item.id}</div>
                        <div class="history-amount">Rp ${this.formatNumber(item.amount)}</div>
                    </div>
                    <div class="history-item-meta">
                        <span class="history-time">${item.formattedTime}</span>
                        <span class="history-status status-badge ${item.status || 'pending'}">
                            ${item.status || 'Pending'}
                        </span>
                    </div>
                </div>
            `).join('');
        }
    }
    
    clearForm() {
        document.getElementById('payment-form').reset();
        document.getElementById('amount').focus();
    }
    
    async copyToClipboard(elementId) {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        try {
            await navigator.clipboard.writeText(element.value);
            this.showToast('Copied to clipboard!', 'success');
        } catch (err) {
            this.showToast('Failed to copy', 'error');
        }
    }
    
    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-icon">
                ${type === 'success' ? '✓' : type === 'error' ? '✗' : '⚠'}
            </div>
            <div class="toast-message">${message}</div>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 10);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
    
    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    
    formatTime(date) {
        const now = new Date();
        const diff = now - date;
        
        if (diff < 60000) return 'Just now';
        if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
        if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
        
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MyPayments();
   
    const style = document.createElement('style');
    style.textContent = `
        .toast-icon {
            font-weight: bold;
        }
        .history-item {
            background-color: var(--bg-tertiary);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-md);
            padding: 1rem;
            margin-bottom: 0.75rem;
            transition: all var(--transition-fast);
        }
        .history-item:hover {
            background-color: var(--bg-hover);
            border-color: var(--accent-primary);
        }
        .history-item-main {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
        }
        .history-id {
            font-weight: var(--font-weight-medium);
            color: var(--text-primary);
        }
        .history-amount {
            font-weight: var(--font-weight-semibold);
            color: var(--accent-primary);
        }
        .history-item-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.875rem;
        }
        .history-time {
            color: var(--text-secondary);
        }
    `;
    document.head.appendChild(style);
});