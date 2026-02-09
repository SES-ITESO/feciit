import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const stats = [
        { label: 'Proyectos', value: '124', change: '+12%', color: 'from-blue-500 to-blue-600' },
        { label: 'Participantes', value: '432', change: '+18%', color: 'from-purple-500 to-purple-600' },
        { label: 'Boletos', value: '1,204', change: '+25%', color: 'from-emerald-500 to-emerald-600' },
        { label: 'Workshops', value: '12', change: '0%', color: 'from-amber-500 to-amber-600' },
    ];

    const submissions = [
        { id: 'PRJ-001', title: 'Solar Tracking System', leader: 'Ana Ruiz', category: 'Ingeniería', status: 'Approved' },
        { id: 'PRJ-002', title: 'Biodegradable Plastic', leader: 'Marcos Gil', category: 'Química', status: 'Pending' },
        { id: 'PRJ-003', title: 'AI for Crop Analysis', leader: 'Sofía Lara', category: 'Tecnología', status: 'Revision' },
        { id: 'PRJ-004', title: 'Smart Grid Prototype', leader: 'Luis Paez', category: 'Ingeniería', status: 'Approved' },
    ];

    return (
        <div className="flex min-h-[800px] bg-slate-50/50 rounded-[3rem] overflow-hidden border border-white/60 shadow-2xl backdrop-blur-xl">
            {/* Sidebar */}
            <aside className="w-64 bg-white/40 border-r border-white/60 p-8 flex flex-col gap-8">
                <div className="flex items-center gap-3 px-2">
                    <div className="w-8 h-8 bg-feciit-dark rounded-lg flex items-center justify-center text-white font-bold">F</div>
                    <span className="font-bold text-feciit-dark tracking-tighter text-xl">AdminPortal</span>
                </div>

                <nav className="flex flex-col gap-2">
                    {['overview', 'submissions', 'users', 'workshops', 'settings'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-3 rounded-2xl text-left text-sm font-bold capitalize transition-all ${activeTab === tab ? 'bg-feciit-dark text-white shadow-lg' : 'text-gray-400 hover:bg-white/60'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>

                <div className="mt-auto p-4 bg-feciit-blue/5 rounded-3xl border border-feciit-blue/10">
                    <p className="text-[10px] font-bold text-feciit-blue uppercase tracking-widest mb-1">System Status</p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-bold text-feciit-dark">Online</span>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10 overflow-y-auto">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-feciit-dark capitalize">{activeTab}</h2>
                        <p className="text-gray-500">Gestión de datos en tiempo real.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-2 bg-white rounded-full text-sm font-bold text-feciit-dark border border-white/60 shadow-sm hover:shadow-md transition-all">Exportar CSV</button>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 border-2 border-white"></div>
                    </div>
                </header>

                <div className="space-y-10">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-stats gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-[2rem] border border-white/60 shadow-sm"
                            >
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                                <div className="flex items-end gap-3">
                                    <span className="text-4xl font-bold text-feciit-dark">{stat.value}</span>
                                    <span className={`text-xs font-bold mb-1 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-gray-400'}`}>{stat.change}</span>
                                </div>
                                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${stat.color} mt-4`}></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Table Card */}
                    <div className="bg-white rounded-[2.5rem] border border-white/60 shadow-sm overflow-hidden">
                        <div className="p-8 border-b border-gray-50 flex justify-between items-center">
                            <h4 className="font-bold text-feciit-dark text-xl">Submission Queue</h4>
                            <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100">Live Updates</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                                    <tr>
                                        <th className="px-8 py-4">Project ID</th>
                                        <th className="px-8 py-4">Title</th>
                                        <th className="px-8 py-4">Category</th>
                                        <th className="px-8 py-4">Leader</th>
                                        <th className="px-8 py-4 text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {submissions.map(sub => (
                                        <tr key={sub.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-8 py-5 text-sm font-mono font-bold text-gray-400">{sub.id}</td>
                                            <td className="px-8 py-5 font-bold text-feciit-dark group-hover:text-feciit-blue transition-colors">{sub.title}</td>
                                            <td className="px-8 py-5 text-sm text-gray-500">{sub.category}</td>
                                            <td className="px-8 py-5 text-sm text-gray-600 font-medium">{sub.leader}</td>
                                            <td className="px-8 py-5">
                                                <div className={`mx-auto w-fit px-4 py-1.5 rounded-full text-[10px] font-bold uppercase transition-all
                                                    ${sub.status === 'Approved' ? 'bg-green-50 text-green-600 border border-green-100' :
                                                        sub.status === 'Pending' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                                                            'bg-purple-50 text-purple-600 border border-purple-100'}`}
                                                >
                                                    {sub.status}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-6 bg-slate-50/50 text-center">
                            <button className="text-sm font-bold text-feciit-blue hover:text-[#0658a1] transition-colors">Ver todas las propuestas →</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
