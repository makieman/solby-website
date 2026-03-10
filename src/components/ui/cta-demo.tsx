import { CTASection } from "@/components/ui/cta-with-rectangle"

export function CTADemo() {
    return (
        <div className="py-20 bg-muted/30">
            <CTASection
                badge={{
                    text: "Get started"
                }}
                title="Ready to Transform Your Business?"
                description="Join hundreds of businesses that trust Solby to streamline operations and grow revenue."
                action={{
                    text: "Start Free Trial",
                    href: "/contact",
                    variant: "glow"
                }}
            />
        </div>
    )
}
