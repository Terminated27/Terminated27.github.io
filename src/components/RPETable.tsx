import { THEME } from '../theme';
import { RPE_SCALE } from '../data/RPEtable';

const RPETable = () => {
  return (
    <div className={`my-8 overflow-hidden rounded-app-card border ${THEME.border} ${THEME.surface}`}>
      {/* Table Header */}
      <div className={`grid grid-cols-2 border-b ${THEME.border} bg-app-accent/10 p-4`}>
        <span className={`text-xs font-bold uppercase tracking-widest ${THEME.accent}`}>RPE</span>
        <span className={`text-xs font-bold uppercase tracking-widest ${THEME.accent}`}>Description</span>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-app-accent/10">
        {RPE_SCALE.map((item, index) => (
          <div key={index} className={`grid grid-cols-2 p-4 transition-colors hover:bg-app-accent/5`}>
            <span className="font-mono font-bold text-app-primary">{item.level}</span>
            <span className={`${THEME.secondary} text-sm`}>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RPETable;