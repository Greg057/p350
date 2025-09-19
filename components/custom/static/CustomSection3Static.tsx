"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from 'lucide-react';
import { renderIcon } from '@/lib/hybrid-icon-resolver';
import Image from 'next/image';

interface StaticSectionData {
  section_name: string
  layout_type: 'card' | 'timeline' | 'list'
  items: Array<{
    primaryTitle?: string
    secondaryTitle?: string
    dateInfo?: string
    location?: string
    description?: string
    logoUrl?: string | null
    customLinks: Array<{
      icon: string      // Library key OR custom SVG data
      title: string
      url: string
    }>
  }>
}


export default function CustomSection3Static({ section }: { section: StaticSectionData }) {
  const sectionId = section.section_name.toLowerCase().replace(/\s+/g, '-')

  return (
    <section id={`custom-${sectionId}`} className="mb-16 animate-in fade-in slide-in-from-bottom duration-700">
      <h2 className="text-3xl font-bold mb-8">{section.section_name}</h2>
      <div className="space-y-6">
        {section.items.map((item, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom bg-card overflow-hidden"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  {item.logoUrl && (
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center flex-shrink-0">
                      <Image
                        src={item.logoUrl}
                        alt="Logo"
                        fill
                        className="object-cover"
                        sizes="48px"
                        priority={index === 0}
                      />
                    </div>
                  )}
                  <div>
                    <CardTitle className="text-xl">{item.primaryTitle}</CardTitle>
                    {item.secondaryTitle && (
                      <CardDescription className="text-lg font-medium">{item.secondaryTitle}</CardDescription>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {item.dateInfo && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <span>{item.dateInfo}</span>
                    </div>
                  )}
                  {item.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            {item.description && (
              <CardContent className="pb-4">
                <div
                  className="text-muted-foreground leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </CardContent>
            )}
            {item.customLinks && item.customLinks.length > 0 && (
              <CardContent className="pt-0 pb-4">
                <div className="flex flex-wrap gap-2">
                  {item.customLinks.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:scale-105 transition-transform duration-200 bg-transparent"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.title}
                        className="flex items-center gap-2"
                      >
                        {renderIcon(link.icon, 'h-4 w-4')}
                        {link.title}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}