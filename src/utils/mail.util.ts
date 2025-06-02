import nodemailer from 'nodemailer';
import { config } from '../config';

export class MailUtil {
    private static transporter = nodemailer.createTransport({
        host: config.smtp.host,
        port: config.smtp.port,
        secure: config.smtp.secure,
        auth: {
            user: config.smtp.user,
            pass: config.smtp.password,
        },
    });

    /**
     * Send an email using SMTP
     * @param to - Recipient email address
     * @param subject - Email subject
     * @param body - Email body (can be HTML)
     * @returns Promise<boolean> - Returns true if email was sent successfully
     */
    public static async sendMail(to: string, subject: string, body: string): Promise<boolean> {
        try {
            const mailOptions = {
                from: config.smtp.from,
                to,
                subject,
                html: body,
            };

            const info = await this.transporter.sendMail(mailOptions);
            console.log('Email sent successfully:', info.messageId);
            return true;
        } catch (error) {
            console.error('Error sending email:', error);
            return false;
        }
    }

    /**
     * Send an email to multiple recipients
     * @param recipients - Array of recipient email addresses
     * @param subject - Email subject
     * @param body - Email body (can be HTML)
     * @returns Promise<boolean> - Returns true if email was sent successfully
     */
    public static async sendBulkMail(recipients: string[], subject: string, body: string): Promise<boolean> {
        try {
            const mailOptions = {
                from: config.smtp.from,
                bcc: recipients.join(','),
                subject,
                html: body,
            };

            const info = await this.transporter.sendMail(mailOptions);
            console.log('Bulk email sent successfully:', info.messageId);
            return true;
        } catch (error) {
            console.error('Error sending bulk email:', error);
            return false;
        }
    }
} 