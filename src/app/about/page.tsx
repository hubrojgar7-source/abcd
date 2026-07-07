"use client";

import Link from "next/link";
import {
  ArrowRight, ArrowUpRight,
  Users, Globe, Shield, Heart,
  Target, Zap, Star, MapPin,
  MessageSquare, Tag, Calendar,
  ChevronRight,
} from "lucide-react";

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "50+", label: "Neighborhoods" },
  { value: "100+", label: "Services" },
  { value: "4.9", label: "App Rating" },
];

const values = [
  { icon: Heart, title: "Community First", desc: "Neighbors helping neighbors. Every feature strengthens local connections." },
  { icon: Shield, title: "Trust & Safety", desc: "Verified users, secure transactions, and transparent reviews." },
  { icon: Globe, title: "Sustainability", desc: "Reducing waste through local exchanges and giveaways." },
  { icon: Users, title: "Inclusivity", desc: "Simple tools for real people, regardless of background." },
];

const features = [
  { icon: Tag, title: "Marketplace", desc: "Buy, sell, exchange, giveaway, or request items from your neighbors." },
  { icon: Calendar, title: "Events", desc: "Discover and organize community events, workshops, and meetups." },
  { icon: MessageSquare, title: "Messaging", desc: "Real-time chat with image sharing to coordinate transactions." },
  { icon: Star, title: "Profiles", desc: "Build trust through verified profiles and community reputation." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10 p-2" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
      {/* Hero */}
      <div className="rounded-[24px] bg-[#1D1B17] px-14 py-16 text-white">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#B8F25E] tracking-wide uppercase mb-5">About Sewago</p>
          <h1 className="text-[44px] leading-[1.15] font-normal mb-5">
            Connecting communities,<br />one neighborhood at a time.
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-xl mb-10">
            Sewago is a premium platform designed to make neighborhood sharing seamless. 
            From marketplace exchanges to community events, we empower people to connect 
            and build stronger local communities.
          </p>
          <div className="flex gap-3">
            <Link href="/register" className="flex items-center gap-2 rounded-full bg-[#B8F25E] px-7 py-3.5 text-base font-semibold text-[#202124]">
              Get Started <ArrowRight size={16} />
            </Link>
            <Link href="/dashboard/marketplace" className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-base font-medium text-white/80 hover:bg-white/5 transition-colors">
              Explore Marketplace
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-[24px] bg-white p-7 shadow-sm text-center">
            <p className="text-[40px] font-semibold text-[#202124] leading-none">{s.value}</p>
            <p className="text-base text-[#9A9A9A] mt-2">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-2 gap-5">
        <div className="rounded-[24px] bg-white p-9 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <Target size={20} strokeWidth={1.5} className="text-[#202124]" />
            <h2 className="text-2xl font-normal text-[#202124]">Our Mission</h2>
          </div>
          <p className="text-lg text-[#6B6B6B] leading-relaxed mb-6">
            To empower every neighborhood with tools that make sharing, trading, and connecting 
            effortless. We envision a world where communities are stronger because people can 
            easily find what they need — right next door.
          </p>
          <div className="flex flex-col gap-3">
            {["Reduce waste through local exchanges", "Strengthen neighborhood bonds", "Make essential services accessible"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#B8F25E] flex-shrink-0" />
                <span className="text-base text-[#202124]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] bg-white p-9 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <Zap size={20} strokeWidth={1.5} className="text-[#202124]" />
            <h2 className="text-2xl font-normal text-[#202124]">Our Vision</h2>
          </div>
          <p className="text-lg text-[#6B6B6B] leading-relaxed mb-6">
            A world where every neighborhood thrives through connection — where no item goes 
            unused, no skill goes unshared, and every community member feels valued and supported.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "2024", text: "Founded" },
              { num: "50+", text: "Neighborhoods" },
              { num: "10K+", text: "Lives impacted" },
              { num: "100+", text: "Services" },
            ].map((item) => (
              <div key={item.text} className="rounded-2xl bg-[#F8F8F8] p-4">
                <p className="text-xl font-semibold text-[#202124]">{item.num}</p>
                <p className="text-sm text-[#9A9A9A] mt-0.5">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div>
        <div className="mb-8">
          <h2 className="text-[32px] font-normal text-[#202124] mb-2">Our Values</h2>
          <p className="text-lg text-[#9A9A9A]">The principles that guide everything we build</p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {values.map((val) => (
            <div key={val.title} className="rounded-[24px] border border-gray-100 bg-white p-7 shadow-sm">
              <val.icon size={22} strokeWidth={1.5} className="text-[#202124] mb-4" />
              <p className="text-lg font-semibold text-[#202124] mb-2">{val.title}</p>
              <p className="text-base text-[#9A9A9A] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <div className="mb-8">
          <h2 className="text-[32px] font-normal text-[#202124] mb-2">What We Offer</h2>
          <p className="text-lg text-[#9A9A9A]">Everything you need for a connected community</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {features.map((feat) => (
            <div key={feat.title} className="flex items-start gap-5 rounded-[24px] bg-white p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8F8F8] flex-shrink-0">
                <feat.icon size={20} strokeWidth={1.5} className="text-[#202124]" />
              </div>
              <div>
                <p className="text-lg font-semibold text-[#202124] mb-1.5">{feat.title}</p>
                <p className="text-base text-[#9A9A9A] leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="rounded-[24px] bg-white p-12 shadow-sm text-center">
        <h2 className="text-[32px] font-normal text-[#202124] mb-3">Built by a Passionate Team</h2>
        <p className="text-lg text-[#9A9A9A] max-w-2xl mx-auto mb-8 leading-relaxed">
          Our team of 50+ engineers, designers, and community advocates work tirelessly 
          to build the best neighborhood platform.
        </p>
        <div className="flex justify-center gap-3">
          <Link href="/dashboard/help" className="flex items-center gap-2 rounded-full bg-[#B8F25E] px-7 py-3.5 text-base font-semibold text-[#202124]">
            Contact Team <ArrowRight size={16} />
          </Link>
          <Link href="/register" className="flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-base font-medium text-[#6B6B6B] hover:bg-gray-50 transition-colors">
            Join Us
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-[24px] bg-[#1D1B17] p-12 text-center">
        <h2 className="text-[32px] font-normal text-white mb-3">Ready to join your neighborhood?</h2>
        <p className="text-lg text-white/40 mb-8 max-w-lg mx-auto">
          Start buying, selling, exchanging, and connecting with your community today.
        </p>
        <Link href="/register" className="inline-flex items-center gap-2 rounded-full bg-[#B8F25E] px-8 py-4 text-lg font-semibold text-[#202124]">
          Get Started Free <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
