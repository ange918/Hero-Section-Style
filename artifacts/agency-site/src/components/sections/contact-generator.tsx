import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 'goal',
    question: "Quel est l'objectif principal ?",
    options: [
      { id: 'product', label: 'Produit digital', desc: 'Une application web ou mobile sur-mesure' },
      { id: 'platform', label: 'Plateforme métier', desc: 'SaaS ou outil de gestion interne' },
      { id: 'web', label: 'Site vitrine', desc: 'Un site marketing ou portfolio percutant' },
      { id: 'audit', label: 'Audit & Digitalisation', desc: 'Automatiser et moderniser vos processus' }
    ]
  },
  {
    id: 'budget',
    question: "Quelle est votre enveloppe budgétaire ?",
    options: [
      { id: '10k', label: '10 k€ - 25 k€', desc: 'Amorçage & MVP' },
      { id: '25k', label: '25 k€ - 50 k€', desc: 'Croissance & montée en charge' },
      { id: '50k', label: '50 k€ - 100 k€', desc: 'Entreprises établies' },
      { id: '100k+', label: '100 k€+', desc: 'Grands comptes & envergure internationale' }
    ]
  },
  {
    id: 'timeline',
    question: "Dans quels délais ?",
    options: [
      { id: 'asap', label: 'Urgent', desc: 'Sous 1 à 2 mois' },
      { id: 'standard', label: 'Standard', desc: '3 à 4 mois' },
      { id: 'flexible', label: 'Flexible', desc: 'Pas d\'échéance stricte' }
    ]
  }
];

export function ContactGenerator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSelect = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [steps[currentStep].id]: optionId }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Simulate submission
    setTimeout(() => setIsSubmitted(true), 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl heading-wavy uppercase tracking-tight mb-4"
          >
            Démarrer un <span className="text-primary">Projet</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Oubliez les formulaires génériques. Construisez votre brief en 30 secondes.
          </motion.p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Progress bar */}
          {!isSubmitted && (
            <div className="absolute top-0 left-0 w-full h-1 bg-muted">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              currentStep < steps.length ? (
                <motion.div
                  key={`step-${currentStep}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl heading-wavy mb-8">
                    {steps[currentStep].question}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {steps[currentStep].options.map(option => {
                      const isSelected = answers[steps[currentStep].id] === option.id;
                      return (
                        <button
                          key={option.id}
                          onClick={() => handleSelect(option.id)}
                          className={`text-left p-6 rounded-2xl border transition-all duration-200 ${
                            isSelected 
                              ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(168,155,217,0.2)]' 
                              : 'border-border bg-card/50 hover:border-primary/50 hover:bg-card'
                          }`}
                        >
                          <div className="font-bold text-lg mb-2">{option.label}</div>
                          <div className="text-sm text-muted-foreground">{option.desc}</div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between">
                    <Button 
                      variant="ghost" 
                      onClick={handlePrev} 
                      disabled={currentStep === 0}
                      className={currentStep === 0 ? 'opacity-0' : ''}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> Retour
                    </Button>

                    <Button
                      size="lg"
                      onClick={handleNext}
                      disabled={!answers[steps[currentStep].id]}
                      className="rounded-full px-8"
                    >
                      Étape suivante <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="final-step"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center mb-10">
                    <h3 className="text-3xl heading-wavy mb-4">Brief généré.</h3>
                    <p className="text-muted-foreground">Vérifiez votre brief et indiquez-nous où envoyer la proposition.</p>
                  </div>

                  <div className="bg-background/50 border border-border rounded-2xl p-6 mb-10 max-w-2xl mx-auto space-y-4">
                    <div className="flex justify-between items-center border-b border-border pb-4">
                      <span className="text-muted-foreground">Objectif</span>
                      <span className="font-bold">{steps[0].options.find(o => o.id === answers.goal)?.label}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-4">
                      <span className="text-muted-foreground">Budget</span>
                      <span className="font-bold">{steps[1].options.find(o => o.id === answers.budget)?.label}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-muted-foreground">Délai</span>
                      <span className="font-bold">{steps[2].options.find(o => o.id === answers.timeline)?.label}</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      required
                      placeholder="Entrez votre e-mail professionnel"
                      className="flex-1 bg-background border border-border rounded-full px-6 h-12 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <Button type="submit" size="lg" className="rounded-full h-12 px-8 shrink-0">
                      Envoyer le brief
                    </Button>
                  </form>
                  <div className="text-center mt-6">
                     <Button variant="ghost" onClick={handlePrev}>
                        <ArrowLeft className="w-4 h-4 mr-2" /> Modifier mes réponses
                     </Button>
                  </div>
                </motion.div>
              )
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl heading-wavy mb-4">Brief bien reçu.</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Votre brief est entre nos mains. Notre équipe l'étudie et vous recontacte à {email} sous 24 heures.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
