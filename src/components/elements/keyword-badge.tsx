import React from 'react';

interface KeywordBadgeProps {
  name: string;
}

// Objek warna berdasarkan keyword
const keywordColors: Record<
  string,
  { bg: string; text: string }
> = {
  Pelatihan: { bg: 'bg-bgPelatihan', text: 'text-textPelatihan' },
  Webinar: { bg: 'bg-bgWebinar', text: 'text-textWebinar' },
  Relawan: { bg: 'bg-bgRelawan', text: 'textRelawan' },
  Mentoring: { bg: 'bg-bgMentoring', text: 'text-textMentoring' },
  Kewirausahaan: { bg: 'bg-bgKewirausahaan', text: 'text-textKewirausahaan' },
  Edukasi: { bg: 'bg-bgEdukasi', text: 'text-textEdukasi' },
  Lomba: { bg: 'bg-bgLomba', text: 'text-textLomba' },
  Pemberdayaan: { bg: 'bg-bgPemberdayaan', text: 'text-textPemberdayaan' },
  Sosialisasi: { bg: 'bg-bgSosialisasi', text: 'text-textSosialisasi' },
  Penghijauan: { bg: 'bg-bgPenghijauan', text: 'text-textPenghijauan' },
  Karier: { bg: 'bg-bgKarir', text: 'text-textKarir' },
  Literasi: { bg: 'bg-bgLiterasi', text: 'text-textLiterasi' },
  Kepemimpinan: { bg: 'bg-bgKepemimpinan', text: 'text-textKepemimpinan' },
};

const KeywordBadge: React.FC<KeywordBadgeProps> = ({ name }) => {
  const colors = keywordColors[name] || { bg: 'bg-gray-100', text: 'text-gray-600' };

  return (
    <span
      className={`px-2 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-extralight`}
    >
      {name}
    </span>
  );
};

export default KeywordBadge;