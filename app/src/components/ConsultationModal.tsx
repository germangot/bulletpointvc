import { FormEvent, useEffect, useState } from 'react';
import { X } from 'lucide-react';

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = encodeURIComponent(
      `New consultation request.%0AEmail: ${email}%0APhone: ${phone}`
    );
    window.open(`https://t.me/muravyev_vlad?text=${message}`, '_blank');

    setEmail('');
    setPhone('');
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <button
        aria-label="Close consultation form"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/15 bg-[#0a0a0a] p-6 md:p-8 shadow-2xl">
        <button
          aria-label="Close consultation form"
          className="absolute right-4 top-4 text-white/50 hover:text-white transition-colors"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="text-2xl font-semibold tracking-tight mb-2">
          Request a consultation
        </h3>
        <p className="text-sm text-white/60 mb-6">
          Leave your contacts and I will reach out personally.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            required
            type="password"
            autoComplete="off"
            inputMode="email"
            className="input-field"
            placeholder="Email (masked)"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            required
            type="password"
            autoComplete="off"
            inputMode="tel"
            className="input-field"
            placeholder="Phone number (masked)"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />

          <button type="submit" className="btn-primary w-full !mt-6">
            Request consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;
