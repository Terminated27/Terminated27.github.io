export interface Exercise {
  id: string;
  name: string;
  pattern: 'Squat' | 'Hinge' | 'Push' | 'Pull' | 'Carry' | 'Lunge';
  level: string;
  cues: string[];
  substitute: string;
}