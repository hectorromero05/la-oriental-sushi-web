import { whatsappUrl } from '../data.js';

export default function WhatsappButton() {
  return (
    <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Enviar mensaje a La Oriental Sushi por WhatsApp">
      <span>☘</span>
    </a>
  );
}
