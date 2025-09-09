import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { Select,MenuItem,FormControl, FormHelperText, Button, InputLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
const apiUrl = import.meta.env.MODE === "development" ? "http://localhost:5000" : import.meta.env.VITE_API_URL;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    control
  } = useForm();
  
  const onSubmit = async (data: any) => {
    const response = await axios.post(`${apiUrl}api/contact`, data);
    if (response.status === 201) {
      alert('Thank you for your message. We will contact you soon!');
      reset();
    } else {
      alert('Something went wrong. Please try again later.');
    }
  }
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log('Form submitted:', formData);
  //   alert('Thank you for your message. We will contact you soon!');
  //   setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  // };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['110, Indore Center, Opp.High Court', 'M.G. Road, Indore - 452001 (M.P), INDIA']
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 94253 34391']
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['shubhampatidar5555@gmail.com']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM']
    }
  ];



  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your legal needs? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 group">
                  <div className="bg-blue-900 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-all duration-300 transform group-hover:rotate-12">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-6 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Emergency Contact</h4>
              <p className="text-blue-700">For urgent legal matters, call us 24/7 at:</p>
              <div className="flex items-center space-x-4 mt-3">
                <a href="tel:+919425334391" className="text-xl font-bold text-blue-900 hover:text-amber-600 transition-colors">
                  +91 94253 34391
                </a>
                <a 
                  href="https://wa.me/919425334391?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20legal%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="h-6 w-6" />
              </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <TextField
                    fullWidth
                    id="name"
                    required
                    {...register('name', { required: true })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <TextField
                    fullWidth
                    id="phone"
                    required
                    {...register('phone', { required: true })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <TextField
                  fullWidth
                  id="email"
                  type="email"
                  required
                  {...register('email', { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Legal Matter Type *
                </label>
                <Controller
                  name="subject"
                  control={control}
                  rules={{ required: "Please select a legal matter" }}
                  render={({ field }) => (
                    <FormControl fullWidth error={!!errors.subject}>
                      <InputLabel id="subject-label">Legal Matter Type</InputLabel>
                      <Select
                        {...field}
                        labelId="subject-label"
                        label="Legal Matter Type"
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        displayEmpty={false}
                      >
                        <MenuItem value="service">Service Matters</MenuItem>
                        <MenuItem value="property">Property Law</MenuItem>
                        <MenuItem value="family">Family & Matrimonial Law</MenuItem>
                        <MenuItem value="civil">Civil Litigation</MenuItem>
                        <MenuItem value="arbitration">Arbitration & ADR</MenuItem>
                        <MenuItem value="criminal">Criminal Defense</MenuItem>
                        <MenuItem value="other">Other Legal Matters</MenuItem>
                      </Select>
                      {errors.subject && (
                        <FormHelperText>{errors.subject.message as string}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <TextField
                  fullWidth
                  id="message"
                  required
                  multiline
                  rows={4}
                  {...register('message', { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your message"
                />
              </div>

              <div>
                <Button type='submit' variant="contained" color="primary" size="large" startIcon={<Send />} className="bg-amber-500 hover:bg-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Send Message
                </Button>
              </div>

              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;