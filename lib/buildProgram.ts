import { ALL_SEKCE, PERSONAS, type PersonaId, type ProgramPoint, type Sekce, type Weights } from "../data/program-new-data";

export const scoreFor = (w: Weights | undefined, active: Set<PersonaId>): number =>
  w ? [...active].reduce((sum, pid) => sum + w[pid], 0) : 0;

export interface SekceView {
  sekce: Sekce;
  score: number;
  visiblePoints: ProgramPoint[];
  hiddenPoints: ProgramPoint[];
  collapsed: boolean;
}

export interface ProgramView {
  intro: Sekce[];
  sekce: SekceView[];
  microcopy: string | null;
}

export function buildProgram(active: Set<PersonaId>): ProgramView {
  const intro = ALL_SEKCE.filter(s => !s.weights);
  const scored = ALL_SEKCE.filter(s => s.weights);

  const microcopy =
    active.size === 1
      ? PERSONAS.find(p => p.id === [...active][0])?.microcopy ?? null
      : null;

  if (active.size === 0) {
    return {
      intro,
      microcopy: null,
      sekce: scored.map(s => ({
        sekce: s, score: 0, visiblePoints: s.points, hiddenPoints: [], collapsed: false,
      })),
    };
  }

  const ranked = scored
    .map((s, i) => ({ s, i, score: scoreFor(s.weights, active) }))
    .sort((a, b) => b.score - a.score || a.i - b.i);

  const sekce: SekceView[] = ranked.map(({ s, score }) => {
    const sortedPoints = s.points
      .map((p, i) => ({ p, i, score: scoreFor(p.weights, active) }))
      .sort((a, b) => b.score - a.score || a.i - b.i)
      .map(x => x.p);

    const collapsed = score === 0;
    return {
      sekce: s,
      score,
      collapsed,
      visiblePoints: collapsed ? [] : sortedPoints.slice(0, 3),
      hiddenPoints: collapsed ? sortedPoints : sortedPoints.slice(3),
    };
  });

  return { intro, sekce, microcopy };
}
