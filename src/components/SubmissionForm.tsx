import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SubmissionForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        category: 'Ingeniería',
        description: '',
        teamSize: 1,
        teamLeader: '',
        abstract: null
    });

    const categories = ["Ingeniería", "Ciencias de la Salud", "Ciencias Exactas", "Tecnología", "Sociales"];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
                {step === 1 ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="text-center space-y-2 mb-8">
                                <h3 className="text-3xl font-bold text-feciit-dark tracking-tight">Registro de Proyecto</h3>
                                <p className="text-gray-500 text-sm italic">Completa la información técnica de tu investigación.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-feciit-dark/70 uppercase tracking-wider ml-1">Título del Proyecto</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none"
                                        placeholder="Ej. Sistema de monitoreo de calidad de aire"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-feciit-dark/70 uppercase tracking-wider ml-1">Categoría</label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                        {categories.map(cat => (
                                            <button
                                                key={cat}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, category: cat })}
                                                className={`px-4 py-3 rounded-xl text-xs font-bold transition-all border ${formData.category === cat ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-gray-400 border-gray-100 hover:bg-gray-50'}`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-feciit-dark/70 uppercase tracking-wider ml-1">Descripción corta (Abstract)</label>
                                    <textarea
                                        required
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none min-h-[120px] resize-none"
                                        placeholder="Describe el objetivo y metodología de tu proyecto..."
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-feciit-dark/70 uppercase tracking-wider ml-1">Líder de Equipo</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none"
                                            placeholder="Tu nombre"
                                            value={formData.teamLeader}
                                            onChange={(e) => setFormData({ ...formData, teamLeader: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-feciit-dark/70 uppercase tracking-wider ml-1">Miembros (Max 5)</label>
                                        <select
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none appearance-none"
                                            value={formData.teamSize}
                                            onChange={(e) => setFormData({ ...formData, teamSize: parseInt(e.target.value) })}
                                        >
                                            {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} integrante(s)</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_20px_40px_-10px_rgba(147,51,234,0.3)] transition-all hover:scale-[1.02] active:scale-95"
                            >
                                Enviar para Revisión
                            </button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/95 backdrop-blur-xl p-12 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-white/60 text-center space-y-8"
                    >
                        <div className="w-24 h-24 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto text-5xl">
                            🚀
                        </div>
                        <div className="space-y-3">
                            <span className="text-purple-600 font-bold uppercase tracking-widest text-xs">Fase de Recepción</span>
                            <h3 className="text-4xl font-bold text-feciit-dark tracking-tighter">¡Proyecto Recibido!</h3>
                            <p className="text-gray-500 max-w-sm mx-auto">Tu propuesta ha sido cargada exitosamente. El comité evaluador revisará la información y notificará al líder en las próximas 48 horas.</p>
                        </div>

                        <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 text-left space-y-4">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">ID de Seguimiento</span>
                                <span className="text-sm font-mono font-bold text-feciit-dark">PRJ-2026-X8B2</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Proyecto</p>
                                <p className="font-bold text-feciit-dark">{formData.title}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Estatus</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                                    <span className="text-sm font-bold text-amber-600 italic">En Revisión Técnica</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex-1 py-4 bg-feciit-dark text-white rounded-2xl font-bold hover:bg-black transition-colors">
                                Dashboard
                            </button>
                            <button className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-colors">
                                Imprimir Resumen
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SubmissionForm;
