class MyPaymentsIcons {
    static renderLogoIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="url(#logo-bg-gradient)"/>
                <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="black" stroke="#0070f3" stroke-width="2"/>
                <path d="M16 12L20 16L16 20L12 16L16 12Z" fill="#0070f3"/>
                <path d="M18 14L22 18L18 22L14 18L18 14Z" fill="white" opacity="0.2"/>
                <defs>
                    <linearGradient id="logo-bg-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0070f3"/>
                        <stop offset="1" stop-color="#7928ca"/>
                    </linearGradient>
                </defs>
            </svg>
        `;
    }
    
    static renderCreateIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 12H20" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="10" stroke="#0070f3" stroke-width="2"/>
            </svg>
        `;
    }
    
    static renderHistoryIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#0070f3" stroke-width="2"/>
                <path d="M12 6V12L16 14" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="1" fill="#0070f3"/>
            </svg>
        `;
    }
    
    static renderDocsIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="#0070f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 2V8H20" stroke="#0070f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 13H8" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
                <path d="M16 17H8" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
    }
    
    static renderStatsIcon1(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#0070f3" stroke-width="2"/>
                <path d="M12 6V12L16 14" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
                <path d="M12 12L12 18" stroke="#7928ca" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
    }
    
    static renderStatsIcon2(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#0070f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }
    
    static renderStatsIcon3(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="#0070f3" stroke-width="2"/>
                <path d="M7 11V7C7 5.34315 8.34315 4 10 4H14C15.6569 4 17 5.34315 17 7V11" stroke="#0070f3" stroke-width="2"/>
                <circle cx="12" cy="16" r="1" fill="#0070f3"/>
            </svg>
        `;
    }
    
    static renderAmountIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#0070f3" stroke-width="2"/>
                <path d="M12 8V16" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 12H16" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
                <path d="M15 9L9 15" stroke="#7928ca" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
    }
    
    static renderCustomerIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="#0070f3" stroke-width="2"/>
                <path d="M5 20C5 16.134 8.13401 13 12 13C15.866 13 19 16.134 19 20" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
    }
    
    static renderGenerateIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
                <path d="M12 6V12L16 14" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 12H16" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
    }
    
    static renderClearIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 6L18 18" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }
    
    static renderSuccessIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#10b981" stroke-width="2"/>
                <path d="M8 12L11 15L16 9" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }
    
    static renderDownloadIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }
    
    static renderRefreshIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.3869 3 16.5761 3.9535 18.2426 5.51573" stroke="#888888" stroke-width="2" stroke-linecap="round"/>
                <path d="M21 3V8H16" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }
    
    static renderIdIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="7" width="18" height="10" rx="2" stroke="#0070f3" stroke-width="2"/>
                <path d="M8 11H16" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 14H12" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
                <circle cx="17" cy="10" r="1" fill="#0070f3"/>
            </svg>
        `;
    }
    
    static renderAmountDetailIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#0070f3" stroke-width="2"/>
                <path d="M12 8V16" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 12H16" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
    }
    
    static renderStatusIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#0070f3" stroke-width="2"/>
                <path d="M12 8V12L14 14" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="16" r="1" fill="#0070f3"/>
            </svg>
        `;
    }
    
    static renderTimeIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#0070f3" stroke-width="2"/>
                <path d="M12 6V12L16 14" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
    }
    
    static renderCopyIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="9" width="13" height="13" rx="2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }
    
    static renderInfoIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#888888" stroke-width="2"/>
                <path d="M12 8V12" stroke="#888888" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="16" r="1" fill="#888888"/>
            </svg>
        `;
    }
    
    static renderFeature1Icon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#0070f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 6L22 10L18 14" stroke="#7928ca" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }
    
    static renderFeature2Icon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="#0070f3" stroke-width="2"/>
                <path d="M7 11V7C7 5.34315 8.34315 4 10 4H14C15.6569 4 17 5.34315 17 7V11" stroke="#0070f3" stroke-width="2"/>
                <circle cx="12" cy="16" r="1" fill="#0070f3"/>
                <circle cx="12" cy="16" r="3" stroke="#0070f3" stroke-width="2"/>
            </svg>
        `;
    }
    
    static renderFeature3Icon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11.5C21 16.1944 17.1944 20 12.5 20C11.4235 20 10.3884 19.8189 9.42462 19.4853C8.27022 19.0854 7.23129 18.4661 6.35641 17.6795C4.72615 16.2171 3.5 14.1766 3.5 11.5C3.5 6.80558 7.30558 3 12 3C16.6944 3 20.5 6.80558 20.5 11.5Z" stroke="#0070f3" stroke-width="2"/>
                <path d="M8 9L12 13L16 9" stroke="#0070f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 13V3" stroke="#0070f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }
    
    static renderFeature4Icon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20V10" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
                <path d="M18 20V4" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
                <path d="M6 20V16" stroke="#0070f3" stroke-width="2" stroke-linecap="round"/>
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#0070f3" stroke-width="2"/>
            </svg>
        `;
    }
    
    static renderHistoryEmptyIcon(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#666666" stroke-width="2"/>
                <path d="M12 8V12L15 15" stroke="#666666" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 12H16" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 2"/>
            </svg>
        `;
    }
    
    static renderAllIcons() {
        MyPaymentsIcons.renderLogoIcon('logo-icon');
        MyPaymentsIcons.renderCreateIcon('create-icon');
        MyPaymentsIcons.renderHistoryIcon('history-icon');
        MyPaymentsIcons.renderDocsIcon('docs-icon');
        MyPaymentsIcons.renderStatsIcon1('stats-icon-1');
        MyPaymentsIcons.renderStatsIcon2('stats-icon-2');
        MyPaymentsIcons.renderStatsIcon3('stats-icon-3');
        MyPaymentsIcons.renderAmountIcon('amount-icon');
        MyPaymentsIcons.renderCustomerIcon('customer-icon');
        MyPaymentsIcons.renderGenerateIcon('generate-icon');
        MyPaymentsIcons.renderClearIcon('clear-icon');
        MyPaymentsIcons.renderSuccessIcon('success-icon');
        MyPaymentsIcons.renderDownloadIcon('download-icon');
        MyPaymentsIcons.renderRefreshIcon('refresh-icon');
        MyPaymentsIcons.renderIdIcon('id-icon');
        MyPaymentsIcons.renderAmountDetailIcon('amount-detail-icon');
        MyPaymentsIcons.renderStatusIcon('status-icon');
        MyPaymentsIcons.renderTimeIcon('time-icon');
        MyPaymentsIcons.renderCopyIcon('copy-icon');
        MyPaymentsIcons.renderInfoIcon('info-icon');
        MyPaymentsIcons.renderFeature1Icon('feature-1-icon');
        MyPaymentsIcons.renderFeature2Icon('feature-2-icon');
        MyPaymentsIcons.renderFeature3Icon('feature-3-icon');
        MyPaymentsIcons.renderFeature4Icon('feature-4-icon');
        MyPaymentsIcons.renderHistoryEmptyIcon('history-empty-icon');
    }
}

document.addEventListener('DOMContentLoaded', MyPaymentsIcons.renderAllIcons);