export const config = {
    smtp: {
        host: process.env.SMTP_HOST || 'smtp.hostinger.com',
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: process.env.SMTP_SECURE === 'true',
        user: process.env.SMTP_USER || 'info@simdte.com',
        password: process.env.SMTP_PASSWORD || '',
        from: process.env.SMTP_FROM || 'noreply@example.com',
    },
}; 