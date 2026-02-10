import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RegistrationForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        institution: '',
        level: 'student'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2); // Show success state
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            <AnimatePresence mode="wait">
                {step === 1 ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60"
                    >
                        <div className="space-y-8">
                            <div className="text-center space-y-2">
                                <h3 className="text-3xl font-bold text-feciit-dark tracking-tight">Registro de Boletos</h3>
                                <p className="text-gray-500">Completa tus datos para recibir tu acceso.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Nombre Completo</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-feciit-blue focus:ring-4 focus:ring-feciit-blue/10 transition-all outline-none"
                                        placeholder="Tu nombre completo"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Correo Electrónico</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-feciit-blue focus:ring-4 focus:ring-feciit-blue/10 transition-all outline-none"
                                        placeholder="ejemplo@correo.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Institución</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-feciit-blue focus:ring-4 focus:ring-feciit-blue/10 transition-all outline-none"
                                        placeholder="Nombre de tu escuela o empresa"
                                        value={formData.institution}
                                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, level: 'student' })}
                                        className={`py-4 rounded-2xl font-bold transition-all border ${formData.level === 'student' ? 'bg-feciit-blue text-white border-feciit-blue' : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50'}`}
                                    >
                                        Estudiante
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, level: 'professional' })}
                                        className={`py-4 rounded-2xl font-bold transition-all border ${formData.level === 'professional' ? 'bg-feciit-blue text-white border-feciit-blue' : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50'}`}
                                    >
                                        Profesional
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-feciit-dark text-white rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                                >
                                    Generar Boleto
                                </button>
                            </form>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/90 backdrop-blur-xl p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60 text-center space-y-8"
                    >
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-4xl">
                            ✓
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold text-feciit-dark">¡Registro Exitoso!</h3>
                            <p className="text-gray-500">Tu boleto ha sido generado y enviado a <strong>{formData.email}</strong></p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-left">
                            <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Resumen de Acceso</p>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-bold text-lg text-feciit-dark">{formData.name}</p>
                                    <p className="text-sm text-gray-500">{formData.institution}</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-xs font-bold text-feciit-blue uppercase">3 de Marzo</p>
                                    <p class="text-xl font-mono font-bold text-feciit-dark">#FECIIT-26-001</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => window.print()}
                            className="w-full py-4 bg-feciit-blue text-white rounded-2xl font-bold text-lg hover:bg-[#0658a1] transition-all"
                        >
                            Descargar PDF
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default RegistrationForm;
