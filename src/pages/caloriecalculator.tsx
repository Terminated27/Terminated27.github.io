import React, { useState } from 'react';
import { THEME } from '../theme';

const CalorieCalculator = () => {
  const [units, setUnits] = useState<'metric' | 'imperial'>('imperial');
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    sex: 'male',
  });

  const [result, setResult] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalculate = () => {
    let w = parseFloat(formData.weight);
    let h = parseFloat(formData.height);
    const a = parseInt(formData.age);
    const s = formData.sex;

    if (isNaN(w) || isNaN(h) || isNaN(a)) {
      alert("Please fill in all fields.");
      return;
    }

    if (units === 'imperial') {
      w = w * 0.453592;
      h = h * 2.54;
    }

    let bmr = 10 * w + 6.25 * h - 5 * a;
    bmr = s === 'male' ? bmr + 5 : bmr - 161;

    setResult(Math.round(bmr));
  };

  return (
    <div className={`min-h-screen ${THEME.base} ${THEME.primary} p-4 md:p-24 flex justify-center items-start selection:bg-app-accent/30`}>
      <div className={`w-full max-w-4xl ${THEME.surface} border ${THEME.border} rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row backdrop-blur-md`}>
        
        {/* LEFT SIDE: INPUTS */}
        <div className="flex-1 p-8 md:p-12 space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-black tracking-tighter mb-1">
                Calorie Calculator<span className={THEME.accent}>.</span>
              </h2>
              <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${THEME.secondary} opacity-60`}>
                BMR & Targets
              </p>
            </div>

            <div className={`flex p-1 bg-app-accent/10 rounded-xl border ${THEME.border}`}>
              <button onClick={() => setUnits('imperial')} className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all ${units === 'imperial' ? 'bg-app-accent text-white' : THEME.secondary}`}>Imperial</button>
              <button onClick={() => setUnits('metric')} className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all ${units === 'metric' ? 'bg-app-accent text-white' : THEME.secondary}`}>Metric</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className={`text-[10px] font-bold uppercase tracking-widest ${THEME.secondary}`}>Weight ({units === 'metric' ? 'kg' : 'lbs'})</label>
              <input name="weight" type="number" value={formData.weight} onChange={handleChange} placeholder={units === 'metric' ? "70" : "155"} className={`w-full bg-app-accent/5 border ${THEME.border} rounded-xl px-4 py-3 outline-none focus:border-app-accent transition-all font-mono`} />
            </div>
            <div className="space-y-2">
              <label className={`text-[10px] font-bold uppercase tracking-widest ${THEME.secondary}`}>Height ({units === 'metric' ? 'cm' : 'inches'})</label>
              <input name="height" type="number" value={formData.height} onChange={handleChange} placeholder={units === 'metric' ? "175" : "68"} className={`w-full bg-app-accent/5 border ${THEME.border} rounded-xl px-4 py-3 outline-none focus:border-app-accent transition-all font-mono`} />
            </div>
            <div className="space-y-2">
              <label className={`text-[10px] font-bold uppercase tracking-widest ${THEME.secondary}`}>Age (years)</label>
              <input name="age" type="number" value={formData.age} onChange={handleChange} placeholder="25" className={`w-full bg-app-accent/5 border ${THEME.border} rounded-xl px-4 py-3 outline-none focus:border-app-accent transition-all font-mono`} />
            </div>
            <div className="space-y-2">
              <label className={`text-[10px] font-bold uppercase tracking-widest ${THEME.secondary}`}>Biological Sex</label>
              <div className={`flex p-1 bg-app-accent/10 rounded-xl border ${THEME.border} w-full`}>
                <button onClick={() => setFormData(p => ({ ...p, sex: 'male' }))} className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${formData.sex === 'male' ? 'bg-app-accent text-white' : THEME.secondary}`}>Male</button>
                <button onClick={() => setFormData(p => ({ ...p, sex: 'female' }))} className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${formData.sex === 'female' ? 'bg-app-accent text-white' : THEME.secondary}`}>Female</button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: RESULTS & TARGETS */}
        <div className={`w-full md:w-96 bg-app-accent/5 border-l ${THEME.border} p-8 md:p-10 flex flex-col justify-between`}>
          <div className="space-y-8">
            {/* BASE BMR */}
            <div className="space-y-2">
              <h3 className={`text-[10px] font-bold uppercase tracking-widest ${THEME.secondary} opacity-60`}>Base BMR</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tighter">{result ?? '0'}</span>
                <span className={`text-xs font-bold uppercase tracking-widest ${THEME.secondary}`}>kcal</span>
              </div>
            </div>

            {/* WEIGHT TARGETS SECTION */}
            <div className="space-y-4 pt-6 border-t border-app-accent/10">
              <h3 className={`text-[10px] font-bold uppercase tracking-widest ${THEME.secondary} opacity-60`}>Personal Targets</h3>
              
              {/* LOSS TARGET */}
              <div className={`p-4 rounded-2xl bg-red-500/5 border border-red-500/10`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500/80">Weight Loss</span>
                  <span className="text-[10px] opacity-60">-1.0 lbs/wk</span>
                </div>
                <div className="text-xl font-black">{result ? result - 500 : 0} <span className="text-[10px] font-normal opacity-60 uppercase">kcal/day</span></div>
              </div>

              {/* GAIN TARGET */}
              <div className={`p-4 rounded-2xl bg-green-500/5 border border-green-500/10`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-green-500/80">Weight Gain</span>
                  <span className="text-[10px] opacity-60">+0.75 lbs/wk</span>
                </div>
                <div className="text-xl font-black">{result ? Math.round(result + (500 * 0.75)) : 0} <span className="text-[10px] font-normal opacity-60 uppercase">kcal/day</span></div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-10">
            <button onClick={handleCalculate} className={`group relative px-8 py-4 bg-app-accent text-white font-bold rounded-2xl shadow-xl shadow-app-accent/20 hover:scale-[1.02] active:scale-95 transition-all overflow-hidden`}>
              <span className="relative z-10 text-[10px] tracking-[0.2em] uppercase">Calculate</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CalorieCalculator;