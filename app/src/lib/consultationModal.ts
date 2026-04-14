export const OPEN_CONSULTATION_MODAL_EVENT = 'open-consultation-modal';

export const openConsultationModal = () => {
  window.dispatchEvent(new Event(OPEN_CONSULTATION_MODAL_EVENT));
};
