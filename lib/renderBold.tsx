import type { ReactNode } from 'react';

/**
 * Převede v textu úseky značené **hvězdičkami** na <strong>.
 * Split se zachytávající skupinou vrací střídavě obyčejné (sudé indexy)
 * a tučné (liché indexy) úseky.
 */
export const renderBold = (text: string): ReactNode[] =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
