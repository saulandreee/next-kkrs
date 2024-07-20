"use client";
import React, { useState } from "react";
import { Timeline, TimelineContent, TimelineDot, TimelineHeading, TimelineItem, TimelineLine } from "@/components/ui/timeline";
import { User } from "lucide-react";

export default function TimelinePerkantas() {
  const [history, setHistory] = useState([
    {
      date: "06/29/1971",
      text: "Pelayanan Mahasiswa Perkantas dirintis oleh Soen Siregar, Jonathan Parapak, David Wang, dan Jimmy Kuswandi.",
    },
    {
      date: "1984",
      text: "Mangapul Sagala memuridkan beberapa remaja HKBP Kernolong (Sahala, siswa SMA 30, Marojahan, SMA 68, dan Daniel Tobing, SMA 1). Di tahun ini PSKJ hadir dan mulai melayani siswa dari berbagai sekolah.",
    },
    {
      date: "1985",
      text: "Diadakan Natal Siswa se-Jakarta.",
    },
    {
      date: "1987",
      text: "KKSJ (Kamp Kepemimpinan Siswa se-Jakarta) diadakan untuk pertama kalinya. KKSJ bertujuan meningkatkan kualitas pelayanan siswa di tiap sekolah.",
    },
    {
      date: "1988",
      text: "PSKJ (di Jakarta Pusat) mulai didampingi oleh TPS (Tim Pembimbing Siswa).",
    },
    {
      date: "1989",
      text: "PSKJ hadir di Jakarta Selatan.",
    },
    {
      date: "1992",
      text: "PSKJ hadir di Jakarta Barat.",
    },
    {
      date: "1994",
      text: "PSKJ hadir di Depok.",
    },
    {
      date: "2010",
      text: "PSKJ hadir di Jakarta Timur 2(jalan raya Bogor dan sekitarnya)",
    },
    {
      date: "2024",
      text: "14 sekolah terus dilayani dan 5 orang staf siswa aktif melayani serta 2 staf yang sedang melanjutkan studinya.",
    },
  ]);
  return (
    <div>
      <h5 className="text-2xl font-bold mb-4">Sejarah PSKJ</h5>
      <Timeline
        position="center"
        className="ml-16"
      >
        {history.map((poin, index) => {
          return (
            <TimelineItem
              status="done"
              key={index}
              className="relative"
            >
              <User className="absolute top-0 left-0" />
              <TimelineDot status="done" />
              <TimelineLine done />
              <TimelineHeading className="font-semibold text-lg">{poin.date}</TimelineHeading>
              <TimelineContent>{poin.text}</TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
}
