"use client";
import React, { useState } from "react";
import Link from "next/link";

const ContactForm = () => {
  return (
    <>
      <div className="w-full text-white">
        <form className="w-full space-y-3">
          <div className="flex flex-row align-middle items-center justify-center border space-x-2 border-white p-2">
            <label htmlFor="name" className="uppercase text-sm">
              Nome:
            </label>
            <input type="text" id="name" className="w-full bg-transparent" />
          </div>
          <div className="flex flex-row align-middle items-center justify-center border space-x-2 border-white p-2">
            <label htmlFor="phone" className="uppercase text-sm">
              Telefone:
            </label>
            <input type="text" id="phone" className="w-full bg-transparent" />
          </div>
          <div className="flex flex-row align-middle items-center justify-center border space-x-2 border-white p-2">
            <label htmlFor="email" className="w-full uppercase text-sm">
              E-mail:
            </label>
            <input type="text" id="email" className="w-full bg-transparent" />
          </div>
          <div className="flex flex-row align-middle items-center justify-center border space-x-2 border-white p-2">
            <label htmlFor="cpf" className="uppercase text-sm">
              Cpf:
            </label>
            <input type="text" id="cpf" className="w-full bg-transparent" />
          </div>
          <div>
            <p className="uppercase text-sm">Quero receber contato por:</p>
          </div>
          <div className="w-full flex align-middle justify-center items-center space-x-2 text-sm mb-12">
            <div className="flex align-middle justify-center items-center space-x-2">
              <input type="checkbox" id="whatsappCheck" />
              <label htmlFor="whatsappCheck">WhatsApp</label>
            </div>
            <div className="flex align-middle justify-center items-center space-x-2">
              <input type="checkbox" id="emailCheck" />
              <label htmlFor="emailCheck">E-mail</label>
            </div>
            <div className="flex align-middle justify-center items-center space-x-2">
              <input type="checkbox" id="phoneCheck" />
              <label htmlFor="phoneCheck">Telefone</label>
            </div>
          </div>
          <div className="w-full">
            <p className="text-sm text-start">
              Estamos comprometidos em resguardar suas informações. Conheça
              nossa{" "}
              <Link href={"#"} className="font-bold underline">
                Política de privacidade.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
