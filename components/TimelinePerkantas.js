"use client";
import React, { useState } from "react";
import { Timeline, TimelineContent, TimelineDot, TimelineHeading, TimelineItem, TimelineLine } from "@/components/ui/timeline";
import { Coffee, Sparkle, Sparkles, User } from "lucide-react";

export default function TimelinePerkantas() {
  const [history, setHistory] = useState([
    {
      date: "29 Juni 1971",
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
      <h5 className="text-3xl font-bold mb-4 text-pourri-500">Sejarah PSKJ</h5>
      <Timeline
        position="center"
        // className="ml-16"
      >
        {history.map((poin, index) => {
          return (
            <TimelineItem
              status="done"
              key={index}
              className="relative"
            >
              <TimelineDot status="done">
                <span className="flex items-center justify-center rounded-full w-10 h-10 relative left-1.5 bg-pourri-500 text-mandy-500">
                  <Sparkles
                    className="w-6 h-6"
                    fill="#e85d75"
                  />
                </span>
              </TimelineDot>
              <TimelineLine
                done
                className="bg-pourri-500"
              />
              <TimelineHeading className="font-semibold text-lg ml-2">{poin.date}</TimelineHeading>
              <TimelineContent className="border-2 border-mandy-600/50 bg-pourri-500/80 p-4 rounded-lg mb-4">{poin.text}</TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
}
