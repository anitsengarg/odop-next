"use client";

import { useEffect } from "react";
import { FaArrowLeft, FaMobileScreenButton } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Presentational login modal. Parent owns `open` / onClose` (e.g. page state or future provider).
 */
export default function LoginModal({ open, onClose }: LoginModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal-overlay login-modal active"
      id="login-register-modal"
      role="presentation"
      aria-hidden={false}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal-box login-modal-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="login-modal-shell login-modal-view"
          data-login-view="login"
        >
          <button
            className="modal-close login-modal-close"
            type="button"
            onClick={onClose}
            aria-label="Close login"
          >
            <IoClose />
          </button>
          <div className="login-modal-brandbar">
            <img
              src="/assets/img/logo.png"
              alt="ODOP Uttar Pradesh"
              className="login-modal-brand-logo"
              loading="lazy"
            />
          </div>
          <div className="login-modal-layout">
            <div className="login-modal-promo">
              <h3>
                One Stop Platform for Suppliers, Experts &amp; Franchisors
              </h3>
              <div className="login-modal-illustration" aria-hidden="true">
                <img
                  src="/assets/img/hero-odop-1.png"
                  alt="ODOP login illustration"
                  className="login-modal-illustration-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="login-modal-panel">
              <button
                className="login-modal-back"
                type="button"
                onClick={onClose}
                data-login-modal-close
              >
                <FaArrowLeft /> Back
              </button>
              <div className="login-modal-formwrap">
                <h2 id="login-modal-title">Login to Your Account</h2>
                <form
                  className="login-modal-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label
                    className="login-modal-field"
                    htmlFor="login-mobile-number"
                  >
                    <FaMobileScreenButton />
                    <input
                      id="login-mobile-number"
                      type="tel"
                      inputMode="numeric"
                      placeholder="Enter Mobile Number"
                    />
                  </label>
                  <button
                    className="btn btn-primary login-modal-submit"
                    type="submit"
                  >
                    Continue
                  </button>
                </form>
                <p className="login-modal-register-copy">
                  Don&apos;t have an account?
                  <button
                    className="login-modal-register-link"
                    type="button"
                    data-login-view-target="register-step-1"
                  >
                    Register
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
