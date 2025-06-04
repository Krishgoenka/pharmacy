
'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import type { DateDisabledMatcher } from 'react-day-picker';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { CalendarDays, Clock } from 'lucide-react'

const availableTimeSlots = [
  "09:00 AM - 09:30 AM",
  "09:30 AM - 10:00 AM",
  "10:00 AM - 10:30 AM",
  "10:30 AM - 11:00 AM",
  "03:00 PM - 03:30 PM",
  "03:30 PM - 04:00 PM",
  "04:00 PM - 04:30 PM",
  "04:30 PM - 05:00 PM",
]

export function ConsultationBookingSection() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState<string | undefined>()
  const [disabledDays, setDisabledDays] = useState<DateDisabledMatcher | DateDisabledMatcher[] | undefined>(undefined);
  const { toast } = useToast()

  useEffect(() => {
    // Set initial selected date to today
    setSelectedDate(new Date());

    // Disable dates before today
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ensure comparison is based on the start of the day
    setDisabledDays({ before: today });
  }, []);

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Booking Incomplete",
        description: "Please select a date and time for your consultation.",
        variant: "destructive",
      })
      return;
    }
    // Mock booking
    toast({
      title: "Consultation Booked (Mock)",
      description: `Your appointment is scheduled for ${selectedDate.toLocaleDateString()} at ${selectedTime}.`,
    })
  }

  return (
    <section id="book-consultation" className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-10 animate-slide-in-up">Book a Doctor Consultation</h2>
        <Card className="max-w-2xl mx-auto shadow-xl animate-slide-in-up [animation-delay:0.2s]">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
              <CalendarDays className="text-primary" /> Schedule Your Appointment
            </CardTitle>
            <CardDescription>
              Choose a convenient date and time to consult with one of our specialists.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-auto flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                  disabled={disabledDays}
                />
              </div>
              <div className="space-y-4 flex-1 w-full">
                <div>
                  <label htmlFor="time-slot" className="block text-sm font-medium text-foreground mb-1">
                    Select Time Slot
                  </label>
                  <Select onValueChange={setSelectedTime} value={selectedTime}>
                    <SelectTrigger id="time-slot" className="w-full">
                      <SelectValue placeholder="Choose a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableTimeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                 <Button onClick={handleBooking} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book Appointment
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              This is a mock booking system. For actual appointments, please call us or visit the pharmacy.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
