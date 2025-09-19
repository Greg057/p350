"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, FileDown } from "lucide-react";
import { renderIcon } from "@/lib/hybrid-icon-resolver";

// Static personal data interface (pre-processed, no DB bloat)
interface StaticPersonalData {
  personal: {
    full_name: string | null
    title: string | null
    about_me: string | null
    location: string | null
    avatarUrl: string | null
    cvUrl: string | null
    custom_links: Array<{
      icon: string      // Library key OR custom SVG data
      title: string
      url: string
    }>
  }
}


export default function UserInfo4Static({ personal }: StaticPersonalData) {
  // Find specific social links from custom_links
  const githubLink = personal.custom_links?.find(link => link.icon === 'github');
  const linkedinLink = personal.custom_links?.find(link => link.icon === 'linkedin');
  const xLink = personal.custom_links?.find(link => link.icon === 'twitter' || link.icon === 'x');

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {personal.avatarUrl && (
            <Avatar className="w-32 h-32">
              <AvatarImage src={personal.avatarUrl || undefined} alt={personal.full_name || ''} />
              <AvatarFallback>{(personal.full_name || '').split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          )}

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{personal.full_name}</h1>
            {personal.title && (
              <p className="text-xl text-muted-foreground mb-4">{personal.title}</p>
            )}
            {personal.location && (
              <p className="text-muted-foreground mb-4">{personal.location}</p>
            )}

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
              {/* Email contact */}
              {personal.custom_links?.find(link => link.icon === 'email') && (
                <Button variant="outline" size="sm" asChild>
                  <a href={`mailto:${personal.custom_links.find(link => link.icon === 'email')?.url}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
              )}

              {/* CV/Resume download */}
              {personal.cvUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={personal.cvUrl} target="_blank" rel="noopener noreferrer">
                    <FileDown className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              )}

              {/* Specific social links */}
              {githubLink && (
                <Button variant="outline" size="sm" asChild>
                  <a href={githubLink.url} target="_blank" rel="noopener noreferrer">
                    {renderIcon('github', 'mr-2')}
                    {githubLink.title}
                  </a>
                </Button>
              )}

              {linkedinLink && (
                <Button variant="outline" size="sm" asChild>
                  <a href={linkedinLink.url} target="_blank" rel="noopener noreferrer">
                    {renderIcon('linkedin', 'mr-2')}
                    {linkedinLink.title}
                  </a>
                </Button>
              )}

              {xLink && (
                <Button variant="outline" size="sm" asChild>
                  <a href={xLink.url} target="_blank" rel="noopener noreferrer">
                    {renderIcon('x', 'mr-2')}
                    {xLink.title}
                  </a>
                </Button>
              )}

              {/* Other custom links (excluding the ones we already handled) */}
              {personal.custom_links?.filter(link =>
                link.icon !== 'email' &&
                link.icon !== 'github' &&
                link.icon !== 'linkedin' &&
                link.icon !== 'twitter' &&
                link.icon !== 'x'
              ).map((link, index) => (
                <Button key={index} variant="outline" size="sm" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" title={link.title}>
                    {renderIcon(link.icon, 'mr-2')}
                    {link.title}
                  </a>
                </Button>
              ))}
            </div>

            {personal.about_me && (
              <p className="text-muted-foreground leading-relaxed">
                {personal.about_me}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}