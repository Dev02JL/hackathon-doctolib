"use client";

import React, { useState } from "react";
import AppointmentCard from "./AppointmentCard";

export default function RdvTabs() {
  const [active, setActive] = useState<"upcoming" | "past">("upcoming");

  return (
    <div>
      {/* Barre d'onglets pleine largeur */}
      <div className="bg-white relative">
        <div className="flex w-full">
          <button
            type="button"
            className={`flex-1 text-center py-3 text-lg md:text-xl ${
              active === "upcoming" ? "font-semibold text-oxylove" : "text-nightshift/70"
            }`}
            onClick={() => setActive("upcoming")}
          >
            À venir
          </button>
          <button
            type="button"
            className={`flex-1 text-center py-3 text-lg md:text-xl ${
              active === "past" ? "font-semibold text-oxylove" : "text-nightshift/70"
            }`}
            onClick={() => setActive("past")}
          >
            Passés
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#cfeaf8]" />
        <span
          className="absolute bottom-0 left-0 h-[3px] bg-oxylove transition-transform duration-300"
          style={{ width: "50%", transform: active === "upcoming" ? "translateX(0%)" : "translateX(100%)" }}
        />
      </div>

      {/* Lists */}
      {active === "upcoming" ? (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <AppointmentCard
            dateLabel="Lundi 22 décembre"
            timeLabel="10h00"
            doctorName="Dr Caroline LEBOEUF"
            specialty="Chirurgien-dentiste"
            actLabel="Adulte - Contrôle annuel et/ ou détartrage"
            avatarSrc="/icons/icon_white.png"
            href="#"
          />
          <AppointmentCard
            dateLabel="Vendredi 26 décembre"
            timeLabel="17h30"
            doctorName="Dr Marc Lamotte"
            specialty="Médecin généraliste"
            actLabel="Adulte - Contrôle annuel"
            avatarSrc="/icons/icon_white.png"
            href="#"
          />
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <AppointmentCard
            dateLabel="Lundi 5 août"
            timeLabel="09h15"
            doctorName="Dr Alice Martin"
            specialty="Dermatologue"
            actLabel="Consultation de suivi"
            avatarSrc="/icons/icon_white.png"
            href="#"
          />
        </div>
      )}
    </div>
  );
}


