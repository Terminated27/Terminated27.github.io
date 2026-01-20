import React from 'react';
import { THEME } from '../theme';

const SplitBuilder = () => {
  return (
    <div className={`min-h-screen ${THEME.base} ${THEME.primary} p-4 md:p-24 flex justify-center items-center selection:bg-app-accent/30`}>
      
      {/* THE BOUNDING BOX */}
      <div className={`w-full max-w-3xl ${THEME.surface} border ${THEME.border} rounded-3xl shadow-2xl overflow-hidden backdrop-blur-md p-12 text-center`}>
        
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
            Split Builder<span className={THEME.accent}>.</span>
          </h2>
          <div className={`h-[1px] w-24 mx-auto ${THEME.divider} opacity-30`} />
        </div>

        {/* IMAGE SLOT */}
        <div className="relative mb-12 group">
          {/* Subtle glow behind the image */}
          <div className="absolute inset-0 bg-app-accent/10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
          
          <div className="relative border border-app-accent/10 rounded-2xl overflow-hidden bg-white/5 aspect-video flex items-center justify-center">
            {/* REPLACE THE SRC BELOW WITH YOUR IMAGE */}
            <img 
              src="https://www.shutterstock.com/image-photo/picture-brown-white-dog-wearing-600nw-2377073887.jpg" 
              alt="Under Construction" 
              className="w-full h-full object-cover opacity-80 animate-pulse-slow"
            />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="max-w-md mx-auto space-y-6">
          <p className={`text-lg leading-relaxed ${THEME.secondary} opacity-80 font-medium`}>
            I'm currently working on this with my gigantic brain.
          </p>
          
          <div className={`bg-app-accent/5 border-l-2 border-app-accent p-6 rounded-r-xl text-left`}>
            <p className="text-xs uppercase tracking-[0.2em] font-bold mb-2 opacity-60">Status Report:</p>
            <p className="text-sm italic opacity-80">
              Our digital interface is currently undergoing a mandatory systemic recalibration to accommodate the integration of a proprietary Biokinetic-Algorithmic Neural Architecture. We are moving beyond legacy fitness modalities to pioneer a Non-Linear Myofascial Optimization Protocol that leverages stochastic calculus to determine the precise metabolic debt-to-recovery ratio of the human musculoskeletal chassis. By synthesizing Multivariate Kinetic Flux Modulation with Proprioceptive Data-Clustering Algorithms, we are re-engineering the very core of human performance logistics. This phase of development requires the synchronization of Bio-Viscoelastic Stress-Strain Tensors with our backend Heuristic Volume-Distribution Engines to ensure that every pixel of the upcoming interface reflects a high-fidelity mapping of ATP-Phosphocreatine Substrate Depletion Curves. We are currently troubleshooting the Asymptotic Hypertrophic Signaling Feed to prevent systemic neural-drive degradation within our user-facing telemetry dashboards. Essentially, we are deconstructing the Biomechanical Equilibrium of Sarcoplasmic Fluidity through a recursive Morphological-Unit Recruitment Matrix to ensure that when our platform achieves full operational status, it provides an unparalleled Neuro-Endocrine Feedback Loop for total phenotypic optimization. We apologize for the latency; we are simply ensuring that our Viscosity-Regulated Articulation Sub-Routines are fully harmonized with the Oscillatory Tension-Loading Paradigms before deployment.</p>
          </div>

          {/* BACK BUTTON */}
          <button 
            onClick={() => window.history.back()}
            className={`mt-8 px-8 py-3 rounded-xl border ${THEME.border} ${THEME.secondary} text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-app-accent hover:text-white hover:border-app-accent transition-all duration-300`}
          >
            ← Return to Landing Page
          </button>
        </div>

      </div>
    </div>
  );
};

export default SplitBuilder;