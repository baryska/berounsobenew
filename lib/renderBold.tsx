import type { ReactNode } from 'react';
import { fixNbsp } from './nbsp';

/**
 * Převede v textu úseky značené **hvězdičkami** na <strong>.
 * Split se zachytávající skupinou vrací střídavě obyčejné (sudé indexy)
 * a tučné (liché indexy) úseky.
 *
 * Zároveň doplní nedělitelné mezery za jednopísmenné předložky a spojky,
 * aby nezůstávaly viset na konci řádku (viz `fixNbsp`).
 */
export const renderBold = (text: string): ReactNode[] =>
  fixNbsp(text)
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
