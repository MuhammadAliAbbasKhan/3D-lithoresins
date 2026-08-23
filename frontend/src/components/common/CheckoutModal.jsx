import React, { useState, useEffect } from 'react';
import { X, CreditCard, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../../context/ToastContext';

export const CheckoutModal = ({ isOpen, onClose, currentUser, onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [expiry, setExpiry] = useState('12/28');
  const [cvc, setCvc] = useState('888');
  const [loading, setLoading] = useState(false);
  const [intentData, setIntentData] = useState(null);

  const { handleDjangoMessages, addToast } = useToast();

  useEffect(() => {
    if (isOpen && currentUser) {
      axios.post('/api/v1/stripe/create-payment-intent/', {
        plan_tier: currentUser.plan_tier || 'academic',
        billing_cycle: currentUser.billing_cycle || 'monthly'
      })
      .then(res => {
        if (res.data.success) {
          setIntentData(res.data);
        }
      })
      .catch(() => {
        addToast('Stripe PaymentIntent setup failed.', 'warning');
      });
    }
  }, [isOpen, currentUser]);

  if (!isOpen || !currentUser) return null;

  const handlePay = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('/api/v1/subscribe/', {
        username: currentUser.username,
        plan_tier: currentUser.plan_tier || 'academic',
        billing_cycle: currentUser.billing_cycle || 'monthly',
        payment_intent_id: intentData?.paymentIntentId || 'pi_simulated_3dlitho'
      });
      handleDjangoMessages(res.data.messages);
      if (res.data.success) {
        onPaymentSuccess(res.data.user);
        onClose();
      }
    } catch (err) {
      addToast('Stripe checkout authorization failed.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9500,
      background: 'rgba(5, 8, 17, 0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '1rem'
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '480px',
        borderRadius: '16px',
        padding: '2rem',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer'
          }}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
          <ShieldCheck size={24} color="#00f2fe" />
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>Stripe 256-Bit SSL Checkout</h3>
        </div>

        <div style={{
          background: 'rgba(0, 242, 254, 0.08)',
          border: '1px solid rgba(0, 242, 254, 0.25)',
          borderRadius: '10px',
          padding: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#e2e8f0' }}>
            <span>License Tier:</span>
            <strong style={{ color: '#00f2fe', textTransform: 'capitalize' }}>
              {currentUser.plan_tier || 'Academic'} License
            </strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 800, marginTop: '0.4rem', color: '#ffffff' }}>
            <span>Total Payable:</span>
            <span style={{ color: '#00f2fe' }}>${intentData?.amount ? intentData.amount.toFixed(2) : '149.00'} USD</span>
          </div>
        </div>

        <form onSubmit={handlePay} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>
              Card Number
            </label>
            <div style={{ position: 'relative' }}>
              <CreditCard size={16} color="#00f2fe" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="text"
                required
                value={cardNumber}
                onChange={e => setCardNumber(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>
                Expiration Date
              </label>
              <input
                type="text"
                required
                value={expiry}
                onChange={e => setExpiry(e.target.value)}
                style={inputStyleNoIcon}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>
                CVC / CWW
              </label>
              <input
                type="text"
                required
                value={cvc}
                onChange={e => setCvc(e.target.value)}
                style={inputStyleNoIcon}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-cyan"
            style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.8rem' }}>
            <Lock size={16} />
            {loading ? 'Authorizing Stripe Payment...' : 'Pay & Activate License'}
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.65rem 0.65rem 0.65rem 2.4rem',
  background: 'rgba(5, 8, 17, 0.6)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '0.9rem',
  outline: 'none'
};

const inputStyleNoIcon = {
  width: '100%',
  padding: '0.65rem',
  background: 'rgba(5, 8, 17, 0.6)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '0.9rem',
  outline: 'none'
};
