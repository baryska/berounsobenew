import React from 'react';

export function RichText({ text }: { text: string }) {
  const parts = text.split(/(<strong>.*?<\/strong>)/g);
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^<strong>([\s\S]*)<\/strong>$/);
        if (match) return <strong key={i}>{match[1]}</strong>;
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}
