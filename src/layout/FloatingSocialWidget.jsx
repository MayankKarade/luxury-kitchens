"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const BRAND_DARK = "#010129";
const BRAND_GOLD = "#9A0101";

const contactConfig = {
  whatsapp: {
    number:
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^\d]/g, "") ||
      "233501523779",
    message: "Hello, I want to know more!",
  },
  phone: {
    number: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+233501523779",
  },
  email: {
    address: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "info@caliwoodgh.com",
    subject: "Free Consultation Request",
    body: "Hello, I want to book a free consultation.",
  },
};

function IconWhatsApp() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function IconChatBubble() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

const buttonBaseStyle = {
  alignItems: "center",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: "50%",
  boxShadow: "0 18px 34px rgba(1,1,41,0.28)",
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  height: "52px",
  justifyContent: "center",
  outline: "none",
  textDecoration: "none",
  width: "52px",
};

export default function FloatingSocialWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <style>{`
        .floating-social-stack {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        .floating-social-btn {
          transform: translateY(58px) scale(0.35);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.42s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .floating-social-btn.is-visible {
          transform: translateY(0) scale(1);
          opacity: 1;
          pointer-events: auto;
        }

        .floating-social-btn.is-visible:nth-child(1) { transition-delay: 0.16s; }
        .floating-social-btn.is-visible:nth-child(2) { transition-delay: 0.08s; }
        .floating-social-btn.is-visible:nth-child(3) { transition-delay: 0.02s; }
        .floating-social-btn:hover { transform: translateY(-3px) scale(1.08) !important; }
        .floating-social-btn:focus-visible,
        .floating-social-toggle:focus-visible {
          outline: 3px solid rgba(154,1,1,0.45);
          outline-offset: 3px;
        }

        .floating-social-toggle {
          position: relative;
          flex-shrink: 0;
          background: linear-gradient(135deg, ${BRAND_DARK} 0%, #111144 54%, ${BRAND_GOLD} 100%);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .floating-social-toggle::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(154,1,1,0.48);
          animation: floating-social-pulse 2.2s ease-out infinite;
          pointer-events: none;
        }

        .floating-social-toggle:hover {
          transform: scale(1.08);
          box-shadow: 0 20px 42px rgba(154,1,1,0.34) !important;
        }

        @keyframes floating-social-pulse {
          0% { transform: scale(1); opacity: 0.78; }
          100% { transform: scale(1.75); opacity: 0; }
        }

        .floating-social-icon {
          position: absolute;
          transition: opacity 0.25s ease, transform 0.35s cubic-bezier(0.34,1.4,0.64,1);
        }

        .floating-social-icon-chat { opacity: 1; transform: scale(1) rotate(0deg); }
        .floating-social-icon-close { opacity: 0; transform: scale(0.5) rotate(-90deg); }
        .floating-social-toggle.is-open .floating-social-icon-chat { opacity: 0; transform: scale(0.5) rotate(90deg); }
        .floating-social-toggle.is-open .floating-social-icon-close { opacity: 1; transform: scale(1) rotate(0deg); }

        .floating-social-tooltip {
          position: absolute;
          right: 0;
          bottom: calc(100% + 10px);
          transform: translateY(6px);
          background: rgba(1, 1, 41, 0.92);
          border: 1px solid rgba(154,1,1,0.35);
          border-radius: 8px;
          box-shadow: 0 10px 26px rgba(1,1,41,0.28);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          opacity: 0;
          padding: 7px 12px;
          pointer-events: none;
          text-transform: uppercase;
          transition: opacity 0.2s ease, transform 0.2s ease;
          white-space: nowrap;
        }

        .floating-social-tooltip::after {
          content: "";
          position: absolute;
          right: 20px;
          top: 100%;
          border: 5px solid transparent;
          border-top-color: rgba(1, 1, 41, 0.92);
        }

        .floating-social-tooltip.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .floating-social-stack {
            right: 16px;
            bottom: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-social-btn,
          .floating-social-icon,
          .floating-social-toggle,
          .floating-social-toggle::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div
        className="floating-social-stack"
        role="group"
        aria-label="Contact options"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <a
          className={`floating-social-btn ${isOpen ? "is-visible" : ""}`}
          style={{ ...buttonBaseStyle, background: BRAND_GOLD }}
          href={`https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(contactConfig.whatsapp.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <IconWhatsApp />
        </a>

        <a
          className={`floating-social-btn ${isOpen ? "is-visible" : ""}`}
          style={{ ...buttonBaseStyle, background: BRAND_DARK }}
          href={`mailto:${contactConfig.email.address}?subject=${encodeURIComponent(contactConfig.email.subject)}&body=${encodeURIComponent(contactConfig.email.body)}`}
          aria-label="Send us an email"
        >
          <IconEmail />
        </a>

        <a
          className={`floating-social-btn ${isOpen ? "is-visible" : ""}`}
          style={{ ...buttonBaseStyle, background: "#111144" }}
          href={`tel:${contactConfig.phone.number}`}
          aria-label={`Call us at ${contactConfig.phone.number}`}
        >
          <IconPhone />
        </a>

        <button
          ref={toggleRef}
          type="button"
          className={`floating-social-toggle ${isOpen ? "is-open" : ""}`}
          style={{ ...buttonBaseStyle, pointerEvents: "auto" }}
          onClick={handleToggle}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          onFocus={() => setTooltipVisible(true)}
          onBlur={() => setTooltipVisible(false)}
          aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`floating-social-tooltip ${tooltipVisible && !isOpen ? "is-visible" : ""}`}
            role="tooltip"
          >
            Contact Us
          </span>
          <span className="floating-social-icon floating-social-icon-chat">
            <IconChatBubble />
          </span>
          <span className="floating-social-icon floating-social-icon-close">
            <IconClose />
          </span>
        </button>
      </div>
    </>
  );
}
