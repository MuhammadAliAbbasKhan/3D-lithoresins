import React from 'react';
import { useToast } from '../../context/ToastContext';
import { CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react';

export const ToastNotification = () => {
  const { toasts } = useToast();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '400px'
    }}>
      {toasts.map(toast => {
        let bg = 'rgba(11, 19, 38, 0.95)';
        let border = '1px solid #00f2fe';
        let icon = <Info size={18} color="#00f2fe" />;

        if (toast.type === 'success') {
          border = '1px solid #10b981';
          icon = <CheckCircle2 size={18} color="#10b981" />;
        } else if (toast.type === 'error' || toast.type === 'danger') {
          border = '1px solid #ef4444';
          icon = <XCircle size={18} color="#ef4444" />;
        } else if (toast.type === 'warning') {
          border = '1px solid #f59e0b';
          icon = <AlertTriangle size={18} color="#f59e0b" />;
        }

        return (
          <div key={toast.id} style={{
            background: bg,
            border,
            borderRadius: '8px',
            padding: '12px 16px',
            color: '#e2e8f0',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
            backdropFilter: 'blur(8px)'
          }}>
            {icon}
            <span>{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
};
