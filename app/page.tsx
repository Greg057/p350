import UserInfo3Static from '@/components/userInfo/static/UserInfo3Static'
import Skills1Static from '@/components/skills/static/Skills1Static'
import Projects1Static from '@/components/projects/static/Projects1Static'
import CustomSection3Static from '@/components/custom/static/CustomSection3Static'
import CustomSectionListStatic from '@/components/custom/static/CustomSectionListStatic'
import CustomSectionTimelineStatic from '@/components/custom/static/CustomSectionTimelineStatic'
import portfolioData from '@/data/portfolio.json'

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <UserInfo3Static personal={portfolioData.personal} />
        {portfolioData.projects && <Projects1Static projects={portfolioData.projects} />}
        {portfolioData.workExperience && <CustomSection3Static section={{
          section_name: "Work Experience",
          layout_type: "card",
          items: portfolioData.workExperience.map((exp, index) => ({
            primaryTitle: exp.company,
            secondaryTitle: exp.position,
            dateInfo: `${exp.start_date || ''} - ${exp.end_date || 'Present'}`.trim(),
            location: exp.location,
            description: exp.description,
            logoUrl: exp.logoUrl,
            customLinks: exp.custom_links
          }))
        }} />}
        {portfolioData.education && <CustomSection3Static section={{
          section_name: "Education",
          layout_type: "card",
          items: portfolioData.education.map((edu, index) => ({
            primaryTitle: edu.university,
            secondaryTitle: edu.degree,
            dateInfo: `${edu.start_year || ''} - ${edu.end_year || 'Present'}`.trim(),
            location: edu.location,
            description: edu.description,
            logoUrl: edu.logoUrl,
            customLinks: edu.custom_links
          }))
        }} />}
        {portfolioData.customSections && portfolioData.customSections.find(s => s.id === "43748a2e-02f0-4246-bdb9-92be07b43c7a") && (() => {
          const section = portfolioData.customSections.find(s => s.id === "43748a2e-02f0-4246-bdb9-92be07b43c7a")
          const layoutMap: { [key: string]: any } = {
            'card': CustomSection3Static,
            'list': CustomSectionListStatic,
            'timeline': CustomSectionTimelineStatic
          }
          const LayoutComponent = layoutMap[section!.layout_type] || CustomSection3Static
          return <LayoutComponent section={section} />
        })()}
        {portfolioData.skills && <Skills1Static skills={portfolioData.skills} />}
      </div>
    </main>
  )
}