import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  service: z.enum(["cleaning", "construction", "landscaping", "other"]),
  revenue: z.enum(["starting", "growing", "scaling", "established"]),
  bottleneck: z.enum(["leads", "quality", "chaos", "brand"]),
  ads: z.enum(["never", "failed", "scaling"]),
  investment: z.enum(["ready", "researching"]),
});

export default function SDRForm() {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isQualified, setIsQualified] = useState<boolean | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API delay & Logic
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Qualification Logic
      if (values.revenue === "starting" && values.investment === "researching") {
        setIsQualified(false); // Lead Frio
      } else {
        setIsQualified(true); // Lead Qualificado
      }
      setStep(5); // Show Result
    }, 1500);
  }

  const nextStep = async () => {
    const fields = Object.keys(formSchema.shape) as Array<keyof z.infer<typeof formSchema>>;
    const currentField = fields[step];
    
    const isValid = await form.trigger(currentField);
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <section id="sdr-form" className="py-24 relative" style={{ backgroundColor: '#fafefb' }}>
      <div className="container max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ color: '#000000' }}>
              <span style={{ fontWeight: '300' }}>Ready to Scale?</span> <span style={{ color: '#00FF94', fontWeight: '700' }}>Let's Talk.</span>
            </h2>
            <p className="text-lg" style={{ color: '#666666' }}>
              Book a free 30-minute Growth Analysis. To ensure we can deliver results, we only partner with businesses ready to grow.
            </p>
          </div>

          <Card className="shadow-2xl overflow-hidden" style={{ backgroundColor: '#ffffff', border: 'none' }}>
          <div className="h-1 w-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            <motion.div 
              className="h-full"
              style={{ backgroundColor: '#00FF94' }}
              initial={{ width: "0%" }}
              animate={{ width: `${((step + 1) / 6) * 100}%` }}
            />
          </div>
          
          <CardHeader>
            <CardTitle className="text-center text-xl font-light" style={{ color: '#000000' }}>
              {step < 5 ? `Step ${step + 1} of 5` : "Analysis Complete"}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-6 md:p-12 min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step === 5 ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  {isQualified ? (
                    <>
                      <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-success/20">
                        <CheckCircle2 className="w-10 h-10 text-success" />
                      </div>
                      <h3 className="text-2xl font-bold text-success">You're a Match!</h3>
                      <p className="max-w-md mx-auto" style={{ color: '#666666' }}>
                        Based on your answers, your business is perfectly positioned for our Growth Ecosystem. Let's build your roadmap.
                      </p>
                      <Button 
                        size="lg" 
                        className="w-full md:w-auto text-lg px-8 py-6 mt-4 hover:bg-success/90" 
                        style={{ backgroundColor: '#00FF94', color: '#000000' }}
                        onClick={() => window.open('https://calendar.app.google/Xhfs1J8yTwp5tBsK8', '_blank')}
                      >
                        Select a Time on Calendar
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="w-20 h-20 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Loader2 className="w-10 h-10 text-destructive" />
                      </div>
                      <h3 className="text-2xl font-bold text-destructive">Not quite ready for the Agency...</h3>
                      <p className="max-w-md mx-auto" style={{ color: '#666666' }}>
                        Our agency services are optimized for businesses at a different stage. However, you can start organizing your operations today with our software.
                      </p>
                      <Button size="lg" variant="outline" className="w-full md:w-auto text-lg px-8 py-6 mt-4 border-destructive text-destructive hover:bg-destructive/10">
                        Get CleanOps for $39/mo
                      </Button>
                    </>
                  )}
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step === 0 && (
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem className="space-y-6">
                              <FormLabel className="text-2xl md:text-3xl font-bold text-center block mb-8" style={{ color: '#000000' }}>
                                What is your primary service?
                              </FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={(val) => { field.onChange(val); nextStep(); }}
                                  defaultValue={field.value}
                                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                >
                                  {[
                                    { val: "cleaning", label: "Residential/Commercial Cleaning" },
                                    { val: "construction", label: "Construction/Remodeling" },
                                    { val: "landscaping", label: "Landscaping" },
                                    { val: "other", label: "Other" }
                                  ].map((opt) => (
                                    <FormItem key={opt.val}>
                                      <FormControl>
                                        <RadioGroupItem value={opt.val} className="peer sr-only" />
                                      </FormControl>
                                      <FormLabel className="flex items-center justify-center p-6 rounded-2xl cursor-pointer transition-all duration-300 font-medium text-lg h-full text-center text-black bg-[rgba(0,255,148,0.12)] border-2 border-transparent peer-data-[state=checked]:border-[#00FF94] peer-data-[state=checked]:bg-[rgba(0,255,148,0.15)] peer-data-[state=checked]:text-[#00FF94] hover:bg-[rgba(0,255,148,0.2)] hover:border-[rgba(0,255,148,0.4)] hover:scale-[1.02] hover:shadow-sm">
                                        {opt.label}
                                      </FormLabel>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                      {step === 1 && (
                        <FormField
                          control={form.control}
                          name="revenue"
                          render={({ field }) => (
                            <FormItem className="space-y-6">
                              <FormLabel className="text-2xl md:text-3xl font-bold text-center block mb-8" style={{ color: '#000000' }}>
                                What is your current monthly revenue?
                              </FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={(val) => { field.onChange(val); nextStep(); }}
                                  defaultValue={field.value}
                                  className="grid grid-cols-1 gap-4"
                                >
                                  {[
                                    { val: "starting", label: "Just starting ($0 - $5k)" },
                                    { val: "growing", label: "Growing ($5k - $20k)" },
                                    { val: "scaling", label: "Scaling ($20k - $50k)" },
                                    { val: "established", label: "Established ($50k+)" }
                                  ].map((opt) => (
                                    <FormItem key={opt.val}>
                                      <FormControl>
                                        <RadioGroupItem value={opt.val} className="peer sr-only" />
                                      </FormControl>
                                      <FormLabel className="flex items-center p-6 rounded-2xl cursor-pointer transition-all duration-300 font-medium text-lg text-black bg-[rgba(0,255,148,0.12)] border-2 border-transparent peer-data-[state=checked]:border-[#00FF94] peer-data-[state=checked]:bg-[rgba(0,255,148,0.15)] peer-data-[state=checked]:text-[#00FF94] hover:bg-[rgba(0,255,148,0.2)] hover:border-[rgba(0,255,148,0.4)] hover:scale-[1.02] hover:shadow-sm">
                                        {opt.label}
                                      </FormLabel>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                      {step === 2 && (
                        <FormField
                          control={form.control}
                          name="bottleneck"
                          render={({ field }) => (
                            <FormItem className="space-y-6">
                              <FormLabel className="text-2xl md:text-3xl font-bold text-center block mb-8" style={{ color: '#000000' }}>
                                What is your biggest bottleneck right now?
                              </FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={(val) => { field.onChange(val); nextStep(); }}
                                  defaultValue={field.value}
                                  className="grid grid-cols-1 gap-4"
                                >
                                  {[
                                    { val: "leads", label: "Not enough leads" },
                                    { val: "quality", label: "Leads are low quality / price shoppers" },
                                    { val: "chaos", label: "Too busy / Operational chaos" },
                                    { val: "brand", label: "Need a better website/brand" }
                                  ].map((opt) => (
                                    <FormItem key={opt.val}>
                                      <FormControl>
                                        <RadioGroupItem value={opt.val} className="peer sr-only" />
                                      </FormControl>
                                      <FormLabel className="flex items-center p-6 rounded-2xl cursor-pointer transition-all duration-300 font-medium text-lg text-black bg-[rgba(0,255,148,0.12)] border-2 border-transparent peer-data-[state=checked]:border-[#00FF94] peer-data-[state=checked]:bg-[rgba(0,255,148,0.15)] peer-data-[state=checked]:text-[#00FF94] hover:bg-[rgba(0,255,148,0.2)] hover:border-[rgba(0,255,148,0.4)] hover:scale-[1.02] hover:shadow-sm">
                                        {opt.label}
                                      </FormLabel>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                      {step === 3 && (
                        <FormField
                          control={form.control}
                          name="ads"
                          render={({ field }) => (
                            <FormItem className="space-y-6">
                              <FormLabel className="text-2xl md:text-3xl font-bold text-center block mb-8" style={{ color: '#000000' }}>
                                Are you currently running any paid advertising?
                              </FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={(val) => { field.onChange(val); nextStep(); }}
                                  defaultValue={field.value}
                                  className="grid grid-cols-1 gap-4"
                                >
                                  {[
                                    { val: "never", label: "No, never." },
                                    { val: "failed", label: "Yes, but it's not working." },
                                    { val: "scaling", label: "Yes, and it's going well (I want to scale)." }
                                  ].map((opt) => (
                                    <FormItem key={opt.val}>
                                      <FormControl>
                                        <RadioGroupItem value={opt.val} className="peer sr-only" />
                                      </FormControl>
                                      <FormLabel className="flex items-center p-6 rounded-2xl cursor-pointer transition-all duration-300 font-medium text-lg text-black bg-[rgba(0,255,148,0.12)] border-2 border-transparent peer-data-[state=checked]:border-[#00FF94] peer-data-[state=checked]:bg-[rgba(0,255,148,0.15)] peer-data-[state=checked]:text-[#00FF94] hover:bg-[rgba(0,255,148,0.2)] hover:border-[rgba(0,255,148,0.4)] hover:scale-[1.02] hover:shadow-sm">
                                        {opt.label}
                                      </FormLabel>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                      {step === 4 && (
                        <FormField
                          control={form.control}
                          name="investment"
                          render={({ field }) => (
                            <FormItem className="space-y-6">
                              <FormLabel className="text-2xl md:text-3xl font-bold text-center block mb-8" style={{ color: '#000000' }}>
                                If we find a roadmap to double your leads, are you ready to invest in your growth this month?
                              </FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={(val) => { field.onChange(val); form.handleSubmit(onSubmit)(); }}
                                  defaultValue={field.value}
                                  className="grid grid-cols-1 gap-4"
                                >
                                  {[
                                    { val: "ready", label: "Yes, I'm ready to invest." },
                                    { val: "researching", label: "I'm just researching for the future." }
                                  ].map((opt) => (
                                    <FormItem key={opt.val}>
                                      <FormControl>
                                        <RadioGroupItem value={opt.val} className="peer sr-only" />
                                      </FormControl>
                                      <FormLabel className="flex items-center p-6 rounded-2xl cursor-pointer transition-all duration-300 font-medium text-lg text-black bg-[rgba(0,255,148,0.12)] border-2 border-transparent peer-data-[state=checked]:border-[#00FF94] peer-data-[state=checked]:bg-[rgba(0,255,148,0.15)] peer-data-[state=checked]:text-[#00FF94] hover:bg-[rgba(0,255,148,0.2)] hover:border-[rgba(0,255,148,0.4)] hover:scale-[1.02] hover:shadow-sm">
                                        {isSubmitting && field.value === opt.val ? (
                                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        ) : null}
                                        {opt.label}
                                      </FormLabel>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </motion.div>
                  </form>
                </Form>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
        </div>
      </div>
    </section>
  );
}
